const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const UserMessenger = db.userMessenger;
const Op = Sequelize.Op;
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
var userMessengerStatic = require('../common/obj/objStatic/userMessengerStatic');
var $bean = require('../common/utils/hyd-bean-utils');

var userMessengerDao = {

    //
    // requestToChat(channelId) {
    //     userChannelService.requestChat(channelId).then(function (request) {
    //         //    Notification here
    //     })
    // },
    //
    // doRejectRequest(requestId) {
    //     return baseService.doDelete(requestId, modelTypeUserChannel).then(function (data) {
    //         console.log('Reject request success !');
    //         console.log(data);
    //         return data;
    //         //    Notification here
    //     })
    // },
    //
    // async rejectRequest(requestId) {
    //     let result = await appService.doRejectRequest(requestId);
    //     return result;
    // },
    //
    //
    // readMessage(messengerId) {
    //     userMessengerService.readMessage(messengerId).then(function (data) {
    //         //    Notification here
    //     })
    // },
    //
    // reactMessage(messengerId, emojiId, textEmoji) {
    //     userMessengerService.reactMessenger(messengerId, emojiId, textEmoji).then(function (data) {
    //         //    Notification here
    //     })
    // },

    async deleteByMessenger(messengerId) {
        let result = {};
        let rowAffected = await UserMessenger.destroy({where: {messengerId: messengerId}});
        if ($bean.isNotNil(rowAffected)) {
            result = {message: 'Delete all user-messenger by messenger success !'};
        }
        return result;
    },

    async deleteByChannel(channelId) {
        let result = {};
        let rowAffected = await UserMessenger.destroy({where: {channelId: channelId}});
        if ($bean.isNotNil(rowAffected)) {
            result = {message: 'Delete all user-messenger by channel success !'};
        }
        return result;
    },

    async deleteByUser(userId) {
        let result = {};
        let rowAffected = await UserMessenger.destroy({where: {userId: userId}});
        if ($bean.isNotNil(rowAffected)) {
            result = {message: 'Delete all user-messenger by user success !'};
        }
        return result;
    }
}

module.exports = userMessengerDao;


// Chú thích biến
// attributes: mảng các thuộc tính
