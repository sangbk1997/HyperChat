const db = require('../common/config/db.config');
const chatService = require('../service/chat.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.post('/chats', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    });

    app.get('/chats', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    });

    // Retrieve a single Customer by Id
    app.get('/chats/:chatId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.get(req.params.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    });

    // Update a Customer with Id
    // app.post('/chats/update', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     chatService.update(req.body).then(function (data) {
    //         res.json(data);
    //     })
    // });

    // app.post('/chats/quickUpdate', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     chatService.quickUpdate(req.body).then(function (data) {
    //         res.json(data);
    //     })
    // });

    // Delete a Customer with Id
    // app.delete('/chats/:chatId', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     chatService.delete(req.params.chatId).then(function (data) {
    //         res.json(data);
    //     })
    // });

    // Delete all chats
    // app.delete('/chats', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     chatService.deleteAll().then(function (data) {
    //         res.json(data);
    //     })
    // });


    app.post('/chats/listByName', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.listAndOrder([['title', 'ASC']], req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    });

    // app.post('/chats/searchAll', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     let affectAttributes = req.body.affectAttributes;
    //     if ($bean.isNil(affectAttributes)) {
    //         affectAttributes = ['title'];
    //     }
    //     chatService.searchChats(req.body.value, affectAttributes, req.body.number, req.body.offset).then(function (data) {
    //         res.json(data);
    //     })
    // });

    app.post('/chats/update', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.updateChat(req.body.chat, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    })

    app.post('/chats/delete', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.deleteChat(req.body.id, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })


    app.post('/subChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        socketService.subChat(req.session.user.id, req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    });

    app.post('/chats/searchChats', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.searchChats(req.session.user.id, req.body.value).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/chats/statusUserChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        let userId = (req.body.userId) ? (req.body.userId) : req.session.user.id;
        // chatService.statusUserChat(req.session.user.id, req.body.chatId).then(function (data) {
        //     res.json(data);
        // })
        chatService.statusUserChat(userId, req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/chats/viewChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.viewChat(req.session.user.id, req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    app.post('/chats/countSearch', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.countSearchByUser(req.session.user.id, req.body.value).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

//    New
    app.post('/chats/suggests', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.listByUser(req.session.user.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/chats/shortInfoChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.shortInfoChat(req.session.user.id, req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/chats/loadMoreChats', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.loadMoreChats(req.session.user.id, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    app.post('/chats/addUser', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.addUser(req.body, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    })

    app.post('/chats/addChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.addChat(req.body, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    })

    app.post('/chats/removeChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.removeChat(req.session.user.id, req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    })

    app.post('/chats/addMembers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.addMembers(req.session.userId, req.body.chatId, req.body.members).then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    })

    app.post('/chats/removeMember', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.removeMember(req.session.user.id, req.body.chatId, req.body.memberId).then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    })

    app.post('/chats/leaveChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.leaveChat(req.session.user.id, req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error);
        })
    })


    app.post("/chats/requestToUser", function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.requestToUser(req.session.user.id, req.body.userId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })


    app.post('/chats/infoChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.infoChat(req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/chats/galleries', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.galleries(req.body.chatId, req.body.type, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/chats/initGalleries', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.initGalleries(req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/chats/searchChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.searchChats(req.session.user.id, req.body.value).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

}
