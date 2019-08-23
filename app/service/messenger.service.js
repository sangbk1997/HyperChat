const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const redisConfig = require('../common/config/redis.config');
const redisApp = redisConfig.redisApp;
const redisPushStream = redisConfig.redisPushStream;
const Messenger = db.messenger;
const UserMessenger = db.userMessenger;
const Op = Sequelize.Op;
var messengerModel = require('../model/messenger.model');
var messengerStatic = require('../common/obj/objStatic/messengerStatic');
var userMessengerStatic = require('../common/obj/objStatic/userMessengerStatic');

const baseDao = require('../dao/base.dao');
const userChannelDao = require('../dao/userChannel.dao');
const userMessengerDao = require('../dao/userMessenger.dao');
const messengerDao = require('../dao/messenger.dao');
const redisService = require('./redis.service');
const listModelType = require('../common/obj/modelType/listModelType');
var $bean = require('../common/utils/hyd-bean-utils');
const TYPE_NEW_MESSENGER = 'NEW_MESSENGER';
const TYPE_UPDATED_MESSENGER = 'UPDATED_MESSENGER';
const TYPE_DELETED_MESSENGER = 'DELETED_MESSENGER';

var messengerService = {

    // // List - Sort
    // // Find And Order
    // async listAndOrder(orderAttributes, number, offset) {
    //     var result = await baseService.listAndOrder(orderAttributes, modelTypeMessenger, number, offset);
    //     return result;
    // },
    //
    // // Search by Attributes
    //
    // async searchMessengers(value, affectAttributes, number, offset) {
    //     var result = await baseService.search(value, affectAttributes, modelTypeMessenger, number, offset);
    //     return result;
    // },
    //
    // saveMessage: (channelId, message, type) => {
    //     let messenger = {
    //         userId: VGlobal['userLogin'].id,
    //         channelId: channelId,
    //         message: message,
    //         type: $bean.isNotEmpty(type) ? type : messengerStatic.TYPE_TEXT,
    //         status: messengerStatic.STATUS_ORIGINAL,
    //         modifiedDate: new Date()
    //
    //     }
    //     return Messenger.create(messenger);
    // },
    //
    // editMessage(messageId, message, type) {
    //     if ($bean.isNotNil(messageId)) {
    //         let messenger = {
    //             message: message,
    //             type: $bean.isNotEmpty(type) ? type : messengerStatic.TYPE_TEXT,
    //             status: messengerStatic.STATUS_EDIT,
    //             modifiedDate: new Date()
    //         }
    //         return Messenger.update(messenger, {where: {[Op.and]: [{id: messageId}, {userId: VGlobal['userLogin'].id}]}});
    //     } else {
    //         throw new Error('Error edit message !');
    //     }
    // },
    //
    // disabledMessage(messageId) {
    //     return Messenger.update({status: messengerStatic.STATUS_DISABLED}, {where: {[Op.and]: [{id: messageId}, {userId: VGlobal['userLogin'].id}]}});
    // },
    //
    // destroyMessage: (messageId) => {
    //     return Messenger.destroy({where: {[Op.and]: [{id: messageId}, {userId: VGlobal['userLogin'].id}]}});
    // },
    //
    //
    // getMessengerByChannel(channelId, number, offset) {
    //     if ($bean.isNumber(number) && $bean.isNumber(offset)) {
    //         return Messenger.findAll({where: {channelId: channelId}, limit: number, offset: offset});
    //     } else {
    //         return Messenger.findAll({where: {channelId: channelId}});
    //     }
    // },
    //
    // searchMessageByChannel(value, channelId, number, offset,) {
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
    // },
    //
    // // Dang loi
    // listInformMessages() {
    //     return Messenger.findAll({
    //         where: {[Op.and]: [{isNotify: true}, {'$UserMessenger.userId$': VGlobal['userLogin'].id}, {'$UserMessenger.action': userMessengerStatic.ACTION_UNREAD}]},
    //         include: {
    //             model: UserMessenger
    //         }
    //     })
    // },
    //
    // messagesByChannel(channelId, number, offset){
    //     return Messenger.findAll({where: {channelId: channelId}, limit: number, offset: offset});
    // }

    // List - Sort

    insert(messenger) {
        return baseDao.insert(messenger, listModelType.modelTypeMessenger);
    },

    get(messengerId) {
        return baseDao.findById(messengerId, listModelType.modelTypeMessenger);
    },

    list() {
        return baseDao.list(listModelType.modelTypeMessenger);
    },

    quickUpdate(messenger) {
        return baseDao.quickUpdate(messenger, listModelType.modelTypeMessenger);
    },

    delete(messengerId) {
        return baseDao.delete(messengerId, listModelType.modelTypeMessenger);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeMessenger);
    },

    // Find And Order
    async listAndOrder(orderAttributes, number, offset) {
        var result = await baseDao.listAndOrder(orderAttributes, listModelType.modelTypeMessenger, number, offset);
        return result;
    },

    // Search by Attributes

    async searchMessengers(value, affectAttributes, number, offset) {
        var result = await baseDao.search(value, affectAttributes, listModelType.modelTypeMessenger, number, offset);
        return result;
    },

    async doInsertMessenger(userLogin, messenger) {
        // let channel = baseDao.findById(messenger.channelId, listModelType.modelTypeChannel);
        // let userChannel = userChannelDao.findUserChannel(messenger['userId'], messenger['channelId']);
        // let checkValidRequest = await Promise.all([channel, userChannel]);
        // if ($bean.isEmpty(checkValidRequest) || $bean.isEmpty(checkValidRequest[0]) || $bean.isEmpty(checkValidRequest[1])) {
        //     throw new Error('error.permission.denied');
        // } else {

        let channel = await baseDao.findById(messenger['channelId'], listModelType.modelTypeChannel);
        let objMessenger = {};
        for (key in listModelType.modelTypeMessenger.mapObj) {
            objMessenger[listModelType.modelTypeMessenger.mapObj[key].title] = messenger[key];
        }
        if ($bean.isEmpty(objMessenger['id'])) {
            objMessenger['id'] = $bean.genRandomID(16);
        }
        if ($bean.isEmpty(objMessenger['userId'])) {
            objMessenger['userId'] = userLogin.id;
        }
        if ($bean.isEmpty(objMessenger['type'])) {
            objMessenger['type'] = messengerStatic.TYPE_TEXT;
        }
        if ($bean.isEmpty(objMessenger['typeRole'])) {
            objMessenger['typeRole'] = messengerStatic.TYPE_ROLE_PRIMARY;
        }
        if ($bean.isEmpty(objMessenger['status'])) {
            objMessenger['status'] = messengerStatic.STATUS_ORIGINAL;
        }
        if ($bean.isEmpty(objMessenger['modifiedDate'])) {
            objMessenger['modifiedDate'] = new Date();
        }
        if ($bean.isEmpty(objMessenger['createdAt'])) {
            objMessenger['createdAt'] = new Date();
        }

        objMessenger['channelTitle'] = channel.title

        let totalMessengerByChannel = await messengerDao.countByChannel(objMessenger['channelId']);

        objMessenger['oldCountMessengers'] = totalMessengerByChannel;

        // // Gửi messenger realtime lên channel
        let realTimeMessenger = $bean.cloneJson(objMessenger);
        realTimeMessenger['user'] = userLogin;
        // Realtime về người dùng
        redisService.pubStreamObj({
            type: TYPE_NEW_MESSENGER,
            value: realTimeMessenger,
            channelId: realTimeMessenger['channelId']
        });
        // Lưu messenger vào database
        let result = await baseDao.insert(objMessenger, listModelType.modelTypeMessenger);
        return result;
    },

    async doUpdate(userLogin, messenger, newPub) {
        // Realtime về người dùng
        let foundMessenger = await baseDao.findById(messenger.id, listModelType.modelTypeMessenger);
        if ($bean.isNotEmpty(foundMessenger)) {
            for (key in messenger) {
                if ((key in foundMessenger)) {
                    foundMessenger[key] = messenger[key];
                }
            }
            if (!newPub) {
                foundMessenger['status'] = messengerStatic.STATUS_EDITED;
                foundMessenger['modifiedDate'] = new Date();
            }
            let cloneMessenger = $bean.cloneJson(foundMessenger);
            if (newPub) {
                redisService.pubStreamObj({
                    type: TYPE_NEW_MESSENGER,
                    value: cloneMessenger,
                    channelId: cloneMessenger['channelId']
                });
            } else {
                redisService.pubStreamObj({
                    type: TYPE_UPDATED_MESSENGER,
                    value: cloneMessenger,
                    channelId: cloneMessenger['channelId']
                });
            }
            let updatedMessenger = await baseDao.quickUpdate(foundMessenger, listModelType.modelTypeMessenger);
            return updatedMessenger;
        }
    },

    async doDelete(messengerId) {
        let deletedMessenger = await baseDao.delete(messengerId, listModelType.modelTypeMessenger);
        if ($bean.isNotEmpty(deletedMessenger)) {
            redisService.pubStreamObj({
                type: TYPE_DELETED_MESSENGER,
                value: deletedMessenger,
                channelId: deletedMessenger['channelId']
            });
        }
        return deletedMessenger;
    },

    insertMessage(userLogin, messenger) {
        return messengerService.doInsertMessenger(userLogin, messenger);
    },

    updateMessage(userLogin, messenger, newPub) {
        return messengerService.doUpdate(userLogin, messenger, newPub);
    },

    async messagesByChannel(channelId, number, offset) {
        let result = await messengerDao.getMessengerByChannel(channelId, number, offset);
        return result;
    },

    async exampleMessengers(channelId, oldNumber, newNumber, offset) {
        let oldMessengers = await messengerService.loadPreviousMessengers(channelId, oldNumber, offset);
        let newMessengers = await messengerService.loadMoreMessengers(channelId, newNumber, offset);
        let result = {
            oldMessengers: oldMessengers,
            newMessengers: newMessengers
        }
        return result;
    },

    async loadMoreMessengers(channelId, number, offset) {
        let result = await messengerDao.getMoreMessengers(channelId, number, offset);
        // let userChannel = await userChannelDao.findUserChannel(userLoginId, channelId);
        // if ($bean.isNotEmpty(result) && $bean.isNotEmpty(userChannel)) {
        //     userChannel['position'] = offset + result.length;
        //     userChannel['lastMessengerId'] = result[result.length - 1].id;
        //     userChannelService.update(userChannel);
        // }
        return result;
    },

    async loadPreviousMessengers(channelId, number, offset) {
        let result = await messengerDao.getPreviousMessengers(channelId, number, offset);
        return result;
    },

    async countByChannel(channelId) {
        let result = await messengerDao.countByChannel(channelId);
        return result;
    }
}

module.exports = messengerService;
