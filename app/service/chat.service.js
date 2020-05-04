const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const baseDao = require('../dao/base.dao');
const chatDao = require('../dao/chat.dao');
const userChatDao = require('../dao/userChat.dao');
const messengerDao = require('../dao/messenger.dao');
const userMessengerDao = require('../dao/userMessenger.dao');
const listModelType = require('../common/obj/modelType/listModelType');
// require static
const userStatic = require('../common/obj/objStatic/userStatic');
const chatStatic = require('../common/obj/objStatic/chatStatic');
const messengerStatic = require('../common/obj/objStatic/messengerStatic');
const userChatStatic = require('../common/obj/objStatic/userChatStatic');
const userMessengerStatic = require('../common/obj/objStatic/userMessengerStatic');
const userFriendStatic = require('../common/obj/objStatic/userFriendStatic');
const commonStatic = require('../common/obj/objStatic/commonStatic');
const messengerService = require('../service/messenger.service');
const userService = require('../service/user.service');
const redisService = require('../service/redis.service');
var $bean = require('../common/utils/hyd-bean-utils');
const userChatService = require('./userChat.service');
var HyperError = require("../common/obj/hyper-error/hyper-error")
const TYPE_UPDATED_CHAT = 'UPDATED_CHAT';
const TYPE_NEW_USER_CHAT = 'NEW_USER_CHAT';
const TYPE_UPDATED_USER_CHAT = 'UPDATED_USER_CHAT';
const TYPE_DELETED_USER_CHAT = 'DELETED_USER_CHAT';
const DEFAULT_NUMBER_CHATS = 10;
const DEFAULT_OFFSET_CHATS = 0;
var chatService = {

//
//     turnOffNotifyFromChat(userId, chatId) {
//         return Chat.update({notification: chatStatic.STATUS_UNSUBCRIBE}, {where: {[Op.and]: [{userId: userId}, {chatId: chatId}]}});
//     },
//
//     turnOnNotifyFromChat(userId, chatId) {
//         return Chat.update({notification: chatStatic.STATUS_SUBCRIBE}, {where: {[Op.and]: [{userId: userId}, {chatId: chatId}]}});
//     },
//
//     async addChat(obj) {
//         let result = await baseService.doInsert(obj, modelTypeChat);
//     },
//
//     getChatByLastestMessage(user, number, offset) {
//         if ($bean.isNumber(number, offset)) {
//             return Chat.findAll({
//                 where: {[Op.and]: [{userId: user.id}, {statusSubcribe: chatStatic.STATUS_SUBCRIBE}, {status: chatStatic.STATUS_ACTIVE}]},
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
//             return Chat.findAll({
//                 where: {[Op.and]: [{userId: user.id}, {statusSubcribe: chatStatic.STATUS_SUBCRIBE}, {status: chatStatic.STATUS_ACTIVE}]},
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
//     getChatUser(userId, friendId) {
//         return Chat.findOne({})
//     },
//
//     getChatHasUnReadMessage(user, number, offset) {
//         if ($bean.isNumber(number) && $bean.isNumber(offset)) {
//
//         } else {
//
//         }
//     },
//
//
//     listUserByChat(chatId, number, offset) {
//         if ($bean.isNumber(number) && $bean.isNumber(offset)) {
//             return Chat.findOne({
//                 include: {model: User, limit: number, offset: offset, order: ['username']},
//                 where: {id: chatId}
//             });
//         } else {
//             return Chat.findOne({include: {model: User, order: ['username']}, where: {id: chatId}});
//         }
//     },
//
// //    Load chat << sắp xếp theo có message mới nhất - tương tác gần nhất >>
//
//     loadChatByTimeFinish() {
//
//     },
//
//     checkLinkToUser(userId) {
//         return Chat.findOne({
//             include: {
//                 model: UserChat,
//                 include: {
//                     model: User
//                 },
//                 where: {
//                     [Op.and]: [{'$UserChat.userId': userId}, {'$UserChat.userId': VGlobal['userLogin'].id}]
//                 }
//             },
//             where: {type: chatStatic.TYPE_CHAT_USER}
//         })
//     }


//    New Code

    // List - Sort

    insert(chat) {
        return baseDao.insert(chat, listModelType.modelTypeChat);
    },

    get(chatId) {
        return baseDao.findById(chatId, listModelType.modelTypeChat);
    },

    list() {
        return baseDao.list(listModelType.modelTypeChat);
    },

    update(chat) {
        return baseDao.update(chat, listModelType.modelTypeChat);
    },

    quickUpdate(chat) {
        return baseDao.quickUpdate(chat, listModelType.modelTypeChat);
    },

    delete(chatId) {
        return baseDao.delete(chatId, listModelType.modelTypeChat);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeChat);
    },

    // Find And Order
    async listAndOrder(orderAttributes, number, offset) {
        var result = await baseDao.listAndOrder(orderAttributes, listModelType.modelTypeChat, number, offset);
        return result;
    },

    // Search by Attributes

    // async searchChats(value, affectAttributes, number, offset) {
    //     var result = await baseDao.search(value, affectAttributes, listModelType.modelTypeChat, number, offset);
    //     return result;
    // },

    listByUser(userId) {
        return chatDao.listByUser(userId, DEFAULT_NUMBER_CHATS, DEFAULT_OFFSET_CHATS);
    },

    shortInfoChat(userId, chatId) {
        return chatDao.shortInfoChat(userId, chatId);
    },

    loadMoreChats(userId, offset) {
        return chatDao.listByUser(userId, DEFAULT_NUMBER_CHATS, offset);
    },

    searchChats(userId, value) {
        return chatDao.searchChats(userId, value);
    },


    statusUserChat(userId, chatId) {
        return chatDao.statusUserChat(userId, chatId);
    },

    viewChat(userId, chatId) {
        return chatDao.viewChat(userId, chatId);
    },

    infoChat(chatId) {
        return chatDao.infoChat(chatId);
    },

    galleries(chatId, type, offset) {
        return chatDao.galleries(chatId, type, offset);
    },
    initGalleries(chatId) {
        return chatDao.galleries(chatId);
    },

    // use
    async doAddChat(objChat, typeChat, userLogin) {
        let chat = {
            status: chatStatic.STATUS_ACTIVE,
            createdBy: userLogin.id,
            type: typeChat,
            style: objChat.style,
            lastMessageDate: new Date()

        };
        if ($bean.isNotEmpty(objChat) && typeChat == chatStatic.TYPE_CHAT_GROUP) {
            chat['avatar_url'] = objChat.avatar_url;
            chat['title'] = objChat.title;
            chat['slogan'] = objChat.slogan;
            chat['description'] = objChat.description
        }

        // Tạo chat
        let resultChat = await baseDao.insert(chat, listModelType.modelTypeChat);

        let pushNewUserChats = [];

        if ($bean.isNotEmpty(resultChat)) {
            // Tạo liên kết chat và người tao
            let objUserChat = {
                userId: userLogin.id,
                chatId: resultChat.id,
                triggerId: userLogin.id,
                isAdmin: userChatStatic.IS_ADMIN,
                typeChat: typeChat,
                position: userChatStatic.ZERO_POSITION,
                lastMessengerId: null,
                notification: userChatStatic.STATUS_NOTIFICATION
            }
            baseDao.insert(objUserChat, listModelType.modelTypeUserChat);
            let clonePushStreamObj = $bean.cloneJson(objUserChat);
            redisService.pubStreamObj({
                type: TYPE_NEW_USER_CHAT,
                value: clonePushStreamObj,
                chatId: userLogin.id
            })

            // Tạo liên kết chat và các thành viên
            if ($bean.isNotEmpty(objChat['members'])) {
                let listPromiseUserChat = [];
                for (let i = 0; i < objChat['members'].length; i++) {
                    let checkedUser = await baseDao.findById(objChat['members'][i], listModelType.modelTypeUser);
                    if ($bean.isNotEmpty(checkedUser)) {
                        if (objChat['members'][i] != userLogin.id) {
                            let objUserChat = {
                                userId: objChat['members'][i],
                                chatId: resultChat.id,
                                triggerId: userLogin.id,
                                isAdmin: (typeChat == userChatStatic.TYPE_CHAT_GROUP) ? userChatStatic.IS_NOT_ADMIN : userChatStatic.IS_ADMIN,
                                typeChat: typeChat,
                                position: userChatStatic.ZERO_POSITION,
                                lastMessengerId: null,
                                notification: userChatStatic.STATUS_NOTIFICATION
                            }
                            let clonePushStreamObj = $bean.cloneJson(objUserChat);
                            // clonePushStreamObj['user'] = checkedUser;
                            pushNewUserChats.push({
                                type: TYPE_NEW_USER_CHAT,
                                value: clonePushStreamObj,
                                chatId: objChat['members'][i]
                            })
                            let promiseUserChat = baseDao.insert(objUserChat, listModelType.modelTypeUserChat);
                            listPromiseUserChat.push(promiseUserChat);
                        }
                    }
                }
                let userLinkChat = await Promise.all(listPromiseUserChat);
                if ($bean.isNotEmpty(pushNewUserChats)) {
                    for (let i = 0; i < pushNewUserChats.length; i++) {
                        redisService.pubStreamObj(pushNewUserChats[i]);
                    }
                }
            }
            return resultChat;
        }
    },

    async doDeleteChat(chatId, userLogin) {
        let chat = await baseDao.findById(chatId, listModelType.modelTypeChat);
        if ($bean.isNotEmpty(chat)) {
            let userChats = await userChatDao.findByChat(chatId);
            if ($bean.isNotEmpty(userChats)) {
                for (let i = 0; i < userChats.length; i++) {
                    userChatService.deleteRequest(userChats[i].id, userLogin);
                }
            }
            // Xóa hết tin nhắn đi theo chat
            messengerDao.deleteByChat(chatId).then(function (data) {
            })

            // xóa hết link user - messenger theo chat
            userMessengerDao.deleteByChat(chatId).then(function (data) {
            })
            let result = await baseDao.delete(chatId, listModelType.modelTypeChat);
            return result;
        }
    },

    async shortInfo(userId, chatId) {

    },

    async addChat(objectChat, userLogin) {
        let result = await chatService.doAddChat(objectChat, chatStatic.TYPE_CHAT_GROUP, userLogin);
        return result;
    },

    async addMembers(userId, chatId, members) {
        let result = [];
        let chat = await baseDao.findById(chatId, listModelType.modelTypeChat);
        if ($bean.isNotEmpty(chat) && $bean.isNotEmpty(members)) {
            // Tạo liên kết chat và các thành viên
            if ($bean.isNotEmpty(members)) {
                let pushNewUserChats = [];
                let listPromiseUserChat = [];
                for (let i = 0; i < members.length; i++) {
                    let checkedUser = await baseDao.findById(members[i], listModelType.modelTypeUser);
                    if ($bean.isNotEmpty(checkedUser)) {
                        let objUserChat = {
                            userId: members[i],
                            chatId: chatId,
                            triggerId: userId,
                            isAdmin: userChatStatic.IS_NOT_ADMIN,
                            typeChat: 'CHAT_GROUP',
                            position: userChatStatic.ZERO_POSITION,
                            lastMessengerId: null,
                            notification: userChatStatic.STATUS_NOTIFICATION
                        }
                        let clonePushStreamObj = $bean.cloneJson(objUserChat);
                        // clonePushStreamObj['user'] = checkedUser;
                        pushNewUserChats.push({
                            type: TYPE_NEW_USER_CHAT,
                            value: clonePushStreamObj,
                            chatId: members[i]
                        })
                        let promiseUserChat = baseDao.insert(objUserChat, listModelType.modelTypeUserChat);
                        listPromiseUserChat.push(promiseUserChat);
                    }
                }

                let userLinkChat = await Promise.all(listPromiseUserChat);
                result = userLinkChat;
                if ($bean.isNotEmpty(pushNewUserChats)) {
                    for (let i = 0; i < pushNewUserChats.length; i++) {
                        redisService.pubStreamObj(pushNewUserChats[i]);
                    }
                }
            }
        }
        return result;
    },

    async removeMember(userId, chatId, memberId) {
        let result = {};
        let userLinkChat = await userChatDao.findUserChat(userId, chatId);
        let removeUserLinkChat = await userChatDao.findUserChat(memberId, chatId);
        if ($bean.isNotEmpty(userLinkChat) && userLinkChat.isAdmin) {
            result = await baseDao.delete(removeUserLinkChat.id, listModelType.modelTypeUserChat);
        } else {
            throw new HyperError("NOT_PERMISSION", 400, "Bạn không có quyển xóa tài khoản ra khỏi nhóm chat !");
        }
        return result;
    },

    async leaveChat(userId, chatId) {
        let result = {};
        let userLinkChat = await userChatDao.findUserChat(userId, chatId);
        if ($bean.isNotEmpty(userLinkChat)) {
            result = await baseDao.delete(userLinkChat.id, listModelType.modelTypeUserChat);
        } else {
            throw new HyperError("ERROR", 400, "Nhóm chat không tồn tại hoặc đã bị xóa");
        }
        return result;
    },

    async removeChat(userLoginId, chatId) {
        let result = {'message': 'Bạn đã xóa thành công nhóm chat'};
        let userLinkChat = await userChatDao.findUserChat(userLoginId, chatId);
        console.log("link chat");
        console.log(userLinkChat);
        if ($bean.isNotEmpty(userLinkChat)) {
            if (userLinkChat.isAdmin) {
                let userLinksByChat = await userChatDao.listByChat(chatId);
                if ($bean.isNotEmpty(userLinksByChat)) {
                    for (let i = 0; i < userLinksByChat.length; i++) {
                        await baseDao.delete(userLinksByChat.id, listModelType.modelTypeUserChat);
                    }
                }
            } else {
                throw new HyperError("NOT_PERMISSION", 400, "Bạn không có quyền xóa nhóm chat này");
            }
        } else {
            throw new HyperError("NOT_PERMISSION", 400, "Đối tượng không tồn tại hoặc đã bị xóa");
        }
        return result;
    },

    async requestToUser(userId, contactId) {
        let result = await userChatService.checkLinkToContact(userId, contactId);
        let userLogin = await userService.get(userId);
        if ($bean.isEmpty(result)) {
            let objChat = {
                title: '',
                members: [contactId]
            }
            let chat = await chatService.addUser(objChat, userLogin);
            result = await userChatDao.findUserChat(contactId, chat.id);
        }
        return result;
    },

    async addUser(objectChat, userLogin) {
        let result = await chatService.doAddChat(objectChat, chatStatic.TYPE_CHAT_USER, userLogin);
        return result;
    },

    async updateChat(chat, userLogin) {
        let result = await chatService.doUpdateChat(chat, userLogin);
        return result;
    },

    async deleteChat(chatId, userLogin) {
        let result = await chatService.doDeleteChat(chatId, userLogin);
        return result;
    },

    countSearchByUser(userId, value) {
        return chatDao.countSearch(userId, value);
    }
}


module.exports = chatService;
