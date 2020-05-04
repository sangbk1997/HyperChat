const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const Post = db.post;
const User = db.user;
const UserReactPostComment = db.userReactPostComment;
const Attachment = db.attachment;
const Comment = db.comment;
const Op = Sequelize.Op;
const redisService = require('../service/redis.service');
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
const userChatDao = require('./userChat.dao');
const notificationDao = require('./notification.dao');
const userStatic = require('../common/obj/objStatic/userStatic');
const notificationStatic = require('../common/obj/objStatic/notificationStatic');
const HyperError = require('../common/obj/hyper-error/hyper-error')
var $bean = require('../common/utils/hyd-bean-utils');
const DEFAULT_NUMBER_POSTS = 20;
const DEFAULT_OFFSET_POSTS = 0;
const TYPE_NEW_COMMENT = 'NEW_COMMENT';
const TYPE_UPDATED_COMMENT = 'UPDATED_COMMENT';
const TYPE_REMOVE_COMMENT = 'REMOVE_COMMENT';
var commentDao = {
    async newComment(userLogin, comment) {
        let result = {};
        if ($bean.isEmpty(comment['userId'])) {
            comment['userId'] = userLogin.id;
        }
        if ($bean.isEmpty(comment['id'])) {
            comment['id'] = $bean.genRandomID(16);
        }
        if ($bean.isEmpty(comment['totalReply'])) {
            comment['totalReply'] = 0;
        }
        result = await baseDao.insert(comment, listModelType.modelTypeComment);
        // // Gửi messenger realtime lên trang
        let realTimeComment = $bean.cloneJson(result);
        realTimeComment['user'] = userLogin;
        console.log(realTimeComment);
        // Realtime về người dùng
        redisService.pubStreamObj({
            type: TYPE_NEW_COMMENT,
            value: realTimeComment,
            chatId: 'CHANNEL_ACTIVITIES'
        });
        let post = await baseDao.findById(comment['postId'], listModelType.modelTypePost);
        let parentComment = await baseDao.findById(result['parentId'], listModelType.modelTypeComment);
        let isNotification = $bean.isEmpty(result['parentId']) ? (userLogin.id != post['userId']) : (userLogin.id != parentComment['userId']);
        if (isNotification) {
            let notification = {};
            if ($bean.isEmpty(result['parentId'])) {
                notification = await notificationDao.getByIdentifyPost(post['id'], notificationStatic.TYPE_IDENTIFY_COMMENT_POST);
            } else {
                notification = await notificationDao.getByIdentifyCommentId(result['parentId'], notificationStatic.TYPE_IDENTIFY_REPLY_COMMENT);
            }
            if ($bean.isEmpty(notification)) {
                let newNotification = {
                    userId: $bean.isEmpty(result['parentId']) ? post['userId'] : parentComment['userId'],
                    postId: post['id'],
                    commentId: result['id'],
                    identify: $bean.isEmpty(result['parentId']) ? notificationStatic.TYPE_IDENTIFY_COMMENT_POST : notificationStatic.TYPE_IDENTIFY_REPLY_COMMENT,
                    attachInfo: JSON.stringify({users: [userLogin]}),
                    content: $bean.isEmpty(result['parentId']) ? 'đã bình luận vào bài viết của bạn' : 'đã phản hồi vào bình luận của bạn',
                    type: notificationStatic.TYPE_COMMENT_NOTIFICATION,
                    typeFor: $bean.isEmpty(result['parentId']) ? notificationStatic.TYPE_FOR_POST : notificationStatic.TYPE_FOR_COMMENT,
                    status: notificationStatic.STATUS_UNREAD_NOTIFICATION
                }
                notificationDao.newNotification(newNotification);
            } else {
                let attachInfo = JSON.parse(notification['attachInfo']);
                let users = attachInfo['users'];
                let index = lodash.findIndex(users, function (user) {
                    return user.id == userLogin.id
                })
                if (index != -1) {
                    users.splice(index, 1);
                }
                users.push(userLogin);
                let updateNotification = {
                    id: notification['id'],
                    attachInfo: JSON.stringify({users: users}),
                    status: notificationStatic.STATUS_UNREAD_NOTIFICATION
                }
                notificationDao.quickUpdate(updateNotification);
            }
        }
        if ($bean.isNotEmpty(result['parentId'])) {
            let quickUpdateComment = {id: parentComment.id, totalReply: parentComment['totalReply'] + 1};
            baseDao.quickUpdate(quickUpdateComment, listModelType.modelTypeComment);
        }
        let quickUpdatePost = {id: result['postId'], totalComment: post['totalComment'] + 1};
        baseDao.quickUpdate(quickUpdatePost, listModelType.modelTypePost);
        return result;
    },

    async updatedComment(comment) {
        let result = await baseDao.update(comment, listModelType.modelTypeComment);
        // // Gửi messenger realtime lên trang
        let realTimeComment = $bean.cloneJson(result);
        console.log(realTimeComment);
        // Realtime về người dùng
        redisService.pubStreamObj({
            type: TYPE_UPDATED_COMMENT,
            value: realTimeComment,
            chatId: 'CHANNEL_ACTIVITIES'
        });
        return result;
    },

    async removeComment(commentId) {
        let result = await baseDao.delete(commentId, listModelType.modelTypeComment);
        // // Gửi messenger realtime lên trang
        let realTimeComment = $bean.cloneJson(result);
        console.log(realTimeComment);
        // Realtime về người dùng
        redisService.pubStreamObj({
            type: TYPE_REMOVE_COMMENT,
            value: realTimeComment,
            chatId: 'CHANNEL_ACTIVITIES'
        });
        if (result['parentId'] != null) {
            let parentComment = await baseDao.findById(result['parentId'], listModelType.modelTypeComment);
            let quickUpdateComment = {id: parentComment.id, totalReply: parentComment['totalReply'] - 1};
            baseDao.quickUpdate(quickUpdateComment, listModelType.modelTypeComment);
        }
        let post = await baseDao.findById(result['postId'], listModelType.modelTypePost);
        if ($bean.isNotEmpty(post)) {
            let quickUpdatePost = {id: result['postId'], totalComment: post['totalComment'] - 1};
            baseDao.quickUpdate(quickUpdatePost, listModelType.modelTypePost);
        }
        return result;
    },

    async listCommentByPost(postId) {
        let result = {};
        result = await Comment.findAll({
            where: {
                [Op.and]: [{postId: postId}, {parentId: null}]
            },
            include: [
                {model: User, attributes: ['id', 'username', 'email', 'avatar_url']},
                {
                    model: UserReactPostComment, order: [['createdAt', 'DESC']],
                    include: [{model: User, attributes: ['id', 'username', 'email', 'avatar_url']}]
                }
            ],
            order: [['createdAt', 'ASC']]
        })
        return result;
    },

    async listReplyComment(commentId) {
        let result = {};
        result = await Comment.findAll({
            where: {parentId: commentId},
            include: [
                {model: User, attributes: ['id', 'username', 'email', 'avatar_url']},
                {
                    model: UserReactPostComment, order: [['createdAt', 'DESC']],
                    include: [{model: User, attributes: ['id', 'username', 'email', 'avatar_url']}]
                }
            ],
            order: [['createdAt', 'ASC']],
        })
        return result;
    },
}

module.exports = commentDao;
