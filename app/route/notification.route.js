const db = require('../common/config/db.config');
const notificationService = require('../service/notification.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {
    app.post('/notifications', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        notificationService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.get('/notifications', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        notificationService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve a single Customer by Id
    app.get('/notifications/:notificationId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        notificationService.get(req.params.userId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Update a Customer with Id
    app.post('/notifications/update', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        notificationService.update(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/notifications/quickUpdate', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        notificationService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete a Customer with Id
    app.delete('/notifications/:notificationId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        notificationService.delete(req.params.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete all notification
    app.delete('/notifications', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        notificationService.deleteAll().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/notifications/numberUnread', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        notificationService.numberUnread(req.session.user.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/notifications/suggest', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        notificationService.suggestNotifications(req.session.user.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/notifications/loadMore', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        notificationService.loadMore(req.session.user.id, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/notifications/readNotifications', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        notificationService.readNotifications(req.body.notificationIds).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

}
