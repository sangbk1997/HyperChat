const db = require('../common/config/db.config');
const emojiService = require('../service/emoji.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.post('/emojis', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        emojiService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.get('/emojis', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        emojiService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve a single Customer by Id
    app.get('/emojis/:emojiId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        emojiService.get(req.params.emojiId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete a Customer with Id
    app.delete('/emojis/:emojiId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        emojiService.delete(req.params.emojiId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

}
