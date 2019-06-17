const Sequelize = require('sequelize');
const sequelizeDB = require('../common/config/db.config').sequelize;
const db = require('../common/config/db.config.js');
const UserChannel = db.userChannel;
const Op = Sequelize.Op;
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
const userChannelstatic = require('../common/obj/objStatic/userChannelStatic');
var $bean = require('../common/utils/hyd-bean-utils');

var userChannelDao = {

    async findByChannel(channelId) {
        let channel = await baseDao.findById(channelId, listModelType.modelTypeChannel);
        let result = {};
        if ($bean.isNotEmpty(channel)) {
            result = await UserChannel.findAll({where: {channelId: channelId}});
        }
        return result;
    },

    async findAcceptedByChannel(channelId) {
        let channel = await baseDao.findById(channelId, listModelType.modelTypeChannel);
        let result = {};
        if ($bean.isNotEmpty(channel)) {
            result = await UserChannel.findAll({where: {[Op.and]: [{channelId: channelId}, {status: userChannelstatic.STATUS_ACCEPTED}]}});
        }
        return result;
    },

    async findUserChannel(userId, channelId) {
        console.log('Check link user - channel');
        console.log(userId);
        console.log(channelId);
        let result = {};
        result = await UserChannel.findOne({where: {[Op.and]: [{userId: userId}, {channelId: channelId}]}});
        console.log(result);
        return result;
    },

    async deleteAllByChannel(channelId) {
        let result = {};
        let rowAffected = await UserChannel.destroy({where: {channelId: channelId}});
        if ($bean.isNotNil(rowAffected)) {
            result = {message: 'Delete all user-channel by channel success !'};
        }
        return result;
    },

    // liệt kê tất cả các request đã gửi

    async listSentRequest(userId, number, offset) {
        // let rawQuery =
        //     "SELECT * " +
        //     "FROM userChannels " +
        //     "WHERE (userChannels.status = :status AND userChannels.triggerId = :triggerId ) " +
        //     "ORDER BY userChannels.createdAt DESC "
        // ;
        // let result = await sequelizeDB.query(rawQuery,
        //     {
        //         replacements: {status: userChannelstatic.STATUS_PENDING, triggerId: userId},
        //         type: Sequelize.QueryTypes.SELECT
        //     }
        // )
        // return result;
        if (!($bean.isNumber(number) && $bean.isNumber(offset))) {
            number = 10;
            offset = 0;
        }
        let result = await UserChannel.findAll({
            where: {[Op.and]: [{status: {[Op.ne]: userChannelstatic.STATUS_ACCEPTED}}, {triggerId: userId}]},
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
        let result = await UserChannel.findAll({
            where: {[Op.and]: [{status: userChannelstatic.STATUS_PENDING}, {userId: userId}]},
            limit: number,
            offset: offset,
            order: [['createdAt', 'DESC']]
        })
        // let rawQuery =
        //     "SELECT * " +
        //     "FROM userChannels " +
        //     "WHERE (userChannels.status = :status AND userChannels.userId = :userId AND userChannels.triggerId != :triggerId ) " +
        //     "ORDER BY userChannels.createdAt DESC "
        // ;
        // let result = await sequelizeDB.query(rawQuery,
        //     {
        //         replacements: {
        //             status: userChannelstatic.STATUS_PENDING,
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
            "FROM userChannels " +
            "WHERE (userChannels.userId = :userId AND userChannels.typeChat = :typeChat " +
            "AND userChannels.channelId IN ( SELECT userChannels.channelId FROM userChannels WHERE userChannels.userId = :contactId AND userChannels.typeChat = :typeChat)) " +
            "LIMIT 1"
        ;
        let result = await sequelizeDB.query(rawQuery,
            {
                replacements: {userId: userId, typeChat: userChannelstatic.TYPE_CHAT_CONTACT, contactId: contactId},
                type: Sequelize.QueryTypes.SELECT
            }
        )
        return result;
    },

    async listByNotRejected(userId) {
        let result = await UserChannel.findAll({
            where: {[Op.and]: [{'userId': userId}, {'status': {[Op.ne]: userChannelstatic.STATUS_REJECTED}}]}
        });
        console.log('ChannelId result :');
        console.log(result[0]);
        return result;
    },

    async countByUserNotRejected(userId) {
        let result = await UserChannel.findAll({
            attributes: [[sequelizeDB.fn('COUNT', sequelizeDB.col('id')), 'count']],
            where: {[Op.and]: [{'userId': userId}, {'status': {[Op.ne]: userChannelstatic.STATUS_REJECTED}}]}
        });
        return result;
    },

    async updateLastReadMessenger(userLoginId, channelId, newPosition, messengerId) {
        let result = {};
        let userChannel = await UserChannel.findOne({
            where: {[Op.and]: [{userId: userLoginId}, {channelId: channelId}]}
        })
        if ($bean.isNotEmpty(userChannel)) {
            let newUserChannel = {
                id: userChannel.id,
                position: newPosition,
                lastMessengerId: messengerId
            }
            result = await baseDao.quickUpdate(newUserChannel, listModelType.modelTypeUserChannel);
        } else {
            throw new Error('entity.not.null');
        }

        return result;
    }
}

module.exports = userChannelDao;


// Chú thích biến
// attributes: mảng các thuộc tính
