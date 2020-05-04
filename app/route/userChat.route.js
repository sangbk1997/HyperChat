const db = require('../common/config/db.config');
const userChatService = require('../service/userChat.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.post('/userChats', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.get('/userChats', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve a single Customer by Id
    app.get('/userChats/:userChatId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.get(req.params.userChatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Update a Customer with Id
    app.post('/userChats/update', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.update(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete a Customer with Id
    app.delete('/userChats/:userChatId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.delete(req.params.userChatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete all userChats
    app.delete('/userChats', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.deleteAll().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userChats/listByChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.getByChat(req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    app.post('/userChats/countByNotRejected', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.countByUserNotRejected(req.session.user.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userChats/countByNotRejected', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.countByUserNotRejected(req.session.user.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userChats/updateViewMessengers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.updateViewMessengers(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

//     New
    app.post('/userChats/linkByUser', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.getByUser(req.session.user.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userChats/linkUserChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.linkUserChat(req.body.userId, req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userChats/extraInfoUserByChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.extraInfoUserByChat(req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userChats/quickUpdate', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userChats/typingInfo', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.typingInfo(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

}
