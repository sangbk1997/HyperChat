const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const redisConfig = require('../common/config/redis.config');
const notificationModel = require('../model/notification.model');
const Op = Sequelize.Op;
var $bean = require('../common/utils/hyd-bean-utils');
var commonStatic = require('../common/obj/objStatic/commonStatic');
const baseDao = require('../dao/base.dao');
const notificationDao = require('../dao/notification.dao');
const redisService = require('./redis.service');
const listModelType = require('../common/obj/modelType/listModelType');
var HyperError = require("../common/obj/hyper-error/hyper-error")
const TYPE_UPDATED_NOTIFICATION = 0;
const TYPE_UN_READ_NOTIFICATION = 1;
var notificationService = {
    insert(notification) {
        return baseDao.insert(notification, listModelType.modelTypeNotification);
    },

    get(notificationId) {
        return baseDao.findById(notificationId, listModelType.modelTypeNotification);
    },

    list() {
        return baseDao.list(listModelType.modelTypeNotification);
    },

    update(notification) {
        return baseDao.update(notification, listModelType.modelTypeNotification);
    },

    quickUpdate(notification){
        return notificationDao.quickUpdate(notification);
    },


    delete(notificationId) {
        return baseDao.delete(notificationId, listModelType.modelTypeNotification);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeNotification);
    },

    numberUnread(userId) {
        return notificationDao.numberUnread(userId);
    },

    suggestNotifications(userId) {
        return notificationDao.getNotification(userId, 0);
    },

    loadMore(userId, offset) {
        return notificationDao.getNotification(userId, offset);
    },

    async readNotifications(notificationIds) {
        let listReq = [];
        if ($bean.isNotEmpty(notificationIds)) {
            for (let i = 0; i < notificationIds.length; i++) {
                let promise = baseDao.quickUpdate({id: notificationIds[i], status: TYPE_UPDATED_NOTIFICATION});
                listReq.push(promise);
            }
        }
        let result = await Promise.all(listReq);
        return result;
    }
}

module.exports = notificationService;
