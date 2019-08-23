const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const User = db.user;
const Channel = db.channel;
const Op = Sequelize.Op;
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
const userChannelDao = require('./userChannel.dao');
const userStatic = require('../common/obj/objStatic/userStatic');
var $bean = require('../common/utils/hyd-bean-utils');

var userDao = {

    async findByEmail(email) {
        if ($bean.isNotNil(email)) {
            let result = await User.findOne({where: {'email': email}});
            return result;
        } else {
            throw new Error('error.email.null');
        }
    },

    async suggestPeople(userLogin, number, offset) {
        let result = {};
        if ($bean.isNumber(number) && $bean.isNumber(offset)) {
            result = await User.findAll({
                where: {id: {[Op.ne]: userLogin.id}},
                limit: number,
                offset: offset,
                order: [["username", 'ASC']]
            });
        } else {
            result = await User.findAll({where: {id: {[Op.ne]: userLogin.id}}, order: [["username", 'ASC']]});
        }
        return result;
    },


    async suggestPeopleByChannel(channelId, number, offset) {
        let listUserChannels = await userChannelDao.findByChannel(channelId);
        let userInChannel = [];
        if ($bean.isNotEmpty(listUserChannels)) {
            for (let i = 0; i < listUserChannels.length; i++) {
                userInChannel.push(listUserChannels[i]['userId']);
            }
        }
        let result = {};
        if ($bean.isNumber(number) && $bean.isNumber(offset)) {
            result = await User.findAll({
                where: {id: {[Op.notIn]: userInChannel}},
                limit: number,
                offset: offset,
                order: [["username", 'ASC']]
            });
        } else {
            result = await User.findAll({
                where: {id: {[Op.notIn]: userInChannel}},
                order: [["username", 'ASC']]
            });
        }
        return result;
    },

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
    },

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
    },

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
    },

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
    },

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
    },

    async countAllUsers() {
        console.log('Count All Users');
        let arrays = await User.findAll({
            attributes: [[Sequelize.fn('COUNT', Sequelize.col('id')), 'count']]
        });
        let result = {count: arrays[0].dataValues.count};
        console.log(result);
        return result;
    },

    async searchUser(userLogin, value, number, offset) {
        console.log('search users');
        if (!($bean.isNumber(number) && $bean.isNumber(offset))) {
            number = 10;
            offset = 0;
        }
        let result = await User.findAll({
            where: {
                [Op.and]: [
                    {id: {[Op.ne]: userLogin.id}},
                    {[Op.or]: [{username: {[Op.substring]: value}}, {email: {[Op.substring]: value}}]}
                ]
            },
            limit: number,
            offset: offset,
            order: [['username', 'ASC'], ['email', 'ASC']]
        });
        return result;
    },

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

    blockUser(userId) {

    },

    enableUser(userId) {

    },

    // async getMyChannels(number, offset) {
    //     let result = {};
    //     if ($bean.isNumber(number) && $bean.isNumber(offset)) {
    //         result = await User.findOne({
    //             include: [{
    //                 model: Channel,
    //                 order: [{'title': 'ASC'}],
    //                 limit: number,
    //                 offset: offset
    //             }], where: {id: VGlobal['userLogin'].id}
    //         })
    //     } else {
    //         result = await User.findOne({
    //             include: [{
    //                 model: Channel,
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
