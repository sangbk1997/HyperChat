const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const User = db.user;
const Chat = db.chat;
const Op = Sequelize.Op;
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
const userChatDao = require('./userChat.dao');
const userStatic = require('../common/obj/objStatic/userStatic');
var $bean = require('../common/utils/hyd-bean-utils');
const DEFAULT_NUMBER_USER = 20;
const DEFAULT_OFFSET_USER = 0;
var userDao = {

    async findByEmail(email) {
        if ($bean.isNotNil(email)) {
            let result = await User.findOne({where: {'email': email}});
            return result;
        } else {
            throw new Error('error.email.null');
        }
    },

    async suggestPeople(userLoginId, offset) {
        if (!$bean.isNumber(offset) || $bean.isNil(offset)) {
            offset = 0
        }
        let result = [];
        result = await User.findAll({
            where: {id: {[Op.ne]: userLoginId}},
            attributes: ['id', 'username', 'email', 'avatar_url'],
            order: [["username", 'ASC']],
            limit: 20,
            offset: offset
        });
        return result;
    },


    async suggestPeopleByChat(chatId, number, offset) {
        let listUserChats = await userChatDao.findByChat(chatId);
        let userInChat = [];
        if ($bean.isNotEmpty(listUserChats)) {
            for (let i = 0; i < listUserChats.length; i++) {
                userInChat.push(listUserChats[i]['userId']);
            }
        }
        let result = {};
        if ($bean.isNumber(number) && $bean.isNumber(offset)) {
            result = await User.findAll({
                where: {id: {[Op.notIn]: userInChat}},
                limit: number,
                offset: offset,
                order: [["username", 'ASC']]
            });
        } else {
            result = await User.findAll({
                where: {id: {[Op.notIn]: userInChat}},
                order: [["username", 'ASC']]
            });
        }
        return result;
    }
    ,

    async listUserDisabled(number, offset) {
        let result = {};
        if ($bean.isNumber(number) && $bean.isNumber(offset)) {
            result = await User.findAll({
                where: {status: userStatic.STATUS_DISABLED},
                limit: number,
                offset: offset,
                order: [["username", 'ASC']]
            });
        } else {
            result = await User.findAll({where: {status: userStatic.STATUS_DISABLED}, order: [["username", 'ASC']]});
        }
        return result;
    }
    ,

    async listUserActive(number, offset) {
        let result = {};
        if ($bean.isNumber(number) && $bean.isNumber(offset)) {
            result = User.findAll({
                where: {status: userStatic.STATUS_ACTIVE},
                limit: number,
                offset: offset,
                order: [["username", 'ASC']]
            });
        } else {
            return User.findAll({where: {status: userStatic.STATUS_ACTIVE}, order: [["username", 'ASC']]});
        }
        return result;
    }
    ,

    async listUserLogin(number, offset) {
        let result = {};
        if ($bean.isNumber(number) && $bean.isNumber(offset)) {
            result = await User.findAll({
                where: {statusLogin: userStatic.STATUS_LOGIN},
                limit: number,
                offset: offset,
                order: [["username", 'ASC']]
            });
        } else {
            result = await User.findAll({where: {statusLogin: userStatic.STATUS_LOGIN}, order: [["username", 'ASC']]});
        }
        return result;
    }
    ,

    async listUserAdmin(userLogin, number, offset) {
        let result = {};
        if ($bean.isNotEmpty(userLogin) && userLogin.isAdmin == userStatic.IS_ADMIN) {
            if ($bean.isNumber(number) && $bean.isNumber(offset)) {
                result = await User.findAll({
                    where: {isAdmin: userStatic.IS_ADMIN},
                    limit: number,
                    offset: offset,
                    order: [["username", 'ASC']]
                });
            } else {
                result = await User.findAll({where: {isAdmin: userStatic.IS_ADMIN}, order: [["username", 'ASC']]});
            }
        } else {
            throw new Error("error.permission.denied");
        }
        return result;
    }
    ,

    async userByGender(value, number, offset) {
        let result = {};
        if ($bean.isNumber(value)) {
            if ($bean.isNumber(number) && $bean.isNumber(offset)) {
                result = await User.findAll({
                    where: {gender: value},
                    limit: number,
                    offset: offset,
                    order: [["username", 'ASC']]
                });
            } else {
                result = await User.findAll({where: {gender: value}, order: [["username", 'ASC']]});
            }
        }
        return result;
    }
    ,

    async countAllUsers() {
        console.log('Count All Users');
        let arrays = await User.findAll({
            attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'count']]
        });
        let result = {count: arrays[0].dataValues.count};
        console.log(result);
        return result;
    }
    ,

    async searchUser(userLogin, value) {
        let formatValue = value.trim().toLowerCase();
        let result = await User.findAll({
            where: {
                [Op.and]: [
                    {id: {[Op.ne]: userLogin.id}},
                    {[Op.or]: [{username: {[Op.substring]: value}}, {email: {[Op.substring]: value}}]}
                ]
            },
            order: [['username', 'ASC'], ['email', 'ASC']],
            limit: DEFAULT_NUMBER_USER,
            offset: DEFAULT_OFFSET_USER,
        });
        return result;
    }
    ,

    async countSearchUsers(userLogin, value) {
        console.log('Count search users');
        let result = await User.findAll({
            attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'count']],
            where: {
                [Op.and]: [
                    {id: {[Op.ne]: userLogin.id}},
                    {[Op.or]: [{username: {[Op.substring]: value}}, {email: {[Op.substring]: value}}]}
                ]
            }
        });
        return result;
    },

    async findListUsers(userIds) {
        let result = await User.findAll({
            where: {
                id: {
                    [Op.in]: userIds
                }
            },
            attributes: ['id', 'username', 'email', 'avatar_url', 'role'],
            order: [['username', 'ASC']]
        });
        return result;
    },

    blockUser(userId) {

    }
    ,

    enableUser(userId) {

    }
    ,

// async getMyChats(number, offset) {
//     let result = {};
//     if ($bean.isNumber(number) && $bean.isNumber(offset)) {
//         result = await User.findOne({
//             include: [{
//                 model: Chat,
//                 order: [{'title': 'ASC'}],
//                 limit: number,
//                 offset: offset
//             }], where: {id: VGlobal['userLogin'].id}
//         })
//     } else {
//         result = await User.findOne({
//             include: [{
//                 model: Chat,
//                 order: [{'title': 'ASC'}]
//             }], where: {id: VGlobal['userLogin'].id}
//         })
//     }
//     return result;
// },
}

module.exports = userDao;


// Chú thích biến
// attributes: mảng các thuộc tính
