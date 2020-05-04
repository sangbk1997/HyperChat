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
const userChatDao = require('../dao/userChat.dao');
const userMessengerDao = require('../dao/userMessenger.dao');
const messengerDao = require('../dao/messenger.dao');
const chatDao = require('../dao/chat.dao');
const deviceDao = require('../dao/device.dao');
const redisService = require('./redis.service');
const listModelType = require('../common/obj/modelType/listModelType');
var $bean = require('../common/utils/hyd-bean-utils');
const TYPE_MESSENGER_GROUP_CHAT = 'TYPE_MESSENGER_GROUP_CHAT';
const TYPE_MESSENGER_USER_CHAT = 'TYPE_MESSENGER_USER_CHAT';
const TYPE_NEW_MESSENGER = 'NEW_MESSENGER';
const TYPE_UPDATED_MESSENGER = 'UPDATED_MESSENGER';
const TYPE_DELETED_MESSENGER = 'DELETED_MESSENGER';
const DEFAULT_PREVIOUS_MESSENGER = 10;
const DEFAULT_NEXT_MESSENGER = 10;
const ON_NOTIFICATION = 1;
const OFF_NOTIFICATION = 0;

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
    // saveMessage: (chatId, message, type) => {
    //     let messenger = {
    //         userId: VGlobal['userLogin'].id,
    //         chatId: chatId,
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
    // getMessengerByChat(chatId, number, offset) {
    //     if ($bean.isNumber(number) && $bean.isNumber(offset)) {
    //         return Messenger.findAll({where: {chatId: chatId}, limit: number, offset: offset});
    //     } else {
    //         return Messenger.findAll({where: {chatId: chatId}});
    //     }
    // },
    //
    // searchMessageByChat(value, chatId, number, offset,) {
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
    // messagesByChat(chatId, number, offset){
    //     return Messenger.findAll({where: {chatId: chatId}, limit: number, offset: offset});
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
        let result = {};
        let chat = await baseDao.findById(messenger['chatId'], listModelType.modelTypeChat);
        if ($bean.isNotEmpty(chat)) {
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

            objMessenger['chatTitle'] = chat.title

            // // Gửi messenger realtime lên chat
            let realTimeMessenger = $bean.cloneJson(objMessenger);
            realTimeMessenger['user'] = userLogin;
            console.log("RealTimeMessenger ");
            console.log(realTimeMessenger);
            // Realtime về người dùng
            redisService.pubStreamObj({
                type: TYPE_NEW_MESSENGER,
                value: realTimeMessenger,
                chatId: realTimeMessenger['chatId']
            });
            // Lưu messenger vào database
            result = await baseDao.insert(objMessenger, listModelType.modelTypeMessenger);
            let updateChat = {
                id: objMessenger['chatId'],
                lastMessageDate: result.createdAt
            }
            chatDao.doUpdateChat(updateChat, userLogin);

            let userLinksByChat = await userChatDao.listByChat(objMessenger['chatId']);
            if ($bean.isNotEmpty(userLinksByChat)) {
                for (let i = 0; i < userLinksByChat.length; i++) {
                    if ((userLinksByChat[i]['userId'] != userLogin.id) && userLinksByChat[i]['notification'] == ON_NOTIFICATION) {
                        let fcmByUser = await deviceDao.fcmByUser(userLinksByChat[i]['userId']);
                        console.log("FCM By User");
                        console.log(fcmByUser);
                        if ($bean.isNotEmpty(fcmByUser)) {
                            var registrationTokens = fcmByUser;
                            let infoChat = {
                                id: chat['id'],
                                avatar_url: chat['avatar_url'],
                                title: chat['title']
                            }
                            let infoUser = {
                                id: userLogin['id'],
                                avatar_url: userLogin['avatar_url'],
                                username: userLogin.username
                            }
                            var message = {
                                data: {
                                    type: 'TYPE_NOTIFICATION_FOR_CHAT',
                                    typeChat: chat['type'],
                                    infoMessenger: JSON.stringify({messengerId: result['id']}),
                                    userLinkChat: JSON.stringify(userLinksByChat[i]),
                                    infoChat: JSON.stringify(infoChat),
                                    infoUser: JSON.stringify(infoUser),
                                    content: realTimeMessenger.message,
                                },
                                android: {
                                    "priority": "high"
                                },
                                tokens: registrationTokens
                            };
                            VGlobal['fcm'].messaging().sendMulticast(message)
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
                }
            }
        }
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
            cloneMessenger['user'] = userLogin;
            if (newPub) {
                redisService.pubStreamObj({
                    type: TYPE_NEW_MESSENGER,
                    value: cloneMessenger,
                    chatId: cloneMessenger['chatId']
                });
            } else {
                redisService.pubStreamObj({
                    type: TYPE_UPDATED_MESSENGER,
                    value: cloneMessenger,
                    chatId: cloneMessenger['chatId']
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
                chatId: deletedMessenger['chatId']
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

    async messagesByChat(chatId, position) {
        let offset = (parseInt(position) >= DEFAULT_PREVIOUS_MESSENGER) ? ((parseInt(position)) - DEFAULT_PREVIOUS_MESSENGER) : 0
        let limit = DEFAULT_PREVIOUS_MESSENGER + DEFAULT_NEXT_MESSENGER;
        let result = await messengerDao.getMessengerByChat(chatId, limit, 0);
        return result;
    },

    async loadMoreMessengers(chatId, position_more) {
        let result = await messengerDao.getMessengerByChat(chatId, DEFAULT_NEXT_MESSENGER, position_more);
        return result;
    },

    async loadPreviousMessengers(chatId, position_previous) {
        let limit = DEFAULT_PREVIOUS_MESSENGER;
        let offset = position_previous - DEFAULT_PREVIOUS_MESSENGER;
        if (position_previous < DEFAULT_PREVIOUS_MESSENGER) {
            offset = 0;
            limit = position_previous
        }
        let result = await messengerDao.getMessengerByChat(chatId, limit, offset);
        return result;
    },

    async exampleMessengers(chatId, oldNumber, newNumber, offset) {
        let oldMessengers = await messengerService.loadPreviousMessengers(chatId, oldNumber, offset);
        let newMessengers = await messengerService.loadMoreMessengers(chatId, newNumber, offset);
        let result = {
            oldMessengers: oldMessengers,
            newMessengers: newMessengers
        }
        return result;
    },

    async countByChat(chatId) {
        let result = await messengerDao.countByChat(chatId);
        return result;
    },

    async forwardMessenger(userLogin, chatId, messengerId) {
        let result = {};
        let messenger = await baseDao.findById(messengerId, listModelType.modelTypeMessenger);
        if ($bean.isNotEmpty(messenger) && $bean.isNotEmpty(chatId)) {
            let newMessenger = {
                userId: userLogin.id,
                message: messenger.message,
                type: messenger.type,
                fileSize: messenger.fileSize,
                contentType: messenger.contentType,
                fileExtension: messenger.fileExtension,
                path: messenger.path,
                chatId: chatId
            }
            result = messengerService.doInsertMessenger(userLogin, newMessenger);
        }
        return result;
    }
}

module.exports = messengerService;
