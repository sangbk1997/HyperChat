const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const Messenger = db.messenger;
const User = db.user;
const UserMessenger = db.userMessenger;
const Op = Sequelize.Op;
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
const userMessengerDao = require('./userMessenger.dao');
var messengerStatic = require('../common/obj/objStatic/messengerStatic');
var $bean = require('../common/utils/hyd-bean-utils');


var messengerDao = {

    // disabledMessage(messageId) {
    //     if($bean.isNotEmpty(messageId)){
    //         throw new Error('error.messenger.null')
    //     }
    //     return Messenger.update({status: messengerStatic.STATUS_DISABLED}, {where: {[Op.and]: [{id: messageId}, {userId: VGlobal['userLogin'].id}]}});
    // },
    //
    // destroyMessage: (messageId) => {
    //     if($bean.isNotEmpty(messageId)){
    //         throw new Error('error.messenger.null')
    //     }
    //     return Messenger.destroy({where: {[Op.and]: [{id: messageId}, {userId: VGlobal['userLogin'].id}]}});
    // },
    //
    //
    //
    // searchMessageByChannel(value, channelId, number, offset,) {
    //     if($bean.isNotEmpty(messageId)){
    //         throw new Error('error.channel.null')
    //     }
    //     if ($bean.isNumber(number) && $bean.isNumber(offset)) {
    //         return Messenger.findAll({
    //             where: {[Op.and]: [{channelId: channelId}, {message: {[Op.substring]: value}}]},
    //             limit: number,
    //             offset: offset
    //         })
    //     } else {
    //         if ($bean.isNotEmpty(value)) {
    //             return Messenger.findAll({where: {[Op.and]: [{channelId: channelId}, {message: {[Op.substring]: value}}]}})
    //         } else {
    //             return Messenger.findAll({where: {[Op.and]: [{channelId: channelId}]}});
    //         }
    //     }
    // }


    //New code

    // async deleteMessage(messageId) {
    //     await userMessengerService.deleteByMessenger(messageId);
    //     return baseService.doDelete(messageId, modelTypeMessenger);
    // },
    //
    //
    //
    // updateMessage(messengerId, message, type) {
    //     messengerService.editMessage(messengerId, message, type).then(function (data) {
    //         //    Notification here
    //     })
    // },
    //
    // deleteMessage(messengerId) {
    //     messengerService.disabledMessage(messengerId).then(function () {
    //         //    Notification here
    //     })
    // },
    //
    // loadMoreMessage(channelId, number, offset) {
    //     messengerService.getMessageByChannel(channelId, number, offset).then(function (data) {
    //         // Cập nhật trạng thái react của user - messenger
    //         if ($bean.isNotEmpty(data)) {
    //             for (let i = 0; i < data.length; i++) {
    //                 userMessengerService.readMessage(data.id).then(function (data) {
    //                     console.log('User read message ' + data.id);
    //                     //    Notification here
    //                 })
    //             }
    //         }
    //         return data;
    //     })
    // },

    async deleteByChannel(channelId) {
        let result = {};
        let rowAffected = await Messenger.destroy({where: {channelId: channelId}});
        if ($bean.isNotNil(rowAffected)) {
            result = {message: 'Xóa tin nhắn theo kênh chat thành công'};
        }
        return result;
    },

    async deleteMessenger(messengerId) {
        let result = {};
        result = await Messenger.destroy({where: {id: messengerId}});
        if ($bean.isNotEmpty(result)) {
            //    delete link user - messenger
            userMessengerDao.deleteByMessenger(messengerId).then(function (data) {
                console.log('Delete All user - messenger ');
                console.log(data);
            })
        }
        return result;
    },

    async getMessageByChannel(channelId, number, offset) {
        // let channel = await baseDao.findById(channelId, listModelType.modelTypeChannel);
        // let result = [];
        // if ($bean.isNotEmpty(channel)) {
        //     if (!($bean.isNumber(number) && $bean.isNumber(offset))) {
        //         number = 10;
        //         offset = 0
        //     }
        //     let rawQuery =
        //         "SELECT * " +
        //         "FROM Messengers " +
        //         "INNER JOIN Users ON (Messengers.userId = Users.id ) " +
        //         "WHERE Messengers.channelId = :channelId" +
        //         "ORDER BY UserChannels.createdAt DESC " +
        //         "LIMIT = :limit OFFSET = :offset"
        //     ;
        //     let result = await sequelizeDB.query(rawQuery,
        //         {
        //             replacements: {channelId: channelId, limit: number, offset: offset},
        //             type: Sequelize.QueryTypes.SELECT
        //         }
        //     )
        // return result;
        // if ($bean.isNumber(number) && $bean.isNumber(offset)) {
        //     result = await Messenger.findAll({
        //         where: {channelId: channelId},
        //         limit: number,
        //         offset: offset,
        //         order: [['createdAt', 'DESC']]
        //     });
        // } else {
        //     result = await Messenger.findAll({where: {channelId: channelId}, order: [['createdAt', 'DESC']]});
        // }
        // }
        // return result;

        let result = [];
        result = await Messenger.findAll({
            where: {channelId: channelId},
            include: [
                {
                    model: User
                },
                {
                    model: UserMessenger,
                    include: [{
                        model: User
                    }]
                }
            ],
            limit: number,
            offset: offset,
            // order: [['createdAt', 'ASC']],
            order: [['createdAt', 'DESC']],
        })
        return result;
        // return result.reverse();
    },

    async countByChannel(channelId) {
        let listMessenger = [];
        listMessenger = await Messenger.findAll({
            attributes: ['id'],
            where: {channelId: channelId}
        });
        return listMessenger.length;
    }
}

module.exports = messengerDao;
