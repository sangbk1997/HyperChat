const db = require('../common/config/db.config');
const userChannelService = require('../service/userChannel.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.post('/userChannels', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.insert(req.body).then(function (data) {
            res.json(data);
        })
    });

    app.get('/userChannels', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.list().then(function (data) {
            res.json(data);
        })
    });

    // Retrieve a single Customer by Id
    app.get('/userChannels/:userChannelId', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.get(req.params.userChannelId).then(function (data) {
            res.json(data);
        })
    });

    // Update a Customer with Id
    app.post('/userChannels/update', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.update(req.body).then(function (data) {
            res.json(data);
        })
    });

    app.post('/userChannels/quickUpdate', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        })
    });

    // Delete a Customer with Id
    app.delete('/userChannels/:userChannelId', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.delete(req.params.userChannelId).then(function (data) {
            res.json(data);
        })
    });

    // Delete all userChannels
    app.delete('/userChannels', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.deleteAll().then(function (data) {
            res.json(data);
        })
    });

    app.post('/userChannels/countByNotRejected', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.countByUserNotRejected(req.session.user.id).then(function (data) {
            res.json(data);
        })
    });

    app.post('/userChannels/countByNotRejected', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.countByUserNotRejected(req.session.user.id).then(function (data) {
            res.json(data);
        })
    });

}
