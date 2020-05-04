const Sequelize = require('sequelize');
const sequelizeDB = require('../common/config/db.config').sequelize;
const db = require('../common/config/db.config.js');
const UserChat = db.userChat;
const User = db.user;
const Op = Sequelize.Op;
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
const userChatstatic = require('../common/obj/objStatic/userChatStatic');
var $bean = require('../common/utils/hyd-bean-utils');

var userChatDao = {

    async findByChat(chatId) {
        let chat = await baseDao.findById(chatId, listModelType.modelTypeChat);
        let result = {};
        if ($bean.isNotEmpty(chat)) {
            result = await UserChat.findAll({where: {chatId: chatId}});
        }
        return result;
    },

    async findAcceptedByChat(chatId) {
        let chat = await baseDao.findById(chatId, listModelType.modelTypeChat);
        let result = {};
        if ($bean.isNotEmpty(chat)) {
            result = await UserChat.findAll({where: {[Op.and]: [{chatId: chatId}, {status: userChatstatic.STATUS_ACCEPTED}]}});
        }
        return result;
    },

    async findUserChat(userId, chatId) {
        let result = {};
        result = await UserChat.findOne({where: {[Op.and]: [{userId: userId}, {chatId: chatId}]}});
        console.log(result);
        return result;
    },

    async findContactChat(userId, chatId) {
        console.log('Check link user - chat');
        let result = {};
        result = await UserChat.findOne({where: {[Op.and]: [{userId: {[Op.ne]: userId}}, {chatId: chatId}]}});
        console.log(result);
        return result;
    },
    // liệt kê tất cả các request đã gửi

    async listSentRequest(userId, number, offset) {
        // let rawQuery =
        //     "SELECT * " +
        //     "FROM userChats " +
        //     "WHERE (userChats.status = :status AND userChats.triggerId = :triggerId ) " +
        //     "ORDER BY userChats.createdAt DESC "
        // ;
        // let result = await sequelizeDB.query(rawQuery,
        //     {
        //         replacements: {status: userChatstatic.STATUS_PENDING, triggerId: userId},
        //         type: Sequelize.QueryTypes.SELECT
        //     }
        // )
        // return result;
        if (!($bean.isNumber(number) && $bean.isNumber(offset))) {
            number = 10;
            offset = 0;
        }
        let result = await UserChat.findAll({
            where: {[Op.and]: [{status: {[Op.ne]: userChatstatic.STATUS_ACCEPTED}}, {triggerId: userId}]},
            limit: number,
            offset: offset,
            order: [['createdAt', 'DESC']]
        })
        return result;
    },

    // liệt kê tất cả các request yêu cầu

    async listIncomeRequest(userId, number, offset) {
        if (!($bean.isNumber(number) && $bean.isNumber(offset))) {
            number = 10;
            offset = 0;
        }
        let result = await UserChat.findAll({
            where: {[Op.and]: [{status: userChatstatic.STATUS_PENDING}, {userId: userId}]},
            limit: number,
            offset: offset,
            order: [['createdAt', 'DESC']]
        })
        // let rawQuery =
        //     "SELECT * " +
        //     "FROM userChats " +
        //     "WHERE (userChats.status = :status AND userChats.userId = :userId AND userChats.triggerId != :triggerId ) " +
        //     "ORDER BY userChats.createdAt DESC "
        // ;
        // let result = await sequelizeDB.query(rawQuery,
        //     {
        //         replacements: {
        //             status: userChatstatic.STATUS_PENDING,
        //             userId: userId,
        //             triggerId: userId
        //         },
        //         type: Sequelize.QueryTypes.SELECT
        //     }
        // )
        return result;
    },


    async getLinkUserContact(userId, contactId) {
        let rawQuery =
            "SELECT * " +
            "FROM userChats " +
            "WHERE (userChats.userId = :userId AND userChats.typeChat = :typeChat " +
            "AND userChats.chatId IN ( SELECT userChats.chatId FROM userChats WHERE userChats.userId = :contactId AND userChats.typeChat = :typeChat)) " +
            "LIMIT 1"
        ;
        let result = await sequelizeDB.query(rawQuery,
            {
                replacements: {userId: userId, typeChat: userChatstatic.TYPE_CHAT_USER, contactId: contactId},
                type: Sequelize.QueryTypes.SELECT
            }
        )
        return result;
    },

    async getLinkWithUser(userLoginId, userId) {
        let rawQuery =
            "SELECT * " +
            "FROM userChats " +
            "WHERE (userChats.userId = :userId " +
            "AND userChats.chatId IN ( SELECT userChats.chatId FROM userChats WHERE userChats.userId = :contactId)) " +
            "LIMIT 1"
        ;
        let result = await sequelizeDB.query(rawQuery,
            {
                replacements: {userId: userLoginId, contactId: userId},
                type: Sequelize.QueryTypes.SELECT
            }
        )
        return result;
    },

    async listByChat(chatId) {
        let result = await UserChat.findAll({
            where: {'chatId': chatId}
        });
        return result;
    },

    async extraInfoUserByChat(chatId) {
        // var attributes = ['id', 'userId', 'chatId', 'position', 'lastMessengerId', 'notification', 'updatedAt', 'user.avatar_url'];
        var attributes = ['id', 'username', 'email', 'avatar_url'];
        let result = await UserChat.findAll({
            where: {'chatId': chatId},
            include: [{model: User, attributes: attributes}]
        });
        return result;
    },

    async lastUserChat(userId) {
        let result = await UserChat.findOne({
            where: {'userId': userId},
            limit: 1,
            offset: 0,
            order: [['updatedAt', 'DESC']]
        });
        return result;
    },

    async countByUserNotRejected(userId) {
        let result = await UserChat.findAll({
            attributes: [[sequelizeDB.fn('COUNT', sequelizeDB.col('id')), 'count']],
            where: {[Op.and]: [{'userId': userId}, {'status': {[Op.ne]: userChatstatic.STATUS_REJECTED}}]}
        });
        return result;
    },

    async updateLastReadMessenger(userLoginId, chatId, newPosition, messengerId) {

        let result = {};
        let userChat = await UserChat.findOne({
            where: {[Op.and]: [{userId: userLoginId}, {chatId: chatId}]}
        })
        if ($bean.isNotEmpty(userChat)) {
            let newUserChat = {
                id: userChat.id,
                position: newPosition,
                lastMessengerId: messengerId
            }
            result = await baseDao.quickUpdate(newUserChat, listModelType.modelTypeUserChat);
        } else {
            throw new Error('entity.not.null');
        }

        return result;
    },


//    New
    async listByUser(userId) {
        let result = await UserChat.findAll({
            where: {'userId': userId},
            attributes: ['id', 'userId', 'chatId', 'position', 'notification']
        });
        return result;
    },
    async allLinkChatFriends(chatIds, userId) {
        let result = await UserChat.findAll({
            where: {
                [Op.and]: [{
                    userId: {
                        [Op.ne]: userId
                    }
                },
                    {
                        chatId: {
                            [Op.in]: chatIds
                        }
                    }]
            },
            order: [['createdAt', 'ASC']],
            limit: 20,
            offset: 0
        });
        return result;
    },

}

module.exports = userChatDao;


// Chú thích biến
// attributes: mảng các thuộc tính
