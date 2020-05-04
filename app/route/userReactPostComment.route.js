const db = require('../common/config/db.config');
const userReactPostCommentService = require('../service/userReactPostComment.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {
    app.post('/userReactPostComments', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.get('/userReactPostComments', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve a single Customer by Id
    app.get('/userReactPostComments/:userReactPostCommentId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.get(req.params.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Update a Customer with Id
    app.post('/userReactPostComments/update', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.update(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userReactPostComments/quickUpdate', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.delete('/userReactPostComments/:userReactPostCommentId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.delete(req.params.userId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.delete('/userReactPostComments', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.deleteAll().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userReactPostComments/byPost', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.getReactsByPost(req.body.postId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userReactPostComments/insertReactPost', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.insertReactPost(req.session.user, req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userReactPostComments/insertReactComment', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.insertReactComment(req.session.user, req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userReactPostComments/removeReactPost', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.removeReactPost(req.body.reactId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/userReactPostComments/removeReactComment', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userReactPostCommentService.removeReactComment(req.body.reactId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

}
