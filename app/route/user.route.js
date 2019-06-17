const db = require('../common/config/db.config');
const userService = require('../service/user.service');
const userChannelService = require('../service/userChannel.service');
const channelService = require('../service/channel.service');
var $bean = require('../common/utils/hyd-bean-utils');

module.exports = function (app) {

    app.post('/users', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.insert(req.body).then(function (data) {
            res.json(data);
        })
    });

    // Retrieve all Customer
    app.get('/users', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.list().then(function (data) {
            res.json(data);
        })
    });

    // Retrieve a single Customer by Id
    app.get('/users/:userId', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.get(req.params.userId).then(function (data) {
            res.json(data);
        })
    });

    // Update a Customer with Id
    app.post('/users/update', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.update(req.body).then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/quickUpdate', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.quickUpdate(req.body).then(function (data) {
            res.json(data);
        })
    });

    // Delete a Customer with Id
    app.delete('/users/:userId', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.delete(req.params.userId).then(function (data) {
            res.json(data);
        })
    });

    // Delete all Users
    app.delete('/users', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.deleteAll().then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/updateProfile', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.updateProfile(req.body).then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/listByName', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.listAndOrder([['username', 'ASC']], req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/searchAll', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.searchUsers(req.session.user, req.body.value, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/countSearch', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.countSearchUsers(req.session.user, req.body.value).then(function (data) {
            res.json(data);
        })
    });


    app.post('/users/searchChatAndContact', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.searchChatsAndContacts(req.body.value, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    // app.post('/users/friends', function (req, res) {
    //     userFriendService.findFriends(VGlobal['userLogin'].id, req.body.number, req.body.offset).then(function (friends) {
    //         res.json(friends);
    //     })
    // });

    app.post('/users/listUserLogin', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.listUserLogin(req.body.number, req.body.offset).then(function (onlineUsers) {
            res.json(onlineUsers);
        })
    });

    app.post('/users/suggested', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.suggestPeople(req.session.user, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/suggestedByChannel', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.suggestPeopleByChannel(req.body.channelId, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/checkLinkUserChannel', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.getLinkUserChannel(req.body.userId, req.body.channelId).then(function (data) {
            res.json(data);
        })
    })

    app.post('/users/checkLinkToChannel', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        console.log(req.session);
        userChannelService.getLinkUserChannel(req.session.user.id, req.body.channelId).then(function (data) {
            res.json(data);
        })
    })

    app.post('/users/checkLinkToContact', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.checkLinkToContact(req.session.user.id, req.body.contactId).then(function (data) {
            res.json(data);
        })
    })

    app.post('/users/requestToChat', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.sendRequestToChat(req.body.channelId, req.session.user).then(function (data) {
            res.json(data);
        })
    })

    app.post('/users/addUsersToChat', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.addUsersToChat(req.body.userIds, req.body.channelId, req.session.user).then(function (data) {
            res.json(data);
        })
    })

    app.post('/users/acceptRequest', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.acceptRequest(req.body.requestId, req.session.user).then(function (data) {
            res.json(data);
        })
    })

    app.post('/users/rejectRequest', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.rejectRequest(req.body.requestId).then(function (data) {
            res.json(data);
        })
    })

    app.post('/users/deleteRequest', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.deleteRequest(req.body.requestId, req.session.user).then(function (data) {
            res.json(data);
        })
    })

    app.post('/users/listSentRequest', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.listSentRequest(req.session.user.id, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/listIncomeRequest', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.listIncomeRequest(req.session.user.id, req.body.number, req.body.offset).then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/leaveChannel', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.leaveChannel(req.body.channelId, req.session.user).then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/deleteChannel', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        channelService.doDeleteChannel(req.body.channelId, req.session.user).then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/removeUser', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.removeUser(req.body.userId, req.body.channelId, req.session.user).then(function (data) {
            res.json(data);
        })
    });


    // app.post('/users/blockContact', function (req, res) {
    //     res.setHeader('Content-Type', 'application/json');
    //     userChannelService.blockUser(req.body.userId, req.session.user).then(function (data) {
    //         res.json(data);
    //     })
    // });

    app.post('/users/turnOnNotification', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.turnOnNotification(req.body.channelId, req.session.user).then(function (data) {
            res.json(data);
        })
    });

    app.post('/users/turnOffNotification', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userChannelService.turnOffNotification(req.body.channelId, req.session.user).then(function (data) {
            res.json(data);
        })
    });


    app.post('/users/countAll', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        userService.countAllUsers().then(function (data) {
            res.json(data);
        })
    })

}
