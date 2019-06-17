const db = require('../common/config/db.config');
const messengerService = require('../service/messenger.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.post('/messengers', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.insert(req.body).then(function (data) {
            res.json(data);
        })
    });

    app.get('/messengers', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.list().then(function (data) {
            res.json(data);
        })
    });

    // Retrieve a single Customer by Id
    app.get('/messengers/:messengerId', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.get(req.params.messengerId).then(function (data) {
            res.json(data);
        })
    });

    // Update a Customer with Id
    app.post('/messengers/update', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.updateMessage(req.session.user, req.body, false).then(function (data) {
            res.json(data);
        })
    });

    app.post('/messengers/disable', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.doUpdate(req.body).then(function (data) {
            res.json(data);
        })
    });

    app.post('/messengers/quickUpdate', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        })
    });

    // Delete a Customer with Id
    app.delete('/messengers/:messengerId', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.delete(req.params.messengerId).then(function (data) {
            res.json(data);
        })
    });

    // Delete all messengers
    app.delete('/messengers', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.deleteAll().then(function (data) {
            res.json(data);
        })
    });


    app.post('/messengers/listByName', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.listAndOrder([['createdBy', 'ASC']], req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    app.post('/messengers/searchAll', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        let affectAttributes = req.body['affectAttributes'];
        if ($bean.isNil(affectAttributes)) {
            affectAttributes = ['message'];
        }
        messengerService.searchMessengers(req.body.value, affectAttributes, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    app.post('/messengers/insert', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.insertMessage(req.session.user, req.body).then(function (data) {
            res.json(data);
        })
    })

    app.post('/messengers/delete', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.doDelete(req.body.messengerId).then(function (data) {
            res.json(data);
        })
    })

    app.post('/messengers/byChannel', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.messagesByChannel(req.body.channelId, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    app.post('/messengers/moreMessengers', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.loadMoreMessengers(req.session.user.id, req.body.channelId, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    app.post('/messengers/previousMessengers', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        messengerService.loadPreviousMessengers(req.body.channelId, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

}
