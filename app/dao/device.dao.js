const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const User = db.user;
const Device = db.device;
const Op = Sequelize.Op;
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
const userChatDao = require('./userChat.dao');
const userStatic = require('../common/obj/objStatic/userStatic');
var $bean = require('../common/utils/hyd-bean-utils');

var deviceDao = {
    async fcmByUser(userId) {
        let result = [];
        let foundDevices = await Device.findAll({
            where: {
                [Op.and]: [{userId: userId}, {status: 1}]
            },
            attributes: ['tokenFcm']
        })
        if($bean.isNotEmpty(foundDevices)){
            for(let i = 0; i < foundDevices.length; i++){
                result.push(foundDevices[i]['tokenFcm']);
            }
        }
        return result;
    },

    async getAll() {
        let result = [];
        result = await Device.findAll();
        return result;
    }
}

module.exports = deviceDao;
