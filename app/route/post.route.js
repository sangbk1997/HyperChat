const db = require('../common/config/db.config');
const postService = require('../service/post.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {
    app.post('/posts', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.get('/posts', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve a single Customer by Id
    app.get('/posts/:postId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.get(req.params.userId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Update a Customer with Id
    app.post('/posts/update', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.update(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/posts/quickUpdate', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete a Customer with Id
    app.delete('/posts/:postId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.delete(req.params.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete all post
    app.delete('/posts', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.deleteAll().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/posts/newPost', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        console.log("Post");
        console.log(req.body);
        postService.newPost(req.session.user, req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/posts/updatedPost', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.updatedPost(req.session.user, req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/posts/removePost', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.removePost(req.body.postId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/posts/viewPost', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.viewPost(req.body.postId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/posts/suggestPosts', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.suggestPosts().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/posts/morePost', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.morePosts(req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/posts/listPostByUser', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.listPostByUser(req.body.userId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/posts/morePostByUser', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        postService.morePostsByUser(req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


}
