const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const redisConfig = require('../common/config/redis.config');
const redisApp = redisConfig.redisApp;
const redisPushStream = redisConfig.redisPushStream;
const userModel = require('../model/user.model');
const User = db.user;
const UserFriend = db.userFriend;
const Messenger = db.messenger;
const Channel = db.channel;
const UserMessenger = db.userMessenger;
const Op = Sequelize.Op;
var $bean = require('../common/utils/hyd-bean-utils');
const userStatic = require('../common/obj/objStatic/userStatic');
var commonStatic = require('../common/obj/objStatic/commonStatic');
const baseDao = require('../dao/base.dao');
const userDao = require('../dao/user.dao');
const channelDao = require('../dao/channel.dao');
const userChannelDao = require('../dao/userChannel.dao');
const messengerService = require('./messenger.service');
const redisService = require('./redis.service');
const listModelType = require('../common/obj/modelType/listModelType');
var userService = {

//   New Code
    login(req, res) {
        if ($bean.isNotNil(req.body)) {
            let email = req.body.email;
            let password = req.body.password;
            userDao.findByEmail(email).then(function (user) {
                if (!user) {
                    req.session['statusLogin'] = "empty";
                    res.render('login', {param: req.session['statusLogin']});
                } else if (!bcrypt.compareSync(password, user.password)) {
                    req.session['statusLogin'] = 'error';
                    res.render('login', {param: req.session['statusLogin']});
                } else {
                    console.log('Login success ');
                    console.log('Session');
                    req.session.user = user.dataValues;
                    console.log(req.session);
                    // async update status Login user
                    baseDao.quickUpdate({
                        id: req.session.user.id,
                        statusLogin: userStatic.STATUS_LOGIN
                    }, listModelType.modelTypeUser).then(function (user) {
                        console.log('Success update login');
                        console.log(user);
                    }).catch(function (err) {
                        console.log(err);
                    })
                    res.redirect('/home');
                }
            });
        } else {
            throw new Error('error.user.null');
        }
    },

    signUp(req, res) {
        if ($bean.isNotEmpty(req.body)) {
            userDao.findByEmail(req.body.email).then(function (data) {
                if ($bean.isNotEmpty(data)) {
                    console.log('Email exist ?');
                    console.log(data);
                    req.session['statusSignup'] = 'existEmail';
                    res.render('signup', {'param': req.session['statusSignup']});
                } else {
                    var userObj = {};
                    for (key in listModelType.modelTypeUser.mapObj) {
                        userObj[listModelType.modelTypeUser.mapObj[key].title] = req.body[key];
                    }
                    userObj['isadmin'] = userStatic.IS_NOT_ADMIN;
                    userObj['status'] = userStatic.STATUS_ACTIVE;
                    userObj['statuslogin'] = userStatic.STATUS_LOGOUT;
                    userObj['fullname'] = userObj['firstname'] + ' ' + userObj['lastname'];
                    userObj['username'] = userObj['fullname'];
                    baseDao.insert(userObj, listModelType.modelTypeUser).then(function (data) {
                        console.log(data);
                        req.session['statusSignup'] = 'success';
                        console.log('Email' + data.dataValues.email);
                        res.render('signup', {'email': data.dataValues.email, 'param': req.session['statusSignup']});
                    }).catch(err => {
                        console.log(err);
                        req.session['statusSignup'] = 'error'
                        res.render('signup', {'param': req.session['statusSignup']});
                    })
                }
            })
        } else {
            throw new Error('error.user.null');
        }
    },

    logOut(req, res) {
        console.log(req.session);
        baseDao.quickUpdate({
            id: req.session.user.id,
            statuslogin: userStatic.STATUS_LOGOUT,
            lastlogon: new Date()
        }, listModelType.modelTypeUser).then(function () {
            console.log('Success logout user !');
            req.session['statusLogin'] = 'logout';
            res.clearCookie('user_sid');
            req.session.destroy();
            console.log(req.session);
            res.json({message: 'Logout successfully !'});
            casClient.logout();
        }).catch(function (err) {
            console.log(err);
            throw new Error('Error logout user !');
        });
    },

    setUpRequest(triggerIndentifier, recieverIndentifier, channelName) {
        commonStatic.requestProperties.triggerIdentifier = triggerIndentifier;
        commonStatic.requestProperties.reciverIdentifier = recieverIndentifier;
        commonStatic.requestProperties.channelName = channelName
    },

    setUpAuxiliaryMessage(triggerIndentifier, message, dateTime) {
        commonStatic.auxiliaryMessage.triggerIdentifier = triggerIndentifier;
        commonStatic.auxiliaryMessage.message = message;
    },

    // List - Sort

    insert(user) {
        return baseDao.insert(user, listModelType.modelTypeUser);
    },

    get(userId) {
        return baseDao.findById(userId, listModelType.modelTypeUser);
    },

    list() {
        return baseDao.list(listModelType.modelTypeUser);
    },

    update(user) {
        return baseDao.update(user, listModelType.modelTypeUser);
    },

    quickUpdate(user) {
        return baseDao.quickUpdate(user, listModelType.modelTypeUser);
    },

    delete(userId) {
        return baseDao.delete(userId, listModelType.modelTypeUser);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeUser);
    },

    // Đã chỉnh sửa
    async updateProfile(user) {
        let result = {};
        let oldUser = await baseDao.findById(user.id, listModelType.modelTypeUser);
        if ($bean.isNotEmpty(oldUser)) {
            if (user.email != oldUser.email) {
                let userByEmail = await userDao.findByEmail(user.email);
                if ($bean.isNotEmpty(userByEmail)) {
                    throw new Error('email.exist.in.system');
                }
            }
            let result = await baseDao.update(user, listModelType.modelTypeUser);
            return result;
        }
    },

    // Find And Order
    async listAndOrder(orderAttributes, number, offset) {
        var result = await baseDao.listAndOrder(orderAttributes, listModelType.modelTypeUser, number, offset);
        return result;
    },

    // Search by Attributes

    async searchUsers(userLogin, value, number, offset) {
        var result = await userDao.searchUser(userLogin, value, number, offset);
        return result;
    },

    async countSearchUsers(userLogin, value) {
        var result = await userDao.countSearchUsers(userLogin, value);
        return result;
    },

    findByEmail(email) {
        return userDao.findByEmail(email);
    },

    listUserLogin(number, offset) {
        return userDao.listUserLogin(number, offset);
    },

    async suggestPeople(userLogin, number, offset) {
        return userDao.suggestPeople(userLogin, number, offset);
    },

    async suggestPeopleByChannel(channelId, number, offset) {
        return userDao.suggestPeopleByChannel(channelId, number, offset);
    },

    //
    // getMyChannels(number, offset) {
    //     if ($bean.isNumber(number) && $bean.isNumber(offset)) {
    //         return User.findOne({
    //                 include: {
    //                     model: Channel,
    //                     limit: number,
    //                     offset: offset,
    //                     order: [{'title': 'ASC'}]
    //                 },
    //                 where: {id: VGlobal['userLogin'].id}
    //             }
    //         )
    //     } else {
    //         return User.findOne({
    //                 include: {
    //                     model: Channel,
    //                     order: [{'title': 'ASC'}]
    //                 },
    //                 where: {id: VGlobal['userLogin'].id}
    //             }
    //         )
    //     }
    // },

    getMyChannels(userId, number, offset) {
        return User.findOne({
            include: [{
                model: Channel,
                order: [{'title': 'ASC'}]
            }], where: {id: userId}
        })
    },
    listUserDisabled(number, offset) {
        if ($bean.isNumber(number) && $bean.isNumber(offset)) {
            return User.findAll({
                where: {status: userStatic.STATUS_DISABLED},
                limit: number,
                offset: offset,
                order: [{username: 'ASC'}]
            });
        } else {
            return User.findAll({where: {status: userStatic.STATUS_DISABLED}, order: [{username: 'ASC'}]});
        }
    },

    listUserActive(number, offset) {
        if ($bean.isNumber(number) && $bean.isNumber(offset)) {
            return User.findAll({
                where: {status: userStatic.STATUS_ACTIVE},
                limit: number,
                offset: offset,
                order: [{username: 'ASC'}]
            });
        } else {
            return User.findAll({where: {status: userStatic.STATUS_ACTIVE}, order: [{username: 'ASC'}]});
        }
    },

    listUserAdmin(number, offset, userLogin) {
        if ($bean.isNotEmpty(userLogin) && userLogin.isAdmin == userStatic.IS_ADMIN) {
            if ($bean.isNumber(number) && $bean.isNumber(offset)) {
                return User.findAll({
                    where: {isAdmin: userStatic.IS_ADMIN},
                    limit: number,
                    offset: offset,
                    order: [{username: 'ASC'}]
                });
            } else {
                return User.findAll({where: {isAdmin: userStatic.IS_ADMIN}, order: [{username: 'ASC'}]});
            }
        } else {
            throw new Error("Error you don't have permission ! ");
        }

    },

    userByGender(value, number, offset) {
        if ($bean.isNumber(value)) {
            if ($bean.isNumber(number) && $bean.isNumber(offset)) {
                return User.findAll({
                    where: {gender: value},
                    limit: number,
                    offset: offset,
                    order: [{username: 'ASC'}]
                });
            } else {
                return User.findAll({where: {gender: value}, order: [{username: 'ASC'}]});
            }
        } else {
            throw new Error('Error in filter gender users !');
        }

    },

    countAllUsers() {
        return userDao.countAllUsers();
    },


    blockUser(userId) {

    },

    async subcribeChat(userId, channelId) {
        let userChannel = await userChannelDao.findUserChannel(userId, channelId);
        if ($bean.isNotEmpty(userChannel)) {
            let updateUserChannel = {
                statu
            }
        }
    },

    async unSubcribeChat(userId, channelId) {

    },


    enableUser(userId) {

    },


    // messagesByChannel(channelId, number, offset) {
    //     if ($bean.isNumber(number) && $bean.isNumber(offset)) {
    //         return User.findOne({
    //                 include: {
    //                     model: Channel,
    //                     where: {id: channelId},
    //                     include: {
    //                         model: Messenger,
    //                         limit: number,
    //                         offset: offset
    //                     }
    //                 }
    //             }
    //         );
    //     } else {
    //         throw new Error('Error potential load many message !');
    //     }
    // },

    listMyContact(number, offset, userLogin) {
        return User.findAll({
            include: {
                model: UserFriend,
                where: {[Op.or]: [{userId: userLogin.id}, {friendId: userLogin.id}]}
            },
            where: {
                id: {[Op.or]: ['$UserFriend.userId', '$UserFriend.friendId']}
            }
        })
    },

    async searchChatsAndContacts(value, number, offset) {
        let searchUsers = await userService.searchUsers(value, number, offset);
        let searchChannel = await channelDao.searchByUser()
    }

    // sendMesssage(userId, messenger) {
    //     //    Gửi message realtime lên kênh
    //
    //     //    Lưu thông tin vào database
    //     return messengerService.insertMessage(userId, messenger);
    // }


}

module.exports = userService;


// Chú thích biến
// attributes: mảng các thuộc tính
