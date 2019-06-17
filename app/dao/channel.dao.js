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
var channelStatic = require('../common/obj/objStatic/channelStatic');
var userChannelStatic = require('../common/obj/objStatic/userChannelStatic');
var userMessengerStatic = require('../common/obj/objStatic/userMessengerStatic');
var $bean = require('../common/utils/hyd-bean-utils');

var channelDao = {

    async countSearch(userId, value) {
        let listNotRejectedUserChannels = await userChannelDao.listByNotRejected(userId);
        let result = [];
        if ($bean.isNotEmpty(listNotRejectedUserChannels)) {
            let channelIds = [];
            for (let i = 0; i < listNotRejectedUserChannels.length; i++) {
                channelIds.push(listNotRejectedUserChannels[i].channelId);
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
        let listNotRejectedUserChannels = await userChannelDao.listByNotRejected(userId);
        let result = [];
        if ($bean.isNotEmpty(listNotRejectedUserChannels)) {
            let channelIds = [];
            for (let i = 0; i < listNotRejectedUserChannels.length; i++) {
                channelIds.push(listNotRejectedUserChannels[i].channelId);
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


    async listByUser(userId, number, offset) {
        // let rawQuery = '';
        // let optionReplacements = {};
        // // if (!($bean.isNumber(number) && $bean.isNumber(offset))) {
        // //     rawQuery += "SELECT * " +
        // //         "FROM Channels " +
        // //         "INNER JOIN UserChannels " +
        // //         "ON (Channels.id = UserChannels.channelId) " +
        // //         "WHERE (UserChannels.userId = :userId AND UserChannels.status != :status) " +
        // //         "ORDER BY Channels.finishWorkingTime DESC ";
        // //     optionReplacements = {userId: userId, status: userChannelStatic.STATUS_REJECTED};
        // // } else {
        // //     rawQuery += "SELECT * " +
        // //         "FROM Channels " +
        // //         "INNER JOIN UserChannels " +
        // //         "ON (Channels.id = UserChannels.channelId) " +
        // //         "WHERE (UserChannels.userId = :userId AND UserChannels.status != :status) " +
        // //         "ORDER BY Channels.finishWorkingTime DESC " +
        // //         "LIMIT :limit OFFSET :offset";
        // //     optionReplacements = {
        // //         userId: userId,
        // //         status: userChannelStatic.STATUS_REJECTED,
        // //         limit: number,
        // //         offset: offset
        // //     };
        // //
        // // }
        // if (!($bean.isNumber(number) && $bean.isNumber(offset))) {
        //     rawQuery += "SELECT * " +
        //         "FROM Channels " +
        //         "INNER JOIN UserChannels" +
        //         "ON Channels.id = Userchannels.channelId" +
        //         "WHERE Channels.id IN ( SELECT UserChannels.channelId FROM UserChannels WHERE (UserChannels.userId = :userId AND UserChannels.status != :status)) " +
        //         "ORDER BY Channels.finishWorkingTime DESC ";
        //     optionReplacements = {userId: userId, status: userChannelStatic.STATUS_REJECTED};
        // } else {
        //     rawQuery += "SELECT * " +
        //         "FROM Channels " +
        //         "WHERE Channels.id IN ( SELECT UserChannels.channelId FROM UserChannels WHERE (UserChannels.userId = :userId AND UserChannels.status != :status)) " +
        //         "ORDER BY Channels.finishWorkingTime DESC " +
        //         "LIMIT :limit OFFSET :offset";
        //     optionReplacements = {
        //         userId: userId,
        //         status: userChannelStatic.STATUS_REJECTED,
        //         limit: number,
        //         offset: offset
        //     };
        //
        // }
        // let result = await sequelizeDB.query(rawQuery,
        //     {
        //         replacements: optionReplacements,
        //         type: Sequelize.QueryTypes.SELECT
        //     }
        // )

        let listNotRejectedUserChannels = await userChannelDao.listByNotRejected(userId);
        let result = [];
        if ($bean.isNotEmpty(listNotRejectedUserChannels)) {
            let channelIds = [];
            for (let i = 0; i < listNotRejectedUserChannels.length; i++) {
                channelIds.push(listNotRejectedUserChannels[i].channelId);
            }
            console.log('List channelId by user ');
            console.log(channelIds);
            result = await Channel.findAll({
                where: {id: {[Op.in]: channelIds}},
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
                order: [['createdAt', 'DESC']]
            });
        }
        return result;
    }
}

module.exports = channelDao;
