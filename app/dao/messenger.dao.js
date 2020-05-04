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
    // searchMessageByChat(value, chatId, number, offset,) {
    //     if($bean.isNotEmpty(messageId)){
    //         throw new Error('error.chat.null')
    //     }
    //     if ($bean.isNumber(number) && $bean.isNumber(offset)) {
    //         return Messenger.findAll({
    //             where: {[Op.and]: [{chatId: chatId}, {message: {[Op.substring]: value}}]},
    //             limit: number,
    //             offset: offset
    //         })
    //     } else {
    //         if ($bean.isNotEmpty(value)) {
    //             return Messenger.findAll({where: {[Op.and]: [{chatId: chatId}, {message: {[Op.substring]: value}}]}})
    //         } else {
    //             return Messenger.findAll({where: {[Op.and]: [{chatId: chatId}]}});
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
    // loadMoreMessage(chatId, number, offset) {
    //     messengerService.getMessengerByChat(chatId, number, offset).then(function (data) {
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

    async deleteByChat(chatId) {
        let result = {};
        let rowAffected = await Messenger.destroy({where: {chatId: chatId}});
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

    async getMessengerByChat(chatId, number, offset) {
        console.log(number)
        console.log(offset)
        let messengers = [];
        messengers = await Messenger.findAll({
            where: {chatId: chatId},
            include: [
                {
                    model: Messenger, as: 'refMessenger',
                    include: [{
                        model: User, attributes: ['id', 'username', 'avatar_url']
                    },]
                },
                {
                    model: User, attributes: ['id', 'username', 'avatar_url']
                },
                {
                    model: UserMessenger,
                    include: [{
                        model: User, attributes: ['id', 'username', 'avatar_url']
                    }]
                }
            ],
            order: [['createdAt', 'DESC']],
            limit: number,
            offset: offset,
        })
        return messengers;
    },

    async getPreviousMessengers(chatId, number, offset) {
        let result = [];
        console.log('Loadprevisou');
        console.log(chatId);
        console.log(number);
        console.log(offset);
        if ($bean.isNumber(number) && $bean.isNumber(offset)) {
            if ((offset != 0) && (number != 0)) {
                number = ((offset - number) > 0) ? number : offset;
                offset = ((offset - number) > 0) ? (offset - number) : 0;
                console.log('Loadprevisou into');
                console.log(chatId);
                console.log(number);
                console.log(offset);
                result = await Messenger.findAll({
                    where: {chatId: chatId},
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
                    order: [['createdAt', 'ASC']]
                })
            }
        }
        return result;
    },

    async getMoreMessengers(chatId, number, offset) {
        console.log('Loadmore init');
        console.log(chatId);
        console.log(number);
        console.log(offset);
        let result = [];
        if ($bean.isNumber(number) && $bean.isNumber(offset) && (number != 0)) {
            console.log('Loadmore indeep');
            console.log(chatId);
            console.log(number);
            console.log(offset);
            result = await Messenger.findAll({
                where: {chatId: chatId},
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
                order: [['createdAt', 'ASC']]
            })
        }
        return result;
    },

    async countByChat(chatId) {
        let result = {};
        result = await Messenger.findOne({
            attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'count']],
            where: {chatId: chatId}
        });
        return result;
    }
}

module.exports = messengerDao;
