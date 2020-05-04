const socketService = require('../service/socket.service');
const redis = require('../common/config/redis.config');
const redisApp = redis.redisApp;
const redisPushStream = redis.redisPushStream;
const redisService = require('../service/redis.service');
const messengerService = require('../service/messenger.service');
var messengerModel = require('../model/messenger.model');
var db = require('../common/config/db.config');

var modelTypeMessenger = {
    mapTable: db.messenger,
    mapObj: messengerModel
}

module.exports = function (app) {
    // app.post('/ws', function (req, res) {
    //     console.log(req.body);
    //     res.send(socketService.subChat(req.body.chatId));
    // });

    // app.post('/pub', function (req, res) {
    //     // Chưa có cơ chế đồng bộ dữ liệu được gửi đi giữa 2 server
    //     // redisService.setRedis('message' + '_' + req.query.id, req.body, redisPushStream, modelTypeMessenger, res);
    //     // redisService.setRedis('message' + '_' + req.query.id, req.body, redisApp, modelTypeMessenger, res);
    //     messengerService.doInsertMessenger(req.session.user.id, req.body).then(function (data) {
    //         res.json(data);
    //     })
    // });
}
