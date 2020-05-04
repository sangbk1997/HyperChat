const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const UserMessenger = db.userMessenger;
const userMessengerModel = require('../model/userMessenger.model');
const userMessengerStatic = require('../common/obj/objStatic/userMessengerStatic');
const Op = Sequelize.Op;
const baseDao = require('../dao/base.dao');
const listModelType = require('../common/obj/modelType/listModelType');
const redisService = require('./redis.service');
const TYPE_NEW_REACT_MESSENGER = 'NEW_REACT_MESSENGER';
const TYPE_REMOVE_REACT_MESSENGER = 'REMOVE_REACT_MESSENGER';
var $bean = require('../common/utils/hyd-bean-utils');
var userMessengerService = {

    // // List - Sort
    // // Find And Order
    // async listAndOrder(orderAttributes, number, offset) {
    //     var result = await baseService.listAndOrder(orderAttributes, modelTypeUserMessenger, number, offset);
    //     return result;
    // },
    //
    // // Search by Attributes
    //
    // async searchUserMessenger(value, affectAttributes, number, offset) {
    //     var result = await baseService.search(value, affectAttributes, modelTypeUserMessenger, number, offset);
    //     return result;
    // },
    //
    // deleteByMessenger(messengerId) {
    //     if($bean.isNotNil(messengerId)){
    //         return UserMessenger.destroy({where: {messengerId: messengerId}});
    //     }else{
    //         throw new Error('Error delete user messenger my messengerId');
    //     }
    // },
    //
    // readMessage(messengerId){
    //   UserMessenger.update({status: userMessengerStatic.ACTION_READ, readDate: new Date()}, {where: {[Op.and]: [{userId: VGlobal['userLogin'].id},{messengerId: messengerId}]}});
    // },
    //
    // reactMessenger(messengerId, emojiId, textEmoji) {
    //     if ($bean.isNotNil(messengerId) && $bean.isNotNil(emojiId)) {
    //         let objReact = {
    //             userId: VGlobal['userLogin'].id,
    //             messengerId: messengerId,
    //             emojiId: emojiId,
    //             action: userMessengerStatic.ACTION_REACT,
    //             textEmoji: textEmoji,
    //             reactDate: new Date()
    //         }
    //         return UserMessenger.create(objReact);
    //     } else {
    //         throw new Error('Error react messenger !');
    //     }
    // }

    insert(userMessenger) {
        return baseDao.insert(userMessenger, listModelType.modelTypeUserMessenger);
    },

    get(userMessengerId) {
        return baseDao.findById(userMessengerId, listModelType.modelTypeUserMessenger);
    },

    list() {
        return baseDao.list(listModelType.modelTypeUserMessenger);
    },

    update(userMessenger) {
        return baseDao.update(userMessenger, listModelType.modelTypeUserMessenger);
    },

    quickUpdate(userMessenger) {
        return baseDao.quickUpdate(userMessenger, listModelType.modelTypeUserMessenger);
    },

    delete(userMessengerId) {
        return baseDao.delete(userMessengerId, listModelType.modelTypeUserMessenger);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeUserMessenger);
    },

    async doInsert(userLogin, userMessenger) {
        let objUserMessenger = {};
        for (key in listModelType.modelTypeUserMessenger.mapObj) {
            objUserMessenger[listModelType.modelTypeUserMessenger.mapObj[key].title] = userMessenger[key];
        }
        if ($bean.isNil(objUserMessenger['id'])) {
            objUserMessenger['id'] = $bean.genRandomID(16);
        }
        if ($bean.isNil(objUserMessenger['userId'])) {
            objUserMessenger['userId'] = userLogin.id;
        }
        if ($bean.isNil(objUserMessenger['action'])) {
            objUserMessenger['action'] = userMessengerStatic.ACTION_REACTED;
        }
        if ($bean.isNil(objUserMessenger['reactDate'])) {
            objUserMessenger['reactDate'] = new Date();
        }

        // Gửi messenger realtime lên chat
        let realTimeUserMessenger = $bean.cloneJson(objUserMessenger);
        realTimeUserMessenger['user'] = userLogin;
        // Realtime về người dùng
        redisService.pubStreamObj({
            type: TYPE_NEW_REACT_MESSENGER,
            value: realTimeUserMessenger,
            messengerId: realTimeUserMessenger.messengerId,
            chatId: realTimeUserMessenger.chatId
        });
        let result = await baseDao.insert(objUserMessenger, listModelType.modelTypeUserMessenger);
        return result;
    },

    async doDelete(userMessengerId) {
        let deletedUserMessenger = await baseDao.delete(userMessengerId, listModelType.modelTypeUserMessenger);
        if ($bean.isNotEmpty(deletedUserMessenger)) {
            redisService.pubStreamObj({
                type: TYPE_REMOVE_REACT_MESSENGER,
                value: deletedUserMessenger,
                messengerId: deletedUserMessenger.messengerId,
                chatId: deletedUserMessenger.chatId
            });
        }
        return deletedUserMessenger;
    },

    insertUserMessenger(userLogin, userMessenger) {
        return userMessengerService.doInsert(userLogin, userMessenger);
    },

    deleteUserMessenger(id) {
        return userMessengerService.doDelete(id);
    }

}

module.exports = userMessengerService;
