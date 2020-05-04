const Sequelize = require('sequelize');
const sequelizeDB = require('../common/config/db.config').sequelize;
const db = require('../common/config/db.config.js');
const Chat = db.chat;
const User = db.user;
const Messenger = db.messenger;
const UserChat = db.userChat;
const UserMessenger = db.userMessenger;
const Op = Sequelize.Op;
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
const userChatDao = require('./userChat.dao');
const userDao = require('./user.dao');
const messengerDao = require('./messenger.dao');
const redisService = require('../service/redis.service');
var chatStatic = require('../common/obj/objStatic/chatStatic');
var userChatStatic = require('../common/obj/objStatic/userChatStatic');
var userMessengerStatic = require('../common/obj/objStatic/userMessengerStatic');
var $bean = require('../common/utils/hyd-bean-utils');
const TYPE_UPDATED_CHAT = 'UPDATED_CHAT';
const DEFAULT_NUMBER_GALLERIES = 100
const DEFAULT_NUMBER_CHAT = 20
const DEFAULT_NUMBER_OFFSET = 0

var chatDao = {

    async countSearch(userId, value) {
        let userChatsByUser = await userChatDao.listByNotRejected(userId);
        let result = [];
        if ($bean.isNotEmpty(userChatsByUser)) {
            let chatIds = [];
            for (let i = 0; i < userChatsByUser.length; i++) {
                chatIds.push(userChatsByUser[i].chatId);
            }
            console.log('List chatId by user ');
            console.log(chatIds);
            result = await Chat.findAll({
                attributes: {
                    include: [[Sequelize.fn("COUNT", Sequelize.col("id")), "count"]]
                },
                where: {
                    [Op.and]: [
                        {id: {[Op.in]: chatIds}},
                        {title: {[Op.substring]: value}}
                    ]
                }
            });
        }
        return result;
    },

    async infoChat(chatId) {
        let result = {};
        result = await Chat.findOne({
            where: {id: chatId},
            include: [
                {
                    model: User
                },
                {
                    model: Messenger,
                    where: {type: 'IMAGE'},
                    order: [['createdAt', 'DESC']],
                    limit: 5,
                    offset: 0
                }
            ]
        });
        return result;
    },

    async galleries(chatId, type, offset) {
        let result = {};
        result = await Chat.findOne({
            where: {id: chatId},
            include: [
                {
                    model: Messenger,
                    where: {type: {[Op.in]: ["IMAGE", "LINK", "FILE"]}},
                    order: [['createdAt', 'DESC']],
                    limit: DEFAULT_NUMBER_GALLERIES,
                    offset: offset
                }
            ]
        });
        return result;
    },

    async initGalleries(chatId) {
        let result = {};
        result = await Chat.findOne({
            where: {id: chatId},
            include: [
                {
                    model: Messenger,
                    where: {type: type},
                    order: [['createdAt', 'DESC']],
                    limit: DEFAULT_NUMBER_GALLERIES,
                    offset: 0
                }
            ]
        });
        return result;
    },

    async countMessengersByChat(chatId) {
        let result = await messengerDao.countByChat(chatId);
        return result;
    },

    async viewChat(userId, chatId) {
        let userChat = await userChatDao.findUserChat(userId, chatId);
        let result = {};
        if ($bean.isNotEmpty(userChat)) {
            result = await Chat.findOne({
                where: {id: chatId},
                attributes: ['id', 'title', 'avatar_url', 'slogan', 'type'],
            });
            let newChat = result['dataValues'];
            if (newChat.type == chatStatic.TYPE_CHAT_USER) {
                let linkContactChat = await userChatDao.findContactChat(userId, newChat.id);
                if ($bean.isNotEmpty(linkContactChat)) {
                    let contact = await baseDao.findById(linkContactChat.userId, listModelType.modelTypeUser);
                    newChat.contact = {
                        id: contact.id,
                        username: contact.username,
                        avatar_url: contact.avatar_url,
                        email: contact.email
                    };
                }
            }
        }
        return result;
    },

    async shortInfoChat(userId, chatId) {
        let foundChat = await Chat.findOne({
            where: {id: chatId},
            attributes: ['id', 'title', 'avatar_url', 'slogan', 'type'],
            include: [
                {
                    model: Messenger,
                    order: [['createdAt', 'DESC']],
                    limit: 1,
                    offset: 0
                }
            ]
        });
        let newChat = foundChat['dataValues'];
        if ($bean.isNotEmpty(newChat)) {
            let countMessengers = await this.countMessengersByChat(newChat.id);
            let userLink = await userChatDao.findUserChat(userId, newChat.id);
            newChat['totalMessengers'] = countMessengers['dataValues']['count'];
            newChat['userPosition'] = userLink.position;
            if (newChat.type == chatStatic.TYPE_CHAT_USER) {
                let linkContactChat = await userChatDao.findContactChat(userId, newChat.id);
                if ($bean.isNotEmpty(linkContactChat)) {
                    let contact = await baseDao.findById(linkContactChat.userId, listModelType.modelTypeUser);
                    newChat.contact = {
                        username: contact.username,
                        avatar_url: contact.avatar_url,
                        email: contact.email
                    };
                }
            }
        }

        return newChat;
    },

    async listByUser(userId, number, offset) {
        let userChatsByUser = await userChatDao.listByUser(userId);
        let foundChats = [];
        let result = [];
        if ($bean.isNotEmpty(userChatsByUser)) {
            let chatIds = [];
            for (let i = 0; i < userChatsByUser.length; i++) {
                chatIds.push(userChatsByUser[i].chatId);
            }
            console.log('List chatId by user ');
            console.log(chatIds);
            foundChats = await Chat.findAll({
                where: {id: {[Op.in]: chatIds}},
                attributes: ['id', 'title', 'avatar_url', 'slogan', 'type'],
                include: [
                    {
                        model: Messenger,
                        order: [['createdAt', 'DESC']],
                        limit: 1,
                        offset: 0
                    }
                ],
                order: [['lastMessageDate', 'DESC']],
                limit: number,
                offset: offset
            });

            if ($bean.isNotEmpty(foundChats)) {
                for (let i = 0; i < foundChats.length; i++) {
                    // Dem tong so tin nhan trong nhom
                    let newChat = foundChats[i]['dataValues'];
                    let countMessengers = await this.countMessengersByChat(foundChats[i].id);
                    let userLink = await userChatDao.findUserChat(userId, foundChats[i].id);
                    newChat['totalMessengers'] = countMessengers['dataValues']['count'];
                    newChat['userPosition'] = userLink.position;
                    if (newChat.type == chatStatic.TYPE_CHAT_USER) {
                        let linkContactChat = await userChatDao.findContactChat(userId, newChat.id);
                        if ($bean.isNotEmpty(linkContactChat)) {
                            let contact = await baseDao.findById(linkContactChat.userId, listModelType.modelTypeUser);
                            newChat.contact = {
                                id: contact.id,
                                username: contact.username,
                                avatar_url: contact.avatar_url,
                                email: contact.email,
                                role: contact.role
                            };
                        }
                    }
                    result.push(newChat);
                }
            }
        }
        return result;
    },

    async searchChats(userId, value) {
        let result = [];
        let formatValue = value.trim().toLowerCase();
        let linkUserChats = await userChatDao.listByUser(userId);
        let chatIds = [];
        if ($bean.isNotEmpty(linkUserChats)) {
            for (let i = 0; i < linkUserChats.length; i++) {
                chatIds.push(linkUserChats[i]['chatId']);
            }
        }
        let foundChats = await Chat.findAll({
            where: {
                [Op.and]: [
                    {id: {[Op.in]: chatIds}},
                    {
                        [Op.or]: [
                            {'title': {[Op.substring]: formatValue}},
                            {'slogan': {[Op.substring]: formatValue}}
                        ]
                    }
                ]
            },
            attributes: ['id', 'title', 'avatar_url', 'slogan', 'type'],
            order: [['title', 'ASC'], ['slogan', 'ASC']],
            limit: DEFAULT_NUMBER_CHAT,
            offset: DEFAULT_NUMBER_OFFSET
        })
        if ($bean.isNotEmpty(foundChats)) {
            for (let i = 0; i < foundChats.length; i++) {
                let newChat = foundChats[i]['dataValues'];
                let userLink = await userChatDao.findUserChat(userId, foundChats[i].id);
                newChat['userPosition'] = userLink.position;
                result.push(newChat);
            }
        }
        return result;
    },
    //
    // async searchChat(userId, value) {
    //     let formatValue = value.trim().toLowerCase();
    //     let userChatsByUser = await userChatDao.listByUser(userId);
    //     let result = [];
    //     if ($bean.isNotEmpty(userChatsByUser)) {
    //         let chatIds = [];
    //         for (let i = 0; i < userChatsByUser.length; i++) {
    //             chatIds.push(userChatsByUser[i].chatId);
    //         }
    //         console.log('List chatId by user ');
    //         console.log(chatIds);
    //         result = await Chat.findAll({
    //             where: {
    //                 [Op.and]: [
    //                     {id: {[Op.in]: chatIds}},
    //                     {[Op.or]: [{title: {[Op.substring]: formatValue}}, {slogan: {[Op.substring]: formatValue}}]}
    //                 ]
    //             },
    //             order: [['createdAt', 'DESC']],
    //             limit: DEFAULT_NUMBER_CHAT,
    //             offset: DEFAULT_NUMBER_OFFSET
    //         });
    //     }
    //     return result;
    // },

    async statusUserChat(userId, chatId) {
        let result = {};
        let countMessengers = await messengerDao.countByChat(chatId);
        console.log(countMessengers);
        console.log(countMessengers.count);
        let userChat = await userChatDao.findUserChat(userId, chatId);
        result = {
            chatId: chatId,
            unReadMessengers: countMessengers - userChat.position
        }
        return result;
    },

    async doUpdateChat(chat, userLogin) {
        console.log("update chat")
        console.log(chat);
        return baseDao.quickUpdate(chat, listModelType.modelTypeChat).then(function (newChat) {
            redisService.pubStreamObj({
                type: TYPE_UPDATED_CHAT,
                value: newChat,
                chatId: chat['chatId']
            });
        })
    },
}

module.exports = chatDao;
