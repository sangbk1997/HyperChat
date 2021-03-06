const db = require('../common/config/db.config');
const userMessengerService = require('../service/userMessenger.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.post('/userMessengers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userMessengerService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.get('/userMessengers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userMessengerService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve a single Customer by Id
    app.get('/userMessengers/:userMessengerId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userMessengerService.get(req.params.userMessengerId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Update a Customer with Id
    app.post('/userMessengers/update', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userMessengerService.update(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userMessengers/quickUpdate', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userMessengerService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete a Customer with Id
    app.delete('/userMessengers/:userMessengerId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userMessengerService.delete(req.params.userMessengerId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete all userMessengers
    app.delete('/userMessengers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userMessengerService.deleteAll().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


//    New
    app.post('/userMessengers/reactMessenger', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userMessengerService.insertUserMessenger(req.session.user, req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userMessengers/deleteReact', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userMessengerService.deleteUserMessenger(req.body.userMessengerId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

}
