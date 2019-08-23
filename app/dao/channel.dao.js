const Sequelize = require('sequelize');
const sequelizeDB = require('../common/config/db.config').sequelize;
const db = require('../common/config/db.config.js');
const Channel = db.channel;
const User = db.user;
const Messenger = db.messenger;
const UserChannel = db.userChannel;
const UserMessenger = db.userMessenger;
const Op = Sequelize.Op;
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
const userChannelDao = require('./userChannel.dao');
const messengerDao = require('./messenger.dao');
var channelStatic = require('../common/obj/objStatic/channelStatic');
var userChannelStatic = require('../common/obj/objStatic/userChannelStatic');
var userMessengerStatic = require('../common/obj/objStatic/userMessengerStatic');
var $bean = require('../common/utils/hyd-bean-utils');

var channelDao = {

    async countSearch(userId, value) {
        let userChannelsByUser = await userChannelDao.listByNotRejected(userId);
        let result = [];
        if ($bean.isNotEmpty(userChannelsByUser)) {
            let channelIds = [];
            for (let i = 0; i < userChannelsByUser.length; i++) {
                channelIds.push(userChannelsByUser[i].channelId);
            }
            console.log('List channelId by user ');
            console.log(channelIds);
            result = await Channel.findAll({
                attributes: {
                    include: [[Sequelize.fn("COUNT", Sequelize.col("id")), "count"]]
                },
                where: {
                    [Op.and]: [
                        {id: {[Op.in]: channelIds}},
                        {title: {[Op.substring]: value}}
                    ]
                }
            });
        }
        return result;
    },


    async searchByUser(userId, value, number, offset) {
        if (!($bean.isNumber(number) && $bean.isNumber(offset))) {
            number = 10;
            offset = 0;
        }
        let userChannelsByUser = await userChannelDao.listByNotRejected(userId);
        let result = [];
        if ($bean.isNotEmpty(userChannelsByUser)) {
            let channelIds = [];
            for (let i = 0; i < userChannelsByUser.length; i++) {
                channelIds.push(userChannelsByUser[i].channelId);
            }
            console.log('List channelId by user ');
            console.log(channelIds);
            result = await Channel.findAll({
                where: {
                    [Op.and]: [
                        {id: {[Op.in]: channelIds}},
                        {[Op.or]: [{title: {[Op.substring]: value}}]}
                    ]
                },
                // attributes: {
                //     include: [[Sequelize.fn("COUNT", Sequelize.col("UserMessengers.id")), "count_new_messenger"]]
                // },
                include: [
                    {
                        model: User,
                        where: {id: {[Op.ne]: userId}}
                    },
                    {
                        model: Messenger,
                        limit: 1,
                        offset: 0,
                        order: [['createdAt', 'DESC']]
                    }
                ],
                limit: number,
                offset: offset,
                order: [['createdAt', 'DESC']]
            });
        }
        return result;
    },

    async infoChannel(channelId) {
        let result = {};
        result = await Channel.findOne({
            where: {id: channelId},
            include: [
                {
                    model: User
                }
            ]
        });
        return result;
    },


    async listByUser(userId, number) {
        let userChannelsByUser = await userChannelDao.listByUser(userId);
        let returnChannels = [];
        let foundChannels = [];
        if ($bean.isNotEmpty(userChannelsByUser)) {
            let channelIds = [];
            for (let i = 0; i < userChannelsByUser.length; i++) {
                channelIds.push(userChannelsByUser[i].channelId);
            }
            console.log('List channelId by user ');
            console.log(channelIds);
            foundChannels = await Channel.findAll({
                where: {id: {[Op.in]: channelIds}},
                include: [
                    {
                        model: User,
                        where: {id: {[Op.ne]: userId}}
                    },
                    {
                        model: Messenger,
                        limit: 1,
                        offset: 0,
                        order: [['createdAt', 'DESC']]
                    }
                ],
                order: [['createdAt', 'DESC']]
            });
        }
        if ($bean.isNumber(number) && (number > 0)) {
            if (number > foundChannels.length) {
                number = foundChannels.length;
            }
            for (let i = 0; i < number; i++) {
                returnChannels.push(foundChannels[i]);
            }
        }
        let result = {
            availbleNumber: foundChannels.length,
            channels: returnChannels
        }
        return result;
    },

    async searchChannels(userId, number, value) {
        let userChannelsByUser = await userChannelDao.listByUser(userId);
        let returnChannels = [];
        let foundChannels = [];
        if ($bean.isNotEmpty(userChannelsByUser)) {
            let channelIds = [];
            for (let i = 0; i < userChannelsByUser.length; i++) {
                channelIds.push(userChannelsByUser[i].channelId);
            }
            console.log('List channelId by user ');
            console.log(channelIds);
            foundChannels = await Channel.findAll({
                where: {
                    [Op.and]: [
                        {id: {[Op.in]: channelIds}},
                        {[Op.or]: [{title: {[Op.eq]: null}}, {title: {[Op.substring]: value}}]}
                    ]
                },
                include: [
                    {
                        model: User,
                        where: {
                            [Op.and]: [
                                {id: {[Op.ne]: userId}},
                                {[Op.or]: [{'$channels.title$': {[Op.not]: null}}, {[Op.and]: [{'$channels.title$': {[Op.eq]: null}}, {username: {[Op.substring]: value}}]}]}
                            ]
                        }
                    },
                    {
                        model: Messenger,
                        limit: 1,
                        offset: 0,
                        order: [['createdAt', 'DESC']]
                    }
                ],
                order: [['createdAt', 'DESC']]
            });
        }
        if ($bean.isNumber(number) && (number > 0)) {
            if (number > foundChannels.length) {
                number = foundChannels.length;
            }
            for (let i = 0; i < number; i++) {
                returnChannels.push(foundChannels[i]);
            }
        }
        let result = {
            availbleNumber: foundChannels.length,
            channels: returnChannels
        }
        return result;
    },

    async viewChannel(userId, channelId) {
        let userChannel = await userChannelDao.findUserChannel(userId, channelId);
        let result = {};
        if ($bean.isNotEmpty(userChannel)) {
            result = await Channel.findOne({
                where: {id: channelId},
                include: [
                    {
                        model: User,
                        where: {id: {[Op.ne]: userId}}
                    },
                    {
                        model: Messenger,
                        limit: 1,
                        offset: 0,
                        order: [['createdAt', 'DESC']]
                    }
                ],
                order: [['createdAt', 'DESC']]
            });
        }
        return result;
    },

    async statusUserChannel(userId, channelId) {
        let result = {};
        let countMessengers = await messengerDao.countByChannel(channelId);
        console.log(countMessengers);
        console.log(countMessengers.count);
        let userChannel = await userChannelDao.findUserChannel(userId, channelId);
        result = {
            channelId: channelId,
            unReadMessengers: countMessengers - userChannel.position
        }
        return result;
    }
}

module.exports = channelDao;
