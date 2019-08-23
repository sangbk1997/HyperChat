const db = require('../common/config/db.config');
const channelService = require('../service/channel.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.post('/channels', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.insert(req.body).then(function (data) {
            res.json(data);
        })
    });

    app.get('/channels', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.list().then(function (data) {
            res.json(data);
        })
    });

    // Retrieve a single Customer by Id
    app.get('/channels/:channelId', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.get(req.params.channelId).then(function (data) {
            res.json(data);
        })
    });

    // Update a Customer with Id
    // app.post('/channels/update', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     channelService.update(req.body).then(function (data) {
    //         res.json(data);
    //     })
    // });

    // app.post('/channels/quickUpdate', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     channelService.quickUpdate(req.body).then(function (data) {
    //         res.json(data);
    //     })
    // });

    // Delete a Customer with Id
    // app.delete('/channels/:channelId', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     channelService.delete(req.params.channelId).then(function (data) {
    //         res.json(data);
    //     })
    // });

    // Delete all channels
    // app.delete('/channels', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     channelService.deleteAll().then(function (data) {
    //         res.json(data);
    //     })
    // });


    app.post('/channels/listByName', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.listAndOrder([['title', 'ASC']], req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    // app.post('/channels/searchAll', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     let affectAttributes = req.body.affectAttributes;
    //     if ($bean.isNil(affectAttributes)) {
    //         affectAttributes = ['title'];
    //     }
    //     channelService.searchChannels(req.body.value, affectAttributes, req.body.number, req.body.offset).then(function (data) {
    //         res.json(data);
    //     })
    // });

    app.post('/channels/addContact', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.addContact(req.body, req.session.user).then(function (data) {
            res.json(data);
        })
    })

    app.post('/channels/addChat', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.addChat(req.body, req.session.user).then(function (data) {
            res.json(data);
        })
    })

    app.post('/channels/update', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.updateChannel(req.body.channel, req.session.user).then(function (data) {
            res.json(data);
        })
    })

    app.post('/channels/delete', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.deleteChannel(req.body.id, req.session.user).then(function (data) {
            res.json(data);
        })
    })

    app.post('/channels/listByUser', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        console.log('User session');
        console.log(req);
        let userId = req.body.userId ? req.body.userId : req.session.user.id;
        // channelService.listByUser(req.session.user.id, req.body.number).then(function (data) {
        //     res.json(data);
        // })
        channelService.listByUser(userId, req.body.number).then(function (data) {
            res.json(data);
        })
    });

    app.post('/channels/searchChannels', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.searchChannels(req.session.user.id, req.body.number, req.body.value).then(function (data) {
            res.json(data);
        })
    });

    app.post('/channels/statusUserChannel', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        let userId = (req.body.userId) ? (req.body.userId) : req.session.user.id;
        // channelService.statusUserChannel(req.session.user.id, req.body.channelId).then(function (data) {
        //     res.json(data);
        // })
        channelService.statusUserChannel(userId, req.body.channelId).then(function (data) {
            res.json(data);
        })
    });

    app.post('/channels/viewChannel', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.viewChannel(req.session.user.id, req.body.channelId).then(function (data) {
            res.json(data);
        })
    });

    app.post('/channels/infoChannel', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.infoChannel(req.body.channelId).then(function (data) {
            res.json(data);
        })
    });

    app.post('/channels/countSearch', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.countSearchByUser(req.session.user.id, req.body.value).then(function (data) {
            res.json(data);
        })
    });

    app.post('/channels/searchByUser', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.searchByUser(req.session.user.id, req.body.value, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });
}
