const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const Notification = db.notification;
const Op = Sequelize.Op;
var $bean = require('../common/utils/hyd-bean-utils');
const redisService = require('../service/redis.service');
const baseDao = require('./base.dao');
const listModelType = require('../common/obj/modelType/listModelType');
const DEFAULT_NUMBER_NOTIFICATION = 10;
const DEFAULT_OFFSET_NOTIFICATION = 0;
const TYPE_READ_NOTIFICATION = 0;
const TYPE_UN_READ_NOTIFICATION = 1;
const TYPE_NEW_NOTIFICATION = 'TYPE_NEW_NOTIFICATION';
const TYPE_UPDATED_NOTIFICATION = 'TYPE_UPDATED_NOTIFICATION';

var notificationDao = {

    async getByIdentifyPost(postId, identify) {
        let result = await Notification.findOne({
            where: {[Op.and]: [{postId: postId}, {identify: identify}]}
        })
        return result;
    },

    async getByIdentifyCommentId(commentId, identify) {
        let result = await Notification.findOne({
            where: {[Op.and]: [{commentId: commentId}, {identify: identify}]}
        })
        return result;
    },

    async newNotification(notification) {
        let result = await baseDao.insert(notification, listModelType.modelTypeNotification);
        if ($bean.isNotEmpty(result)) {
            let realTimeNotification = $bean.cloneJson(result);
            redisService.pubStreamObj({
                type: TYPE_NEW_NOTIFICATION,
                value: realTimeNotification,
                chatId: notification['userId']
            });
        }
    },

    async quickUpdate(notification) {
        let result = await baseDao.quickUpdate(notification, listModelType.modelTypeNotification);
        let realTimeNotification = $bean.cloneJson(result);
        redisService.pubStreamObj({
            type: TYPE_UPDATED_NOTIFICATION,
            value: realTimeNotification,
            chatId: realTimeNotification['userId']
        });
        return result;
    },

    async numberUnread(userLoginId) {
        let unReadNotfications = await Notification.findAll({
            where: {[Op.and]: [{userId: userLoginId}, {status: TYPE_UN_READ_NOTIFICATION}]},
            attributes: ['id']
        })
        let result = {count: unReadNotfications.length}
        return result;
    },

    async getNotification(userId, offset) {
        if (!$bean.isNumber(offset)) {
            offset = DEFAULT_OFFSET_NOTIFICATION;
        }
        let result = await Notification.findAll({
            where: {[Op.and]: [{userId: userId}, {status: TYPE_UN_READ_NOTIFICATION}]},
            order: [['updatedAt', 'ASC']],
            limit: DEFAULT_NUMBER_NOTIFICATION,
            offset: offset,
        })
        return result;
    }
}

module.exports = notificationDao;
