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
    // getMessageByChannel(channelId, number, offset) {
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
        let objMessenger = {};
        for (key in listModelType.modelTypeMessenger.mapObj) {
            objMessenger[listModelType.modelTypeMessenger.mapObj[key].title] = messenger[key];
        }
        if ($bean.isNil(objMessenger['userId'])) {
            objMessenger['userId'] = userLogin.id;
        }
        if ($bean.isNil(objMessenger['type'])) {
            objMessenger['type'] = messengerStatic.TYPE_TEXT;
        }
        if ($bean.isNil(objMessenger['typeRole'])) {
            objMessenger['typeRole'] = messengerStatic.TYPE_ROLE_PRIMARY;
        }
        if ($bean.isNil(objMessenger['status'])) {
            objMessenger['status'] = messengerStatic.STATUS_ORIGINAL;
        }
        if ($bean.isNil(objMessenger['modifiedDate'])) {
            objMessenger['modifiedDate'] = new Date();
        }

        // // Gửi messenger realtime lên channel
        // let realTimeMessenger = {};
        // for (let key in objMessenger) {
        //     realTimeMessenger[key] = objMessenger[key];
        // }
        //
        // realTimeMessenger['user'] = userLogin;
        // // for (let key in userLogin) {
        // //     if ($bean.isNil(objMessengerWithUser[key]) && key != 'id') {
        // //         objMessengerWithUser[key] = userLogin[key];
        // //     }
        // // }
        // // Realtime về người dùng
        // redisService.pubStreamObj({
        //         //     type: TYPE_NEW_MESSENGER,
        //         //     value: realTimeMessenger,
        //         //     channelId: realTimeMessenger['channelId']
        //         // });
        // Lưu messenger vào database
        return baseDao.insert(objMessenger, listModelType.modelTypeMessenger).then(function (resultMessenger) {

            let cloneMessenger = $bean.cloneJson(resultMessenger);
            cloneMessenger['user'] = userLogin;
            redisService.pubStreamObj({
                type: TYPE_NEW_MESSENGER,
                value: cloneMessenger,
                channelId: cloneMessenger['channelId']
            });

            // // Cập nhật lại thời gian làm việc của channel
            baseDao.quickUpdate({
                id: messenger.channelId,
                finishWorkingTime: resultMessenger['createdAt']
            }, listModelType.modelTypeChannel).then(function (updatedChannel) {
                console.log('Cập nhật thời gian làm việc của channel !');
                console.log(updatedChannel);
            })

            // if (messenger['typeRole'] == messengerStatic.TYPE_ROLE_PRIMARY || messenger['typeRole'] == messengerStatic.TYPE_ROLE_NOTIFIED) {
            //   Create Link User - Message
            //    Tìm kiếm tất cả User đang có kết nối đến Channel đã được accept
            userChannelDao.findAcceptedByChannel(resultMessenger.channelId).then(function (userChannel) {
                if ($bean.isNotEmpty(userChannel)) {
                    for (let i = 0; i < userChannel.length; i++) {
                        console.log(userChannel);
                        let objUserMessenger = {
                            userId: userChannel[i].userId,
                            channelId: userChannel[i].channelId,
                            messengerId: resultMessenger.id,
                            action: (userChannel[i].userId == userLogin.id) ? userMessengerStatic.ACTION_READED : userMessengerStatic.ACTION_UNREAD,
                            readDate: (userChannel[i].userId == userLogin.id) ? resultMessenger['createdAt'] : null
                        }
                        baseDao.insert(objUserMessenger, listModelType.modelTypeUserMessenger).then(function (userMessenger) {
                            console.log('Tạo liên kết user - messenger ');
                            console.log(userMessenger);
                        })
                    }
                }
            })
            // }

            return resultMessenger;
            // // Notification
            // return messenger;
        })
        // }
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
            let updatedMessenger = await baseDao.quickUpdate(foundMessenger, listModelType.modelTypeMessenger);
            let cloneMessenger = $bean.cloneJson(updatedMessenger);
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
        let result = await messengerDao.getMessageByChannel(channelId, number, offset);
        return result;
    },

    async loadMoreMessengers(userLoginId, channelId, number, offset) {
        let result = await messengerDao.getMessageByChannel(channelId, number, offset);

        if ($bean.isNotEmpty(result)) {
            console.log('Update read messenger');
            // Gửi pushstream về phía người dùng
            // Cập nhật phản hồi vào tin nhắn là đã đọc bởi user
            for (let i = 0; i < result.length; i++) {
                userMessengerDao.readMessenger(userLoginId, channelId, result[i].id);
            }
            // Cập nhật lại tin nhắn đọc cuối cùng của user
            // Cập nhật lại vị trí tin nhắn đọc gần nhất của user với channel
            userChannelDao.updateLastReadMessenger(userLoginId, channelId, (offset + result.length), result[result.length - 1].id);
        }

        return result;
    },

    async loadPreviousMessengers(channelId, number, offset) {
        let result = await messengerDao.getMessageByChannel(channelId, number, offset);
        return result;
    },

}

module.exports = messengerService;
