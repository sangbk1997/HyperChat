const db = require('../common/config/db.config');
const userFriendService = require('../service/userFriend.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.post('/userFriends', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userFriendService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.get('/userFriends', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userFriendService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve a single Customer by Id
    app.get('/userFriends/:userFriendId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userFriendService.get(req.params.userFriendId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Update a Customer with Id
    app.post('/userFriends/update', function (req, res, next){
        res.setHeader('Content-Type', 'application/json');
        userFriendService.update(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userFriends/quickUpdate', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userFriendService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete a Customer with Id
    app.delete('/userFriends/:userFriendId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userFriendService.delete(req.params.userFriendId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete all userFriends
    app.delete('/userFriends', function (req, res, next){
        res.setHeader('Content-Type', 'application/json');
        userFriendService.deleteAll().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userFriends/blockUser', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userFriendService.blockUser(req.body.userId, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

}
