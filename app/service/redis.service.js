const Sequelize = require('sequelize');
const redisConfig = require('../common/config/redis.config');
const redisApp = redisConfig.redisApp;
const redisPushStream = redisConfig.redisPushStream;
const Op = Sequelize.Op;
const baseDao = require('../dao/base.dao');
const socket = require('./socket.service');
const listModelType = require('../common/obj/modelType/listModelType');
var $bean = require('../common/utils/hyd-bean-utils');
var userStatic = require('../common/obj/objStatic/userStatic');

var redisService = {

// CRUD with Redis
// Khi dữ liệu được gửi qua Redis đồng nghĩa nó sẽ tự động [ lưu vào database , gửi thông tin qua PushStream ]

    // setRedis: (key, value, redisType, modelType, httpRes) => {
    //     if ($bean.isNil(key) || $bean.isEmpty(value)) {
    //         throw new Error("error.entity.null");
    //     }
    //     redisType.set(key, $bean.getJson(value), function (err, reply) {
    //         if (!err) {
    //             // console.log('Luu thanh cong vao redis');
    //             // console.log('Get data ' + messengerService.get(key, redisType));
    //             if (redisType == redisApp) {
    //                 baseDao.insert(value, modelType).then(function (res) {
    //                     // console.log('Set thanh cong va DB ' + res);
    //                     redisService.deleteRedis(key, redisType);
    //                     redisService.getRedis(key, redisType);
    //                     console.log('Data ');
    //                     console.log(res);
    //                     httpRes.send(res);
    //                 }).catch(function (err) {
    //                     console.log("Error save to DB");
    //                     redisService.setRedis(key, value, redisType, modelType);
    //                 })
    //             } else {
    //                 socket.pubMessage(value).then(res => {
    //                     console.log('Pub message ');
    //                     console.log(res);
    //                     redisService.deleteRedis(key, redisType);
    //                     redisService.getRedis(key, redisType);
    //                 }).catch(err => {
    //                     console.log('Error pub message');
    //                     redisService.setRedis(key, value, redisType, modelType);
    //                 })
    //             }
    //         } else {
    //             console.log('Error set to redis ' + err);
    //         }
    //     });
    // },


    pubStreamObj: (value) => {
        if ($bean.isEmpty(value)) {
            throw new Error("error.entity.null");
        }
        let key = $bean.genRandomID(16);
        redisPushStream.set(key, $bean.getJson(value), function (err, reply) {
            if (!err) {
                redisService.pubObjToChannel(value).then(res => {
                    console.log('Pub to channel ');
                    console.log(res);
                    redisService.deleteRedis(key, redisPushStream);
                    redisService.getRedis(key, redisPushStream);
                }).catch(err => {
                    redisService.pubObjToChannel(value);
                })
            } else {
                console.log('Error set to redis ' + err);
            }
        });
    },

    async pubObjToChannel(value) {
        let result = await socket.pubToChannel(value);
        return result;
    },

    getRedis: (key, redisType) => {
        redisType.get(key, function (err, reply) {
            if (!err) {
                console.log('Result : ' + reply);
            } else {
                console.log('Error get ' + key + ' from redis !');
                throw err;
            }
        });
    },

    isExistRedis: (key, redisType) => {
        redisType.exists('language', function (err, reply) {
            if (!err) {
                if (reply === 1) {
                    console.log(key + " exists in redis !");
                } else {
                    console.log(key + " does't exists in redis !");
                }
            } else {
                throw err;
            }
        });
    },

    deleteRedis: (key, redisType) => {
        redisType.del(key, function (err, reply) {
            if (!err) {
                if (reply === 1) {
                    console.log(key + " is deleted from redis !");
                } else {
                    console.log(key + " does't exists in redis !");
                }
            } else {
                throw err;
            }
        });
    },

    expireRedis: (key, time, redisType) => {
        redisType.expire(key, time); // Expirty time for 30 seconds.
    }
}

module.exports = redisService;


// Chú thích chung

// modelType: Xác định bạn đang làm việc với đối tượng csdl nào
// number: số lượng đối tượng được lấy ra
// offset: vị trí bắt đầu tính toán
// attributes: đối tượng chứa nhiều giá trị {key, value}
// orderAttributes: mảng danh sách các thuộc tính được sắp xếp vd : [['username', 'ASC'], ['email', 'DESC']]
