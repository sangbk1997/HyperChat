const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const Op = Sequelize.Op;
const UserChannel = db.userChannel;
const userChannelModel = require('../model/userChannel.model');
const userChannelStatic = require('../common/obj/objStatic/userChannelStatic');
const messengerStatic = require('../common/obj/objStatic/messengerStatic');
const channelStatic = require('../common/obj/objStatic/channelStatic');
const commonStatic = require('../common/obj/objStatic/commonStatic');
// const messengerService = require('./messenger.service');
const messengerService = require('./messenger.service');
const userService = require('./user.service');
const redisService = require('./redis.service');
var $bean = require('../common/utils/hyd-bean-utils');

const baseDao = require('../dao/base.dao');
const userChannelDao = require('../dao/userChannel.dao');
const messengerDao = require('../dao/messenger.dao');
const listModelType = require('../common/obj/modelType/listModelType');
const TYPE_NEW_USER_CHANNEL = 'NEW_USER_CHANNEL';
const TYPE_UPDATED_USER_CHANNEL = 'UPDATED_USER_CHANNEL';
const TYPE_DELETED_USER_CHANNEL = 'DELETED_USER_CHANNEL';
var userChannelService = {
    //
    // findAllByChannel(channelId) {
    //     if ($bean.isNotEmpty(channelId)) {
    //         return UserChannel.findAll({where: {channelId: channelId}});
    //     } else {
    //         throw new Error('Error empty channel Id');
    //     }
    // },
    //
    // findAcceptedByChannel(channelId) {
    //     if ($bean.isNotEmpty(channelId)) {
    //         return UserChannel.findAll({where: {[Op.and]: [{channelId: channelId}, {status: userChannelStatic.STATUS_ACCEPT}]}});
    //     } else {
    //         throw new Error('Error empty channel Id');
    //     }
    // },
    //
    // // 19/05
    // getLinkUserChannel(userId, channelId) {
    //     if ($bean.isNotEmpty(userId) && $bean.isNotEmpty(channelId)) {
    //         return UserChannel.findOne({where: {userId: userId, channelId: channelId}});
    //     } else {
    //         throw new Error('Not empty userId or channelId');
    //     }
    // },
    //
    // listRequestUnAccept(channelId) {
    //     return UserChannel.findAll({where: {status: {[Op.ne]: userChannelStatic.STATUS_ACCEPT}}});
    // },
    //
    // listRequestPending() {
    //     return UserChannel.findAll({where: {[Op.and]: [{userId: VGlobal['userLogin'].id}, {status: userChannelStatic.STATUS_PENDING}]}});
    // },
    //
    //
    // // Success

    //
    // userChannelInfo(channelId) {
    //     return UserChannel.findOne({where: {[Op.and]: [{userId: VGlobal['userLogin'].id}, {channelId: channelId}]}});
    // },
    //
    //
    // deleteByChannel(channelId) {
    //     if ($bean.isNotEmpty(channelId)) {
    //         return UserChannel.destroy({where: {channelId: channelId}});
    //     } else {
    //         throw new Error('Error empty channel Id');
    //     }
    // },
    //
    // leaveChat(channelId) {
    //     if ($bean.isNotEmpty(channelId)) {
    //         return UserChannel.destroy({where: {[Op.and]: [{userId: VGlobal['userLogin'].id}, {channelId: channelId}]}});
    //     } else {
    //         throw new Error('Error empty channel Id');
    //     }
    // },
    //


    async turnOnNotification(channelId, userLogin) {
        let result = {};
        let userChannel = await userChannelDao.findUserChannel(userLogin.id, channelId);
        if ($bean.isNotEmpty(userChannel)) {
            result = await baseDao.quickUpdate({
                id: userChannel.id,
                notification: userChannelStatic.STATUS_NOTIFICATION
            }, listModelType.modelTypeUserChannel);
        }
        return result;
    },

    async turnOffNotification(channelId, userLogin) {
        let result = {};
        let userChannel = await userChannelDao.findUserChannel(userLogin.id, channelId);
        if ($bean.isNotEmpty(userChannel)) {
            result = await baseDao.quickUpdate({
                id: userChannel.id,
                notification: userChannelStatic.STATUS_NOT_NOTIFICATION
            }, listModelType.modelTypeUserChannel);
        }
        return result;
    },

    insert(userChannel) {
        return baseDao.insert(userChannel, listModelType.modelTypeUserChannel);
    },

    get(userChannelId) {
        return baseDao.findById(userChannelId, listModelType.modelTypeUserChannel);
    },

    list() {
        return baseDao.list(listModelType.modelTypeUserChannel);
    },

    update(userChannel) {
        return baseDao.update(userChannel, listModelType.modelTypeUserChannel);
    },

    quickUpdate(userChannel) {
        return baseDao.quickUpdate(userChannel, listModelType.modelTypeUserChannel);
    },

    delete(userChannelId) {
        return baseDao.delete(userChannelId, listModelType.modelTypeUserChannel);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeUserChannel);
    },

    async doCreateRequest(userId, channelId, typeChannel, userLogin) {
        let user = await baseDao.findById(userId, listModelType.modelTypeUser);
        let channel = await baseDao.findById(channelId, listModelType.modelTypeChannel);
        let lastUserChannel = await userChannelDao.lastUserChannel(userId);
        if ($bean.isNotEmpty(user) && ($bean.isNotEmpty(channel) && $bean.isNotEmpty(lastUserChannel))) {
            let countMessengerByChannel = await messengerDao.countByChannel(channelId);
            let objUserChannel = {
                userId: userId,
                channelId: channelId,
                isAdmin: userChannelStatic.IS_NOT_ADMIN,
                action: (userId == userLogin.id) ? userChannelStatic.ACTION_READED : userChannelStatic.ACTION_UNREAD,
                triggerId: userLogin.id,
                typeChat: typeChannel,
                position: countMessengerByChannel,
                notification: userChannelStatic.STATUS_NOTIFICATION
            }
            let pushStreamObj = $bean.cloneJson(objUserChannel);
            pushStreamObj['user'] = user;
            redisService.pubStreamObj({
                type: TYPE_NEW_USER_CHANNEL,
                value: pushStreamObj,
                channelId: channelId
            });
            redisService.pubStreamObj({
                type: TYPE_NEW_USER_CHANNEL,
                value: pushStreamObj,
                channelId: lastUserChannel['channelId']
            });
            let messenger = {
                userId: userLogin.id,
                channelId: channelId,
                message: userLogin.username + ' đã thêm ' + user.username + ' vào nhóm.',
                type: messengerStatic.TYPE_TEXT,
                status: messengerStatic.STATUS_ORIGINAL,
                typeRole: messengerStatic.TYPE_ROLE_ATTACHED
            }
            let result = await baseDao.insert(objUserChannel, listModelType.modelTypeUserChannel);
            messengerService.insertMessage(userLogin, messenger);
            return result;
        }
    },

    // async doAcceptRequest(requestId, userLogin) {
    //     if ($bean.isNotEmpty(requestId)) {
    //         let request = await baseDao.findById(requestId, listModelType.modelTypeUserChannel);
    //         if ($bean.isNotEmpty(request)) {
    //             let updateRequest = {
    //                 id: requestId,
    //                 action: userChannelStatic.ACTION_READED
    //             }
    //             return baseDao.quickUpdate(updateRequest, listModelType.modelTypeUserChannel).then(function (updatedRequest) {
    //
    //                 // Thêm thông tin message vào channel
    //                 let message = '';
    //                 if (updatedRequest['typeChat'] == userChannelStatic.TYPE_CHAT_GROUP) {
    //                     message += userLogin.email + ' đã tham gia cuộc trò chuyện';
    //                 } else {
    //                     message += userLogin.email + ' đã chấp nhận yêu cầu kết nối với bạn';
    //
    //                     // //    Cập nhật trạng thái hoạt động của Chat
    //                     // let channel = {
    //                     //     id: request['channelId'],
    //                     //     status: channelStatic.STATUS_ACTIVE,
    //                     //     action: (request.userId == userLogin.id) ? userChannelStatic.ACTION_READED : userChannelStatic.ACTION_UNREAD
    //                     // }
    //                     // baseDao.quickUpdate(channel, listModelType.modelTypeChannel).then(function (updatedChannel) {
    //                     //     console.log('Cập nhật trạng thái hoạt động của channel');
    //                     //     console.log(updatedChannel);
    //                     // })
    //                 }
    //
    //                 let messenger = {
    //                     userId: userLogin.id,
    //                     channelId: request.channelId,
    //                     message: message,
    //                     type: messengerStatic.TYPE_TEXT,
    //                     status: messengerStatic.STATUS_ORIGINAL,
    //                     typeRole: messengerStatic.TYPE_ROLE_NOTIFIED
    //                 }
    //
    //                 messengerService.doInsertMessenger(userLogin, messenger).then(function (data) {
    //                     console.log('Message được thông báo khi chấp nhận request ');
    //                     console.log(data);
    //                 })
    //                 // //    Tạo liên kết giữa user - friends
    //                 // userChannelService.findAcceptedByChannel(request.channelId).then(function (userChannels) {
    //                 //     if ($bean.isNotEmpty(userChannels)) {
    //                 //         for (let i = 0; i < userChannels.length; i++) {
    //                 //             console.log('Tạo liên kết user - user');
    //                 //             if (userChannels[i].userId != updatedRequest.userId) {
    //                 //                 let objUserFriend = {
    //                 //                     userId: data.userId,
    //                 //                     friendId: userChannels[i].userId,
    //                 //                     channelId: (request.typeChat == userChannelStatic.TYPE_CHAT_CONTACT) ? updatedRequest.channelId : null,
    //                 //                     intimacy: (request.typeChat == userChannelStatic.TYPE_CHAT_CONTACT) ? userFriendStatic.INTIMACY_HEIGHT : userFriendStatic.INTIMACY_MEDIUM,
    //                 //                     modifiedDate: new Date()
    //                 //                 }
    //                 //                 baseDao.insert(objUserFriend, modelTypeUserFriend).then(function (userFriend) {
    //                 //                     console.log('You have link to user !');
    //                 //                     console.log(userFriend);
    //                 //                 })
    //                 //             }
    //                 //         }
    //                 //     }
    //                 // })
    //                 return updatedRequest;
    //             })
    //         }
    //     }
    // },

    // async doRejectRequest(requestId) {
    //     if ($bean.isNotEmpty(requestId)) {
    //         let request = await baseDao.findById(requestId, listModelType.modelTypeUserChannel);
    //         if ($bean.isNotEmpty(request)) {
    //             let updateRequest = {
    //                 id: requestId,
    //                 status: userChannelStatic.STATUS_REJECTED,
    //                 modifiedDate: new Date()
    //             }
    //             let result = await baseDao.quickUpdate(updateRequest, listModelType.modelTypeUserChannel);
    //             console.log('Từ chối request ');
    //             console.log(result);
    //             return result;
    //         }
    //     }
    // },

    async deleteRequest(requestId, userLogin) {
        let result = {};
        let request = await baseDao.findById(requestId, listModelType.modelTypeUserChannel);
        if ($bean.isNotEmpty(request)) {
            redisService.pubStreamObj({
                type: TYPE_DELETED_USER_CHANNEL,
                value: request,
                channelId: request['channelId']
            });

            let message = '';
            if (request['userId'] == userLogin.id) {
                message += userLogin.email + ' đã rời khỏi nhóm chat !';
            } else {
                let user = await baseDao.findById(request['userId'], listModelType.modelTypeUser);
                message += userLogin.email + ' đã xóa ' + user.username + ' khỏi nhóm ';
            }
            let messenger = {
                userId: userLogin.id,
                channelId: request['channelId'],
                message: message,
                type: messengerStatic.TYPE_TEXT,
                typeRole: messengerStatic.TYPE_ROLE_NOTIFIED
            }
            console.log('Messenger service');
            console.log(messengerService);
            messengerService.insertMessage(userLogin, messenger);
            result = await baseDao.delete(requestId, listModelType.modelTypeUserChannel);
        }
        return result;
    },

    async getLinkUserChannel(userId, channelId) {
        let result = await userChannelDao.findUserChannel(userId, channelId);
        return result;
    },

    async checkLinkToContact(userId, contactId) {
        let result = await userChannelDao.getLinkUserContact(userId, contactId);
        if ($bean.isNotEmpty(result)) {
            result = result[0];
        } else {
            result = null;
        }
        return result;
    },


    async sendRequestToChat(channelId, userLogin) {
        let result = await userChannelService.doCreateRequest(userLogin.id, channelId, userChannelStatic.TYPE_CHAT_GROUP, userLogin);
        return result;
    },

    async addUsersToChat(userIds, channelId, userLogin) {
        let result = [];
        let listPromiseRequest = [];
        if ($bean.isNotEmpty(userIds)) {
            for (let i = 0; i < userIds.length; i++) {
                let request = userChannelService.doCreateRequest(userIds[i], channelId, userChannelStatic.TYPE_CHAT_GROUP, userLogin);
                listPromiseRequest.push(request);
            }
        }
        if ($bean.isNotEmpty(listPromiseRequest)) {
            result = await Promise.all(listPromiseRequest);
        }
        return result;
    },

    async acceptRequest(requestId, userLogin) {
        let result = await userChannelService.doAcceptRequest(requestId, userLogin);
        return result;
    },

    async rejectRequest(requestId) {
        let result = await userChannelService.doRejectRequest(requestId);
        return result;
    },

    async listSentRequest(userId, number, offset) {
        let result = await userChannelDao.listSentRequest(userId, number, offset);
        return result;
    },

    async listIncomeRequest(userId, number, offset) {
        let result = await userChannelDao.listIncomeRequest(userId, number, offset);
        return result;
    },

    async leaveChannel(channelId, userLogin) {
        let result = {};
        let userChannel = await userChannelDao.findUserChannel(userLogin.id, channelId);
        if ($bean.isNotEmpty(userChannel)) {
            result = await userChannelService.deleteRequest(userChannel.id, userLogin);
        }
        console.log('Rời khỏi channel');
        console.log(result);
        return result;
    },

    getByUser(userId) {
        return userChannelDao.listByUser(userId);
    },

    getByChannel(channelId) {
        return userChannelDao.listByChannel(channelId);
    },

    extraInfoUserByChannel(channelId) {
        return userChannelDao.extraInfoUserByChannel(channelId);
    },

    async removeUser(userId, channelId, userLogin) {
        let result = {};
        let userChannel = await userChannelDao.findUserChannel(userId, channelId);
        if ($bean.isNotEmpty(userChannel)) {
            result = await userChannelService.deleteRequest(userChannel.id, userLogin);
        }
        console.log('Bị xóa khỏi nhóm chat');
        console.log(result);
        return result;
    },

    countByUserNotRejected(userId) {
        return userChannelDao.countByUserNotRejected(userId);
    },

    async updateViewMessengers(userChannel) {
        let countMessengers = await messengerDao.countByChannel(userChannel['channelId']);
        let cloneObj = $bean.cloneJson(userChannel);
        cloneObj['unReadMessengers'] = (countMessengers > userChannel['position']) ? (countMessengers - userChannel['position']) : 0
        redisService.pubStreamObj({
            type: TYPE_UPDATED_USER_CHANNEL,
            value: cloneObj,
            channelId: userChannel['channelId']
        });
        return baseDao.update(userChannel, listModelType.modelTypeUserChannel);
    }
}

module.exports = userChannelService;
