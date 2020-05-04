const db = require('../common/config/db.config');
const messengerService = require('../service/messenger.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.post('/messengers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.get('/messengers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve a single Customer by Id
    app.get('/messengers/:messengerId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.get(req.params.messengerId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Update a Customer with Id
    app.post('/messengers/update', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.updateMessage(req.session.user, req.body, false).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/messengers/disable', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.doUpdate(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    // Delete a Customer with Id
    app.delete('/messengers/:messengerId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.delete(req.params.messengerId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete all messengers
    app.delete('/messengers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.deleteAll().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    app.post('/messengers/listByName', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.listAndOrder([['createdBy', 'ASC']], req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/messengers/searchAll', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let affectAttributes = req.body['affectAttributes'];
        if ($bean.isNil(affectAttributes)) {
            affectAttributes = ['message'];
        }
        messengerService.searchMessengers(req.body.value, affectAttributes, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    app.post('/messengers/delete', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.doDelete(req.body.messengerId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/messengers/exampleMessengers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.exampleMessengers(req.body.chatId, req.body.oldMessengers, req.body.newMessengers, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/messengers/countByChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.countByChat(req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // New

    app.post('/messengers/insert', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.insertMessage(req.session.user, req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/messengers/quickUpdate', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    app.post('/messengers/suggestByChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.messagesByChat(req.body.chatId, req.body.position).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/messengers/moreMessengers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.loadMoreMessengers(req.body.chatId, req.body.position_more).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/messengers/previousMessengers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.loadPreviousMessengers(req.body.chatId, req.body.position_previous).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/messengers/forwardMessenger', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.forwardMessenger(req.session.user, req.body.chatId, req.body.messengerId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

}
