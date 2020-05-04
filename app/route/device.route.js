const db = require('../common/config/db.config');
const deviceService = require('../service/device.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.post('/devices', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        deviceService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.get('/devices', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        deviceService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve a single Customer by Id
    app.get('/devices/:deviceId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        deviceService.get(req.params.deviceId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/devices/update', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        deviceService.update(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/devices/quickUpdate', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        deviceService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/devices/delete', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        deviceService.delete(req.body.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/devices/fcmByUser', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        deviceService.getFcmByUser(req.body.userId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

}
