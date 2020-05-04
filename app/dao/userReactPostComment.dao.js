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
const notificationDao = require('./notification.dao');
const userStatic = require('../common/obj/objStatic/userStatic');
var $bean = require('../common/utils/hyd-bean-utils');
const notificationStatic = require('../common/obj/objStatic/notificationStatic');
var HyperError = require("../common/obj/hyper-error/hyper-error")

const DEFAULT_NUMBER_POSTS = 20;
const DEFAULT_OFFSET_POSTS = 0;
const TYPE_NEW_REACT_POST = 'NEW_REACT_POST';
const TYPE_UPDATED_REACT_POST = 'UPDATED_REACT_POST';
const TYPE_REMOVE_REACT_POST = 'REMOVE_REACT_POST';
const TYPE_NEW_REACT_COMMENT = 'NEW_REACT_COMMENT';
const TYPE_UPDATED_REACT_COMMENT = 'UPDATED_REACT_COMMENT';
const TYPE_REMOVE_REACT_COMMENT = 'REMOVE_REACT_COMMENT';
var userReactPostCommentDao = {
    async doInsert(userLogin, react, type) {
        let result = {};
        let objUserReact = {};
        for (key in listModelType.modelTypeUserReactPostComment.mapObj) {
            objUserReact[listModelType.modelTypeUserReactPostComment.mapObj[key].title] = react[key];
        }
        if ($bean.isNil(objUserReact['id'])) {
            objUserReact['id'] = $bean.genRandomID(16);
        }
        if ($bean.isNil(objUserReact['userId'])) {
            objUserReact['userId'] = userLogin.id;
        }
        // Gửi messenger realtime lên chat
        let realTimeReact = $bean.cloneJson(objUserReact);
        realTimeReact['user'] = userLogin;
        // Realtime về người dùng
        redisService.pubStreamObj({
            type: type,
            value: realTimeReact,
            chatId: 'CHANNEL_ACTIVITIES'
        });
        result = await baseDao.insert(objUserReact, listModelType.modelTypeUserReactPostComment);
        let post = await baseDao.findById(react['postId'], listModelType.modelTypePost);
        let comment = {};
        if ($bean.isNotEmpty(react['commentId'])) {
            comment = await baseDao.findById(react['commentId'], listModelType.modelTypeComment);
        }
        let isNotification = $bean.isEmpty(result['commentId']) ? (userLogin.id != post['userId']) : (userLogin.id != comment['userId']);
        if (isNotification) {
            let notification = {};
            if ($bean.isEmpty(result['commentId'])) {
                notification = await notificationDao.getByIdentifyPost(result['postId'], notificationStatic.TYPE_IDENTIFY_REACT_POST);
            } else {
                notification = await notificationDao.getByIdentifyCommentId(result['commentId'], notificationStatic.TYPE_IDENTIFY_REACT_COMMENT);
            }
            if ($bean.isEmpty(notification)) {
                let newNotification = {
                    userId: $bean.isEmpty(result['commentId']) ? post['userId'] : comment['userId'],
                    postId: post['id'],
                    commentId: result['commentId'],
                    identify: $bean.isEmpty(result['commentId']) ? notificationStatic.TYPE_IDENTIFY_REACT_POST : notificationStatic.TYPE_IDENTIFY_REACT_COMMENT,
                    attachInfo: JSON.stringify({users: [userLogin], react: result['codeEmoji']}),
                    content: $bean.isEmpty(result['commentId']) ? 'đã phản hồi vào bài viết của bạn' : 'đã phản hồi vào bình luận của bạn',
                    type: notificationStatic.TYPE_REACT_NOTIFICATION,
                    typeFor: $bean.isEmpty(result['commentId']) ? notificationStatic.TYPE_FOR_POST : notificationStatic.TYPE_FOR_COMMENT,
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
                    attachInfo: JSON.stringify({users: users, react: result['codeEmoji']}),
                    status: notificationStatic.STATUS_UNREAD_NOTIFICATION
                }
                notificationDao.quickUpdate(updateNotification);
            }
        }
        return result;
    },

    async doDelete(reactId, type) {
        let deletedReact = await baseDao.delete(reactId, listModelType.modelTypeUserReactPostComment);
        if ($bean.isNotEmpty(deletedReact)) {
            redisService.pubStreamObj({
                type: type,
                value: deletedReact,
                chatId: 'CHANNEL_ACTIVITIES'
            });
        }
        return deletedReact;
    },

    async getReactsByPost(postId) {
        var attributes = ['id', 'username', 'email', 'avatar_url'];
        return UserReactPostComment.findAll({
            where: {
                postId: postId
            },
            include: [{model: User, attributes: attributes}]
        })
    },

    async insertReactPost(userLogin, react) {
        return this.doInsert(userLogin, react, TYPE_NEW_REACT_POST);
    },

    async insertReactComment(userLogin, react) {
        return this.doInsert(userLogin, react, TYPE_NEW_REACT_COMMENT);
    },

    async removeReactPost(reactId) {
        return this.doDelete(reactId, TYPE_REMOVE_REACT_POST);
    },

    async removeReactComment(reactId) {
        return this.doDelete(reactId, TYPE_REMOVE_REACT_COMMENT);
    }
}

module.exports = userReactPostCommentDao;
