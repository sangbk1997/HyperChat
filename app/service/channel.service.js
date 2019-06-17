const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const baseDao = require('../dao/base.dao');
const channelDao = require('../dao/channel.dao');
const userChannelDao = require('../dao/userChannel.dao');
const messengerDao = require('../dao/messenger.dao');
const userMessengerDao = require('../dao/userMessenger.dao');
const listModelType = require('../common/obj/modelType/listModelType');
// require static
const userStatic = require('../common/obj/objStatic/userStatic');
const channelStatic = require('../common/obj/objStatic/channelStatic');
const messengerStatic = require('../common/obj/objStatic/messengerStatic');
const userChannelStatic = require('../common/obj/objStatic/userChannelStatic');
const userMessengerStatic = require('../common/obj/objStatic/userMessengerStatic');
const userFriendStatic = require('../common/obj/objStatic/userFriendStatic');
const commonStatic = require('../common/obj/objStatic/commonStatic');
const messengerService = require('../service/messenger.service');
const userService = require('../service/user.service');
const redisService = require('../service/redis.service');
var $bean = require('../common/utils/hyd-bean-utils');

var channelService = {

//
//     turnOffNotifyFromChannel(userId, channelId) {
//         return Channel.update({notification: channelStatic.STATUS_UNSUBCRIBE}, {where: {[Op.and]: [{userId: userId}, {channelId: channelId}]}});
//     },
//
//     turnOnNotifyFromChannel(userId, channelId) {
//         return Channel.update({notification: channelStatic.STATUS_SUBCRIBE}, {where: {[Op.and]: [{userId: userId}, {channelId: channelId}]}});
//     },
//
//     async addChannel(obj) {
//         let result = await baseService.doInsert(obj, modelTypeChannel);
//     },
//
//     getChannelByLastestMessage(user, number, offset) {
//         if ($bean.isNumber(number, offset)) {
//             return Channel.findAll({
//                 where: {[Op.and]: [{userId: user.id}, {statusSubcribe: channelStatic.STATUS_SUBCRIBE}, {status: channelStatic.STATUS_ACTIVE}]},
//                 include: [{
//                     model: Messenger,
//                     where: {createdAt: {[Op.gte]: user.lastLogon}}
//                 },
//                     {model: User},
//                     {model: Group}],
//                 limit: number,
//                 offset: offset
//             })
//         } else {
//             return Channel.findAll({
//                 where: {[Op.and]: [{userId: user.id}, {statusSubcribe: channelStatic.STATUS_SUBCRIBE}, {status: channelStatic.STATUS_ACTIVE}]},
//                 include: [{
//                     model: Messenger,
//                     where: {createdAt: {[Op.gte]: user.lastLogon}}
//                 },
//                     {model: User},
//                     {model: Group}]
//             })
//         }
//     },
//
//     getChannelContact(userId, friendId) {
//         return Channel.findOne({})
//     },
//
//     getChannelHasUnReadMessage(user, number, offset) {
//         if ($bean.isNumber(number) && $bean.isNumber(offset)) {
//
//         } else {
//
//         }
//     },
//
//
//     listUserByChannel(channelId, number, offset) {
//         if ($bean.isNumber(number) && $bean.isNumber(offset)) {
//             return Channel.findOne({
//                 include: {model: User, limit: number, offset: offset, order: ['username']},
//                 where: {id: channelId}
//             });
//         } else {
//             return Channel.findOne({include: {model: User, order: ['username']}, where: {id: channelId}});
//         }
//     },
//
// //    Load channel << sắp xếp theo có message mới nhất - tương tác gần nhất >>
//
//     loadChannelByTimeFinish() {
//
//     },
//
//     checkLinkToContact(contactId) {
//         return Channel.findOne({
//             include: {
//                 model: UserChannel,
//                 include: {
//                     model: User
//                 },
//                 where: {
//                     [Op.and]: [{'$UserChannel.userId': contactId}, {'$UserChannel.userId': VGlobal['userLogin'].id}]
//                 }
//             },
//             where: {type: channelStatic.TYPE_CHAT_CONTACT}
//         })
//     }


//    New Code

    // List - Sort

    insert(channel) {
        return baseDao.insert(channel, listModelType.modelTypeChannel);
    },

    get(channelId) {
        return baseDao.findById(channelId, listModelType.modelTypeChannel);
    },

    list() {
        return baseDao.list(listModelType.modelTypeChannel);
    },

    update(channel) {
        return baseDao.update(channel, listModelType.modelTypeChannel);
    },

    quickUpdate(channel) {
        return baseDao.quickUpdate(channel, listModelType.modelTypeChannel);
    },

    delete(channelId) {
        return baseDao.delete(channelId, listModelType.modelTypeChannel);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeChannel);
    },

    // Find And Order
    async listAndOrder(orderAttributes, number, offset) {
        var result = await baseDao.listAndOrder(orderAttributes, listModelType.modelTypeChannel, number, offset);
        return result;
    },

    // Search by Attributes

    async searchChannels(value, affectAttributes, number, offset) {
        var result = await baseDao.search(value, affectAttributes, listModelType.modelTypeChannel, number, offset);
        return result;
    },

    listByUser(userId, number, offset) {
        return channelDao.listByUser(userId, number, offset);
    },

    infoChannel(channelId) {
        return channelDao.infoChannel(channelId);
    },

    async doAddChannel(objChannel, typeChannel, userLogin) {
        let channel = {
            status: (typeChannel == channelStatic.TYPE_CHAT_GROUP) ? channelStatic.STATUS_ACTIVE : channelStatic.STATUS_INACTIVE,
            createdBy: userLogin.id,
            type: typeChannel,
            finishWorkingTime: new Date(),
            style: objChannel.style
        };
        if ($bean.isNotEmpty(objChannel) && typeChannel == channelStatic.TYPE_CHAT_GROUP) {
            channel['avatar'] = objChannel.avatar;
            channel['title'] = objChannel.title;
            channel['slogan'] = objChannel.slogan;
            channel['description'] = objChannel.description
        }

        // Tạo channel
        let resultChannel = await baseDao.insert(channel, listModelType.modelTypeChannel);

        console.log('Tạo nhóm chat');
        console.log(resultChannel);
        if ($bean.isNotEmpty(resultChannel)) {

            // Tạo liên kết channel và người tao
            let objUserChannel = {
                userId: userLogin.id,
                channelId: resultChannel.id,
                triggerId: userLogin.id,
                isAdmin: userChannelStatic.IS_ADMIN,
                status: userChannelStatic.STATUS_ACCEPTED,
                action: userChannelStatic.ACTION_READED,
                typeChat: typeChannel,
                position: userChannelStatic.ZERO_POSITION,
                lastMessengerId: null,
                notification: userChannelStatic.STATUS_NOTIFICATION,
                modifiedDate: new Date()
            }
            let userChannel = await baseDao.insert(objUserChannel, listModelType.modelTypeUserChannel);
            console.log('Tạo liên kết user - chat - admin');
            console.log(userChannel);

            // check
            // Tạo liên kết channel và các thành viên
            if ($bean.isNotEmpty(objChannel['members'])) {
                console.log('Danh sách thành viên');
                console.log(objChannel['members']);
                let listPromises = [];
                for (let i = 0; i < objChannel['members'].length; i++) {
                    let checkedUser = await baseDao.findById(objChannel['members'][i], listModelType.modelTypeUser);
                    if ($bean.isNotEmpty(checkedUser)) {
                        if (objChannel['members'][i] != userLogin.id) {
                            userService.setUpRequest(userLogin.email, checkedUser.email, resultChannel.title);
                            let triggerMessage = '';
                            let recieverMessage = '';
                            if (typeChannel === channelStatic.TYPE_CHAT_GROUP) {
                                triggerMessage += commonStatic.messageStatic["request.message.trigger.add.user.to.channel"]();
                                recieverMessage += commonStatic.messageStatic["request.message.reciever.add.user.to.channel"]();
                            } else {
                                triggerMessage += commonStatic.messageStatic["request.message.trigger.add.contact"]();
                                recieverMessage += commonStatic.messageStatic["request.message.reciever.add.contact"]();
                            }
                            let objUserChannel = {
                                userId: objChannel['members'][i],
                                channelId: resultChannel.id,
                                triggerId: userLogin.id,
                                isAdmin: (typeChannel == userChannelStatic.TYPE_CHAT_GROUP) ? userChannelStatic.IS_NOT_ADMIN : userChannelStatic.IS_ADMIN,
                                triggerMessage: triggerMessage,
                                recieverMessage: recieverMessage,
                                status: userChannelStatic.STATUS_PENDING,
                                action: userChannelStatic.ACTION_UNREAD,
                                typeChat: typeChannel,
                                position: userChannelStatic.ZERO_POSITION,
                                lastMessengerId: null,
                                notification: userChannelStatic.STATUS_NOTIFICATION,
                                modifiedDate: new Date()
                            }
                            let promise = baseDao.insert(objUserChannel, listModelType.modelTypeUserChannel);
                            listPromises.push(promise);
                        }
                    }
                }

                let userLinkChannel = await Promise.all(listPromises);
            }

            // Message đính kèm vào chat
            let messenger = {
                userId: userLogin.id,
                channelId: resultChannel.id,
                message: userLogin.email + ' đã tạo kênh Chat ',
                type: messengerStatic.TYPE_TEXT,
                status: messengerStatic.STATUS_ORIGINAL,
                typeRole: messengerStatic.TYPE_ROLE_ATTACHED
            }

            messengerService.doInsertMessenger(userLogin, messenger).then(function (data) {
                console.log('Message đính kèm');
                console.log(data);
            })

            return resultChannel;
        }
    },

    async doUpdateChannel(channel, userLogin) {
        let oldChannel = await baseDao.findById(channel['id'], listModelType.modelTypeChannel);
        if ($bean.isNotEmpty(oldChannel)) {
            return baseDao.quickUpdate(channel, listModelType.modelTypeChannel).then(function (newChannel) {
                console.log('Cập nhật channel');
                console.log(newChannel);
                // Gửi message vào channel
                let properties = '{ ';
                for (let property in channel) {
                    if (property != 'id') {
                        properties += property + ',  ';
                    }
                }
                properties += ' }';
                let messenger = {
                    userId: userLogin.id,
                    channelId: channel['id'],
                    message: userLogin.email + ' đã thay đổi thông tin ' + properties,
                    type: messengerStatic.TYPE_TEXT,
                    typeRole: messengerStatic.TYPE_ROLE_NOTIFIED
                }
                messengerService.doInsertMessenger(userLogin, messenger).then(function (data) {
                    console.log('Gửi thông báo khi cập nhật channel');
                    console.log(data);
                })
            })
        }
    },

    async doDeleteChannel(channelId, userLogin) {
        let channel = await baseDao.findById(channelId, listModelType.modelTypeChannel);
        if ($bean.isNotEmpty(channel)) {
            return baseDao.delete(channelId, listModelType.modelTypeChannel).then(function (deletedChannel) {
                // Xóa tất cả liên kết user - channel
                userChannelDao.deleteAllByChannel(channelId).then(function (data) {
                    console.log('Xóa hết liên kết user - channel theo channel');
                    console.log(data);
                })
                // Xóa hết tin nhắn đi theo channel
                messengerDao.deleteByChannel(channelId).then(function (data) {
                    console.log('Xóa hết tin nhắn theo channel');
                    console.log(data);
                })

                // xóa hết link user - messenger theo channel
                userMessengerDao.deleteByChannel(channelId).then(function (data) {
                    console.log('Xóa hết liên kêt user - messenger theo channel');
                    console.log(data);
                })
                return deletedChannel;
            })
        }
    },

    async addChat(objectChat, userLogin) {
        let result = await channelService.doAddChannel(objectChat, channelStatic.TYPE_CHAT_GROUP, userLogin);
        console.log('Create Chat To Group : ');
        console.log(result);
        return result;
    },

    async addContact(objectChat, userLogin) {
        let result = await channelService.doAddChannel(objectChat, channelStatic.TYPE_CHAT_CONTACT, userLogin);
        console.log('Create Chat To Contact : ');
        console.log(result);
        return result;
    },

    async updateChannel(channel, userLogin) {
        let result = await channelService.doUpdateChannel(channel, userLogin);
        return result;
    },

    async deleteChannel(channelId, userLogin) {
        let result = await channelService.doDeleteChannel(channelId, userLogin);
        return result;
    },

    countSearchByUser(userId, value) {
        return channelDao.countSearch(userId, value);
    },

    searchByUser(userId, value, number, offset) {
        return channelDao.searchByUser(userId, value, number, offset);
    },

}

module.exports = channelService;
