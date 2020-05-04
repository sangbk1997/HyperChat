const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const Op = Sequelize.Op;
const UserChat = db.userChat;
const userChatModel = require('../model/userChat.model');
const userChatStatic = require('../common/obj/objStatic/userChatStatic');
const messengerStatic = require('../common/obj/objStatic/messengerStatic');
const chatStatic = require('../common/obj/objStatic/chatStatic');
const commonStatic = require('../common/obj/objStatic/commonStatic');
// const messengerService = require('./messenger.service');
const messengerService = require('./messenger.service');
const userService = require('./user.service');
const chatService = require('./chat.service');
const redisService = require('./redis.service');
var $bean = require('../common/utils/hyd-bean-utils');

const baseDao = require('../dao/base.dao');
const userChatDao = require('../dao/userChat.dao');
const messengerDao = require('../dao/messenger.dao');
const listModelType = require('../common/obj/modelType/listModelType');
const TYPE_NEW_USER_CHAT = 'NEW_USER_CHAT';
const TYPE_UPDATED_USER_CHAT = 'UPDATED_USER_CHAT';
const TYPE_REMOVE_USER_CHAT = 'REMOVE_USER_CHAT';
const TYPE_TYPING_INFO = 'TYPE_TYPING_INFO';
var userChatService = {
    //
    // findAllByChat(chatId) {
    //     if ($bean.isNotEmpty(chatId)) {
    //         return UserChat.findAll({where: {chatId: chatId}});
    //     } else {
    //         throw new Error('Error empty chat Id');
    //     }
    // },
    //
    // findAcceptedByChat(chatId) {
    //     if ($bean.isNotEmpty(chatId)) {
    //         return UserChat.findAll({where: {[Op.and]: [{chatId: chatId}, {status: userChatStatic.STATUS_ACCEPT}]}});
    //     } else {
    //         throw new Error('Error empty chat Id');
    //     }
    // },
    //
    // // 19/05
    // getLinkUserChat(userId, chatId) {
    //     if ($bean.isNotEmpty(userId) && $bean.isNotEmpty(chatId)) {
    //         return UserChat.findOne({where: {userId: userId, chatId: chatId}});
    //     } else {
    //         throw new Error('Not empty userId or chatId');
    //     }
    // },
    //
    // listRequestUnAccept(chatId) {
    //     return UserChat.findAll({where: {status: {[Op.ne]: userChatStatic.STATUS_ACCEPT}}});
    // },
    //
    // listRequestPending() {
    //     return UserChat.findAll({where: {[Op.and]: [{userId: VGlobal['userLogin'].id}, {status: userChatStatic.STATUS_PENDING}]}});
    // },
    //
    //
    // // Success

    //
    // userChatInfo(chatId) {
    //     return UserChat.findOne({where: {[Op.and]: [{userId: VGlobal['userLogin'].id}, {chatId: chatId}]}});
    // },
    //
    //
    // deleteByChat(chatId) {
    //     if ($bean.isNotEmpty(chatId)) {
    //         return UserChat.destroy({where: {chatId: chatId}});
    //     } else {
    //         throw new Error('Error empty chat Id');
    //     }
    // },
    //
    // leaveChat(chatId) {
    //     if ($bean.isNotEmpty(chatId)) {
    //         return UserChat.destroy({where: {[Op.and]: [{userId: VGlobal['userLogin'].id}, {chatId: chatId}]}});
    //     } else {
    //         throw new Error('Error empty chat Id');
    //     }
    // },
    //


    async turnOnNotification(chatId, userLogin) {
        let result = {};
        let userChat = await userChatDao.findUserChat(userLogin.id, chatId);
        if ($bean.isNotEmpty(userChat)) {
            result = await baseDao.quickUpdate({
                id: userChat.id,
                notification: userChatStatic.STATUS_NOTIFICATION
            }, listModelType.modelTypeUserChat);
        }
        return result;
    },

    async turnOffNotification(chatId, userLogin) {
        let result = {};
        let userChat = await userChatDao.findUserChat(userLogin.id, chatId);
        if ($bean.isNotEmpty(userChat)) {
            result = await baseDao.quickUpdate({
                id: userChat.id,
                notification: userChatStatic.STATUS_NOT_NOTIFICATION
            }, listModelType.modelTypeUserChat);
        }
        return result;
    },

    insert(userChat) {
        return baseDao.insert(userChat, listModelType.modelTypeUserChat);
    },

    get(userChatId) {
        return baseDao.findById(userChatId, listModelType.modelTypeUserChat);
    },

    list() {
        return baseDao.list(listModelType.modelTypeUserChat);
    },

    update(userChat) {
        return baseDao.update(userChat, listModelType.modelTypeUserChat);
    },

    async quickUpdate(userChat) {
        let result = await baseDao.quickUpdate(userChat, listModelType.modelTypeUserChat);
        let cloneOjb = $bean.cloneJson(result);
        redisService.pubStreamObj({
            type: TYPE_UPDATED_USER_CHAT,
            value: cloneOjb,
            chatId: userChat['chatId']
        });
        return result;
    },

    delete(userChatId) {
        return baseDao.delete(userChatId, listModelType.modelTypeUserChat);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeUserChat);
    },

    async doCreateRequest(userId, chatId, typeChat, userLogin) {
        let user = await baseDao.findById(userId, listModelType.modelTypeUser);
        let chat = await baseDao.findById(chatId, listModelType.modelTypeChat);
        let lastUserChat = await userChatDao.lastUserChat(userId);
        if ($bean.isNotEmpty(user) && ($bean.isNotEmpty(chat))) {
            let countMessengerByChat = await messengerDao.countByChat(chatId);
            console.log('Count');
            console.log(countMessengerByChat['dataValues']['count']);
            let objUserChat = {
                userId: userId,
                chatId: chatId,
                isAdmin: userChatStatic.IS_NOT_ADMIN,
                action: (userId == userLogin.id) ? userChatStatic.ACTION_READED : userChatStatic.ACTION_UNREAD,
                triggerId: userLogin.id,
                typeChat: typeChat,
                position: countMessengerByChat['dataValues']['count'],
                notification: userChatStatic.STATUS_NOTIFICATION
            }
            let result = await baseDao.insert(objUserChat, listModelType.modelTypeUserChat);
            let pushStreamObj = $bean.cloneJson(objUserChat);
            pushStreamObj['user'] = user;
            redisService.pubStreamObj({
                type: TYPE_NEW_USER_CHAT,
                value: pushStreamObj,
                chatId: chatId
            });
            redisService.pubStreamObj({
                type: TYPE_NEW_USER_CHAT,
                value: pushStreamObj,
                chatId: lastUserChat['chatId']
            });
            return result;
        }
    },

    // async doAcceptRequest(requestId, userLogin) {
    //     if ($bean.isNotEmpty(requestId)) {
    //         let request = await baseDao.findById(requestId, listModelType.modelTypeUserChat);
    //         if ($bean.isNotEmpty(request)) {
    //             let updateRequest = {
    //                 id: requestId,
    //                 action: userChatStatic.ACTION_READED
    //             }
    //             return baseDao.quickUpdate(updateRequest, listModelType.modelTypeUserChat).then(function (updatedRequest) {
    //
    //                 // Thêm thông tin message vào chat
    //                 let message = '';
    //                 if (updatedRequest['typeChat'] == userChatStatic.TYPE_CHAT_GROUP) {
    //                     message += userLogin.email + ' đã tham gia cuộc trò chuyện';
    //                 } else {
    //                     message += userLogin.email + ' đã chấp nhận yêu cầu kết nối với bạn';
    //
    //                     // //    Cập nhật trạng thái hoạt động của Chat
    //                     // let chat = {
    //                     //     id: request['chatId'],
    //                     //     status: chatStatic.STATUS_ACTIVE,
    //                     //     action: (request.userId == userLogin.id) ? userChatStatic.ACTION_READED : userChatStatic.ACTION_UNREAD
    //                     // }
    //                     // baseDao.quickUpdate(chat, listModelType.modelTypeChat).then(function (updatedChat) {
    //                     //     console.log('Cập nhật trạng thái hoạt động của chat');
    //                     //     console.log(updatedChat);
    //                     // })
    //                 }
    //
    //                 let messenger = {
    //                     userId: userLogin.id,
    //                     chatId: request.chatId,
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
    //                 // userChatService.findAcceptedByChat(request.chatId).then(function (userChats) {
    //                 //     if ($bean.isNotEmpty(userChats)) {
    //                 //         for (let i = 0; i < userChats.length; i++) {
    //                 //             console.log('Tạo liên kết user - user');
    //                 //             if (userChats[i].userId != updatedRequest.userId) {
    //                 //                 let objUserFriend = {
    //                 //                     userId: data.userId,
    //                 //                     friendId: userChats[i].userId,
    //                 //                     chatId: (request.typeChat == userChatStatic.TYPE_CHAT_USER) ? updatedRequest.chatId : null,
    //                 //                     intimacy: (request.typeChat == userChatStatic.TYPE_CHAT_USER) ? userFriendStatic.INTIMACY_HEIGHT : userFriendStatic.INTIMACY_MEDIUM,
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
    //         let request = await baseDao.findById(requestId, listModelType.modelTypeUserChat);
    //         if ($bean.isNotEmpty(request)) {
    //             let updateRequest = {
    //                 id: requestId,
    //                 status: userChatStatic.STATUS_REJECTED,
    //                 modifiedDate: new Date()
    //             }
    //             let result = await baseDao.quickUpdate(updateRequest, listModelType.modelTypeUserChat);
    //             console.log('Từ chối request ');
    //             console.log(result);
    //             return result;
    //         }
    //     }
    // },

    async deleteRequest(requestId, userLogin) {
        let result = {};
        let request = await baseDao.findById(requestId, listModelType.modelTypeUserChat);
        if ($bean.isNotEmpty(request)) {
            redisService.pubStreamObj({
                type: TYPE_REMOVE_USER_CHAT,
                value: request,
                chatId: request['chatId']
            });

            let message = '';
            if (request['userId'] == userLogin.id) {
                message += userLogin.username + ' đã rời khỏi nhóm chat !';
            } else {
                let user = await baseDao.findById(request['userId'], listModelType.modelTypeUser);
                message += userLogin.username + ' đã xóa ' + user.username + ' khỏi nhóm ';
            }
            let messenger = {
                userId: userLogin.id,
                chatId: request['chatId'],
                message: message,
                type: messengerStatic.TYPE_TEXT,
                typeRole: messengerStatic.TYPE_ROLE_NOTIFIED
            }
            messengerService.insertMessage(userLogin, messenger);
            result = await baseDao.delete(requestId, listModelType.modelTypeUserChat);
        }
        return result;
    },

    async getLinkUserChat(userId, chatId) {
        let result = await userChatDao.findUserChat(userId, chatId);
        return result;
    },

    async checkLinkToContact(userId, contactId) {
        let result = await userChatDao.getLinkUserContact(userId, contactId);
        if ($bean.isNotEmpty(result)) {
            result = result[0];
        } else {
            result = null;
        }
        return result;
    },

    async requestToContact(userId, contactId) {
        let result = await userChatService.checkLinkToContact(userId, contactId);
        let userLogin = await userService.get(userId);
        if ($bean.isEmpty(result)) {
            let objChat = {
                title: '',
                members: [contactId]
            }
            result = await chatService.doAddChat(objChat, chatStatic.TYPE_CHAT_USER, userLogin);
        }
        return result;
    },


    async sendRequestToChat(chatId, userLogin) {
        let result = await userChatService.doCreateRequest(userLogin.id, chatId, userChatStatic.TYPE_CHAT_GROUP, userLogin);
        return result;
    },

    async addUsersToChat(userIds, chatId, userLogin) {
        let result = [];
        let listPromiseRequest = [];
        if ($bean.isNotEmpty(userIds)) {
            for (let i = 0; i < userIds.length; i++) {
                let request = userChatService.doCreateRequest(userIds[i], chatId, userChatStatic.TYPE_CHAT_GROUP, userLogin);
                listPromiseRequest.push(request);
            }
        }
        if ($bean.isNotEmpty(listPromiseRequest)) {
            result = await Promise.all(listPromiseRequest);
        }
        return result;
    },

    async acceptRequest(requestId, userLogin) {
        let result = await userChatService.doAcceptRequest(requestId, userLogin);
        return result;
    },

    async rejectRequest(requestId) {
        let result = await userChatService.doRejectRequest(requestId);
        return result;
    },

    async listSentRequest(userId, number, offset) {
        let result = await userChatDao.listSentRequest(userId, number, offset);
        return result;
    },

    async listIncomeRequest(userId, number, offset) {
        let result = await userChatDao.listIncomeRequest(userId, number, offset);
        return result;
    },

    async leaveChat(chatId, userLogin) {
        let result = {};
        let userChat = await userChatDao.findUserChat(userLogin.id, chatId);
        if ($bean.isNotEmpty(userChat)) {
            result = await userChatService.deleteRequest(userChat.id, userLogin);
        }
        return result;
    },

    getByUser(userId) {
        return userChatDao.listByUser(userId);
    },

    linkUserChat(userId, chatId) {
        return userChatDao.findUserChat(userId, chatId);
    },

    getByChat(chatId) {
        return userChatDao.listByChat(chatId);
    },

    extraInfoUserByChat(chatId) {
        return userChatDao.extraInfoUserByChat(chatId);
    },

    async removeUser(userId, chatId, userLogin) {
        let result = {};
        let userChat = await userChatDao.findUserChat(userId, chatId);
        if ($bean.isNotEmpty(userChat)) {
            result = await userChatService.deleteRequest(userChat.id, userLogin);
        }
        console.log('Bị xóa khỏi nhóm chat');
        console.log(result);
        return result;
    },

    countByUserNotRejected(userId) {
        return userChatDao.countByUserNotRejected(userId);
    },

    async updateViewMessengers(userChat) {
        let countMessengers = await messengerDao.countByChat(userChat['chatId']);
        let cloneObj = $bean.cloneJson(userChat);
        cloneObj['unReadMessengers'] = (countMessengers > userChat['position']) ? (countMessengers - userChat['position']) : 0
        redisService.pubStreamObj({
            type: TYPE_UPDATED_USER_CHAT,
            value: cloneObj,
            chatId: userChat['chatId']
        });
        return baseDao.update(userChat, listModelType.modelTypeUserChat);
    },

    typingInfo(info) {
        let result = info;
        redisService.pubStreamObj({
            type: TYPE_TYPING_INFO,
            value: info,
            chatId: info['chatId']
        });
        return Promise.resolve(result);
    }
}

module.exports = userChatService;
