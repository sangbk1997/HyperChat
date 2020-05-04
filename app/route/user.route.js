const db = require('../common/config/db.config');
const userService = require('../service/user.service');
const userChatService = require('../service/userChat.service');
const chatService = require('../service/chat.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.get('/userLogin', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(req.session.user);
    })

    app.post('/users', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.insert(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve all Customer
    app.get('/users', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.list().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Retrieve a single Customer by Id
    app.get('/users/:userId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.get(req.params.userId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Update a Customer with Id
    app.post('/users/update', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.update(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/users/quickUpdate', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete a Customer with Id
    app.delete('/users/:userId', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.delete(req.params.userId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // Delete all Users
    app.delete('/users', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.deleteAll().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/users/updateProfile', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.updateProfile(req.body).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/users/listByName', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.listAndOrder([['username', 'ASC']], req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/users/countSearch', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.countSearchUsers(req.session.user, req.body.value).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    app.post('/users/searchChatAndUser', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.searchChatsAndUsers(req.body.value, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // app.post('/users/friends', function (req, res) {
    //     userFriendService.findFriends(VGlobal['userLogin'].id, req.body.number, req.body.offset).then(function (friends) {
    //         res.json(friends);
    //     })
    // });

    app.post('/users/listUserLogin', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.listUserLogin(req.body.number, req.body.offset).then(function (onlineUsers) {
            res.json(onlineUsers);
        }, error => {
            next(error)
        })
    });

    app.post('/users/suggestedByChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.suggestPeopleByChat(req.body.chatId, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/users/checkLinkUserChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.getLinkUserChat(req.body.userId, req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/users/checkLinkToChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        console.log(req.session);
        userChatService.getLinkUserChat(req.session.user.id, req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/users/checkLinkToUser', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.checkLinkToContact(req.session.user.id, req.body.userId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/users/requestToChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.sendRequestToChat(req.body.chatId, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/users/acceptRequest', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.acceptRequest(req.body.requestId, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/users/rejectRequest', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.rejectRequest(req.body.requestId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/users/deleteRequest', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.deleteRequest(req.body.requestId, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/users/listSentRequest', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.listSentRequest(req.session.user.id, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/users/listIncomeRequest', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.listIncomeRequest(req.session.user.id, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    // app.post('/users/blockUser', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     userChatService.blockUser(req.body.userId, req.session.user).then(function (data) {
    //         res.json(data);
    //     })
    // });

    app.post('/users/turnOnNotification', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.turnOnNotification(req.body.chatId, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/users/turnOffNotification', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.turnOffNotification(req.body.chatId, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });


    app.post('/users/countAll', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.countAllUsers().then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/users/checkLoadMessengers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.checkLoadMessengers(req.session.user.id, req.body.chatId).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

//    New
    app.post('/users/searchUsers', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.searchUsers(req.session.user, req.body.value).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/users/addUsersToChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.addUsersToChat(req.body.userIds, req.body.chatId, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    })

    app.post('/users/leaveChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.leaveChat(req.body.chatId, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/users/deleteChat', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        chatService.doDeleteChat(req.body.chatId, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

    app.post('/users/removeUser', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userChatService.removeUser(req.body.userId, req.body.chatId, req.session.user).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

//    New
    app.post('/users/suggests', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.suggestPeople(req.session.user.id, req.body.offset).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });



    app.post('/users/suggestFriends', function (req, res, next) {
        res.setHeader('Content-Type', 'application/json');
        userService.suggestFriends(req.session.user.id).then(function (data) {
            res.json(data);
        }, error => {
            next(error)
        })
    });

}
