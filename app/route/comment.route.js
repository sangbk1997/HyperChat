const db = require('../common/config/db.config');
const commentService = require('../service/comment.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {
    app.post('/comments', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        commentService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.get('/comments', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        commentService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve a single Customer by Id
    app.get('/comments/:commentId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        commentService.get(req.params.userId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Update a Customer with Id
    app.post('/comments/update', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        commentService.update(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/comments/quickUpdate', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        commentService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete a Customer with Id
    app.delete('/comments/:commentId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        commentService.delete(req.params.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/comments/newComment', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        commentService.newComment(req.session.user, req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/comments/updatedComment', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        commentService.updatedComment(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    app.post('/comments/removeComment', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        commentService.removeComment(req.body.commentId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    app.post('/comments/listCommentByPost', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        commentService.listCommentByPost(req.body.postId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    app.post('/comments/listReplyComment', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        commentService.listReplyComment(req.body.commentId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });
}
