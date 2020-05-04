const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const Post = db.post;
const User = db.user;
const UserReactPostComment = db.userReactPostComment;
const Comment = db.comment;
const Op = Sequelize.Op;
const redisService = require('../service/redis.service');
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
const deviceDao = require('./device.dao');
const notificationDao = require('./notification.dao');
const notificationStatic = require('../common/obj/objStatic/notificationStatic');
const lodash = require('lodash')
var $bean = require('../common/utils/hyd-bean-utils');
const DEFAULT_NUMBER_POSTS = 20;
const DEFAULT_OFFSET_POSTS = 0;
const TYPE_NEW_POST = 'NEW_POST';
const TYPE_UPDATED_POST = 'UPDATED_POST';
const TYPE_REMOVE_POST = 'REMOVE_POST';
var postDao = {
    async newPost(userLogin, post) {
        let result = {};
        let objPost = {};
        for (key in listModelType.modelTypePost.mapObj) {
            objPost[listModelType.modelTypePost.mapObj[key].title] = post[key];
        }
        if ($bean.isEmpty(objPost['userId'])) {
            objPost['userId'] = userLogin.id;
        }
        if ($bean.isEmpty(post['id'])) {
            objPost['id'] = $bean.genRandomID(16);
        }
        objPost['totalComment'] = 0;
        console.log("obj post")
        console.log(objPost);
        result = await baseDao.insert(objPost, listModelType.modelTypePost);
        let realTimePost = $bean.cloneJson(result);
        realTimePost['user'] = userLogin;
        redisService.pubStreamObj({
            type: TYPE_NEW_POST,
            value: realTimePost,
            chatId: 'CHANNEL_ACTIVITIES'
        });
        this.notifyForTimeline(userLogin, result);
        if ($bean.isNotEmpty(post['tagPeople'])) {
            let tagPeople = JSON.parse(post['tagPeople']);
            if ($bean.isNotEmpty(tagPeople)) {
                for (let i = 0; i < tagPeople.length; i++) {
                    let notification = {
                        userId: tagPeople[i].id,
                        postId: result.id,
                        identify: notificationStatic.TYPE_IDENTIFY_TAG,
                        attachInfo: JSON.stringify({user: userLogin}),
                        content: ' đã gắn thẻ bạn trong một bài viết',
                        type: notificationStatic.TYPE_TAG_NOTIFICATION,
                        typeFor: notificationStatic.TYPE_FOR_POST,
                        status: notificationStatic.STATUS_UNREAD_NOTIFICATION
                    }
                    notificationDao.newNotification(notification);
                }
            }
        }
        return result;
    },

    async notifyForTimeline(userLogin, post) {
        let devices = await deviceDao.getAll();
        if ($bean.isNotEmpty(devices)) {
            console.log("List devices");
            // console.log(devices);
            var registrationTokens = [];
            for (let i = 0; i < devices.length; i++) {
                if (devices[i]['userId'] != userLogin.id) {
                    registrationTokens.push(devices[i]['tokenFcm']);
                }
            }
            console.log(registrationTokens);
            if ($bean.isNotEmpty(registrationTokens)) {
                var notification = {
                    data: {
                        type: 'TYPE_NOTIFICATION_FOR_TIME_LINE',
                        infoUser: JSON.stringify(userLogin),
                        infoPost: JSON.stringify(post)
                    },
                    android: {
                        "priority": "high"
                    },
                    tokens: registrationTokens
                }
                VGlobal['fcm'].messaging().sendMulticast(notification)
                    .then((response) => {
                        if (response.failureCount > 0) {
                            const failedTokens = [];
                            response.responses.forEach((resp, idx) => {
                                if (!resp.success) {
                                    failedTokens.push(registrationTokens[idx]);
                                }
                            });
                            console.log('List of tokens that caused failures: ' + failedTokens);
                        }
                    });
            }
        }
    },

    async updatedPost(userLogin, post) {
        let oldPost = await baseDao.findById(post.id, listModelType.modelTypePost);
        let result = await baseDao.update(post, listModelType.modelTypePost);
        // // Gửi messenger realtime lên trang
        let realTimePost = $bean.cloneJson(result);
        // realTimePost['user'] = userLogin;
        console.log(realTimePost);
        // Realtime về người dùng
        redisService.pubStreamObj({
            type: TYPE_UPDATED_POST,
            value: realTimePost,
            chatId: 'CHANNEL_ACTIVITIES'
        });
        let oldTagPeople = oldPost['tagPeople'];
        let newTagPeople = post['tagPeople'];
        oldTagPeople = JSON.parse(oldTagPeople);
        newTagPeople = JSON.parse(newTagPeople);
        let moreTagPeople = lodash.difference(newTagPeople, oldTagPeople, 'id');
        if ($bean.isNotEmpty(moreTagPeople)) {
            for (let i = 0; i < moreTagPeople.length; i++) {
                let notification = {
                    userId: moreTagPeople[i].id,
                    postId: result.id,
                    identify: notificationStatic.TYPE_IDENTIFY_TAG,
                    attachInfo: JSON.stringify({user: userLogin}),
                    content: ' đã gắn thẻ bạn trong một bài viết',
                    type: notificationStatic.TYPE_TAG_NOTIFICATION,
                    typeFor: notificationStatic.TYPE_FOR_POST,
                    status: notificationStatic.STATUS_UNREAD_NOTIFICATION
                }
                notificationDao.newNotification(notification);
            }
        }
        return result;
    },

    async removePost(postId) {
        let result = await baseDao.delete(postId, listModelType.modelTypePost);
        // // Gửi messenger realtime lên trang
        let realTimePost = $bean.cloneJson(result);
        console.log(realTimePost);
        // Realtime về người dùng
        redisService.pubStreamObj({
            type: TYPE_REMOVE_POST,
            value: realTimePost,
            chatId: 'CHANNEL_ACTIVITIES'
        });
        return result;
    },

    async viewPost(postId) {
        let result = {};
        result = await Post.findOne({
            where: {id: postId}
        })
        return result;
    },

    async suggestPosts() {
        let result = [];
        result = await Post.findAll({
            subQuery: false,
            include: [
                {model: User, attributes: ['id', 'username', 'email', 'avatar_url']},
                {model: UserReactPostComment},
                {
                    model: Comment,
                    include: [
                        {model: User, attributes: ['id', 'username', 'email', 'avatar_url']},
                    ],
                    where: {parentId: null},
                    order: [['createdAt', 'DESC']],
                    limit: 5
                }
            ],
            order: [['createdAt', 'DESC']],
            limit: 10,
            offset: 0
        })
        return result;
    },

    async morePosts(offset) {
        let result = [];
        result = await Post.findAll({
            include: [
                {model: User, attributes: ['id', 'username', 'email', 'avatar_url']},
                {model: UserReactPostComment},
                {
                    model: Comment,
                    where: {parentId: null},
                    order: [['createdAt', 'DESC']],
                    limit: 5,
                    offset: 0
                }
            ],
            order: [['createdAt', 'DESC']],
            limit: 10,
            offset: offset
        })
        return result;
    },

    async listPostByUser(userId) {
        let result = [];
        result = await Post.findAll({
            where: {userId: userId},
            include: [
                {model: User, attributes: ['id', 'username', 'email', 'avatar_url']},
                {model: UserReactPostComment},
                {
                    model: Comment,
                    where: {parentId: null},
                    order: [['createdAt', 'DESC']],
                    limit: 5,
                    offset: 0
                }
            ],
            order: [['createdAt', 'DESC']],
            limit: 10,
            offset: 0
        })
        return result;
    },

    async morePostsByUser(userId, offset) {
        let result = [];
        result = await Post.findAll({
            where: {userId: userId},
            include: [
                {model: User, attributes: ['id', 'username', 'email', 'avatar_url']},
                {model: UserReactPostComment},
                {
                    model: Comment,
                    where: {parentId: null},
                    order: [['createdAt', 'DESC']],
                    limit: 5,
                    offset: 0
                }
            ],
            order: [['createdAt', 'DESC']],
            limit: 10,
            offset: offset
        })
        return result;
    }
}

module.exports = postDao;
