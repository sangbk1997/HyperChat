const notificationModel = require('../model/notification.model');
var bcrypt = require('bcrypt');
var $bean = require('../common/utils/hyd-bean-utils');
module.exports = (sequelize, Sequelize) => {
    const Notification = sequelize.define('notifications', {
            [notificationModel.id.title]: {
                type: Sequelize.STRING,
                primaryKey: true
            },
            [notificationModel.userId.title]: {
                type: Sequelize.STRING
            },
            [notificationModel.postId.title]: {
                type: Sequelize.STRING
            },
            [notificationModel.commentId.title]: {
                type: Sequelize.STRING
            },
            [notificationModel.identify.title]: {
                type: Sequelize.STRING
            },
            [notificationModel.attachInfo.title]: {
                type: Sequelize.TEXT
            },
            [notificationModel.content.title]: {
                type: Sequelize.STRING
            },
            [notificationModel.type.title]: {
                type: Sequelize.STRING
            },
            [notificationModel.typeFor.title]: {
                type: Sequelize.STRING
            },
            [notificationModel.status.title]: {
                type: Sequelize.INTEGER
            }
        }
    );
    return Notification;
}
