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
const Chat = db.chat;
const UserMessenger = db.userMessenger;
const Op = Sequelize.Op;
var $bean = require('../common/utils/hyd-bean-utils');
const userStatic = require('../common/obj/objStatic/userStatic');
var commonStatic = require('../common/obj/objStatic/commonStatic');
const baseDao = require('../dao/base.dao');
const userDao = require('../dao/user.dao');
const chatDao = require('../dao/chat.dao');
const userChatDao = require('../dao/userChat.dao');
const messengerDao = require('../dao/messenger.dao');
const redisService = require('./redis.service');
const listModelType = require('../common/obj/modelType/listModelType');
let useragent = require('useragent');
let jwt = require('jsonwebtoken');
let jwt_secret = require('../common/config/env').JWT_SECRET;
let middleware = require('../common/middleware/jwt-authentication');
var MobileDetect = require('mobile-detect')
var HyperError = require("../common/obj/hyper-error/hyper-error")

var userService = {
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
                    let token = jwt.sign({
                        user: user
                    }, jwt_secret, {
                        ignoreExpiration: true
                    })

                    // return the JWT token for the future API calls

                    result = {
                        success: true,
                        message: 'Xác thực thành công',
                        token: token
                    }
                    res.setHeader('Authorization', 'Bearer ' + token);
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

    // async mobileLogin(req, res) {
    //     let result = {};
    //     if ($bean.isNotNil(email)) {
    //         let user = await userDao.findByEmail(email);
    //         if ($bean.isNotEmpty(user) && bcrypt.compareSync(password, user.password)) {
    //             req.session.user = user.dataValues;
    //             result = user;
    //         }
    //     } else {
    //         throw new Error('error.user.null');
    //     }
    //     return result;
    // },

    async mobileLogin(req, res) {
        let result = {};
        if ($bean.isNotEmpty(req.body)) {
            let email = req.body.email;
            let password = req.body.password;
            let user = await userDao.findByEmail(email);
            if ($bean.isNotEmpty(user) && bcrypt.compareSync(password, user.password)) {
                // req.session.user = user.dataValues;
                // console.log('Success login mobile');
                // console.log(req.session);
                // result = user;

                let token = jwt.sign({
                    userId: user.id
                }, jwt_secret)

                // return the JWT token for the future API calls

                result = {
                    success: true,
                    message: 'Xác thực thành công',
                    user: user,
                    token: token
                }

                // baseDao.quickUpdate({
                //     id: user.id,
                //     statusLogin: userStatic.STATUS_LOGIN
                // }, listModelType.modelTypeUser).then(function (user) {
                // }).catch(function (err) {
                //     console.log(err);
                // })
            } else {
                throw new HyperError("INVALID", 400, "Sai tài khoản hoặc mật khẩu")
            }
        } else {
            throw new HyperError("INVALID", 400, "Sai tài khoản hoặc mật khẩu")
        }
        return result;
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
                    var agent = useragent.parse(req.headers['user-agent']);
                    console.log('Agent');
                    console.log(agent);
                    console.log(agent.toVersion()); // '15.0.874'
                    console.log(agent.toJSON());
                    console.log('OS')
                    console.log(agent.os.toString());
                    console.log(agent.os.toVersion());
                    console.log(agent.os.toJSON());
                    console.log('Device');
                    console.log(agent.device.toString());
                    console.log(agent.device.toVersion());
                    console.log(agent.device.toJSON());
                    var userObj = {};
                    for (let key in listModelType.modelTypeUser.mapObj) {
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

    async mobileSignUp(req, res) {
        let result = {};
        if ($bean.isNotEmpty(req.body.email)) {
            let foundUser = await userDao.findByEmail(req.body.email);
            if ($bean.isNotEmpty(foundUser)) {
                throw new HyperError("USER_EXISTED", 400, "Tài khoản đã tồn tại trong hệ thống !")
            } else {
                var agent = useragent.parse(req.headers['user-agent']);
                // console.log('Agent');
                // console.log(req.headers['user-agent']);
                // console.log(req);
                // var md = new MobileDetect(req.headers['user-agent']);
                // console.log(md.mobile());          // 'Sony'
                // console.log(md.phone());           // 'Sony'
                // console.log(md.tablet());          // null
                // console.log(md.userAgent());       // 'Safari'
                // console.log(md.os());              // 'AndroidOS'
                // console.log(md.is('iPhone'));      // false
                // console.log(md.is('bot'));         // false
                // console.log(md.version('Webkit'));         // 534.3
                // console.log(md.versionStr('Build'));       // '4.1.A.0.562'
                // console.log(md.match('playstation|xbox')); // false
                var userObj = {};
                for (let key in listModelType.modelTypeUser.mapObj) {
                    userObj[listModelType.modelTypeUser.mapObj[key].title] = req.body[key];
                }
                userObj['isadmin'] = userStatic.IS_NOT_ADMIN;
                userObj['status'] = userStatic.STATUS_ACTIVE;
                userObj['statuslogin'] = userStatic.STATUS_LOGOUT;
                userObj['fullname'] = userObj['firstname'] + ' ' + userObj['lastname'];
                userObj['username'] = userObj['username'] || userObj['fullname'];
                result = await baseDao.insert(userObj, listModelType.modelTypeUser);
            }
        } else {
            throw new HyperError("NOT_FILL_INPUT", 400, "Nhập đầy đủ thông tin yêu cầu !");
            // result = {
            //     success: false,
            //     message: 'Thông tin đăng ký chưa phù hợp'
            // };
        }
        return result;
    },

    async mobileLogout(req, res) {
        let user = await baseDao.quickUpdate({
            id: req.session.user.id,
            statuslogin: userStatic.STATUS_LOGOUT,
            lastlogon: new Date()
        }, listModelType.modelTypeUser);
        return user;
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

    setUpRequest(triggerIndentifier, recieverIndentifier, chatName) {
        commonStatic.requestProperties.triggerIdentifier = triggerIndentifier;
        commonStatic.requestProperties.reciverIdentifier = recieverIndentifier;
        commonStatic.requestProperties.chatName = chatName
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

    async searchUsers(userLogin, value) {
        var result = await userDao.searchUser(userLogin, value);
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

    async suggestPeople(userLoginId, offset) {
        return userDao.suggestPeople(userLoginId, offset);
    },

    async suggestFriends(userLoginId) {
        let result = [];
        let users = await userService.list();
        if ($bean.isNotEmpty(users)) {
            let promiseAll = [];
            for (let i = 0; i < users.length; i++) {
                if (users[i].id != userLoginId) {
                    let getLinkWithUser = userChatDao.getLinkWithUser(users[i].id, userLoginId);
                    promiseAll.push(getLinkWithUser);
                }
            }
            let linkUserFriends = await Promise.all(promiseAll);
            if ($bean.isNotEmpty(linkUserFriends)) {
                let userIds = [];
                for (let i = 0; i < linkUserFriends.length; i++) {
                    if ($bean.isNotEmpty(linkUserFriends[i])) {
                        userIds.push(linkUserFriends[i][0]['userId']);
                    }
                }
                console.log("List UserIds");
                console.log(userIds);
                result = userDao.findListUsers(userIds);
            }
        }
        return result;
    },

    async suggestPeopleByChat(chatId, number, offset) {
        return userDao.suggestPeopleByChat(chatId, number, offset);
    },

    //
    // getMyChats(number, offset) {
    //     if ($bean.isNumber(number) && $bean.isNumber(offset)) {
    //         return User.findOne({
    //                 include: {
    //                     model: Chat,
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
    //                     model: Chat,
    //                     order: [{'title': 'ASC'}]
    //                 },
    //                 where: {id: VGlobal['userLogin'].id}
    //             }
    //         )
    //     }
    // },

    getMyChats(userId, number, offset) {
        return User.findOne({
            include: [{
                model: Chat,
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

    async subcribeChat(userId, chatId) {
        let userChat = await userChatDao.findUserChat(userId, chatId);
        if ($bean.isNotEmpty(userChat)) {
            let updateUserChat = {
                statu
            }
        }
    },

    async unSubcribeChat(userId, chatId) {

    },


    enableUser(userId) {

    },


    // messagesByChat(chatId, number, offset) {
    //     if ($bean.isNumber(number) && $bean.isNumber(offset)) {
    //         return User.findOne({
    //                 include: {
    //                     model: Chat,
    //                     where: {id: chatId},
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

    listMyUser(number, offset, userLogin) {
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

    async searchChatsAndUsers(value, number, offset) {
        let searchUsers = await userService.searchUsers(value, number, offset);
        let searchChat = await chatDao.searchByUser()
    },

    // sendMesssage(userId, messenger) {
    //     //    Gửi message realtime lên kênh
    //
    //     //    Lưu thông tin vào database
    //     return messengerService.insertMessage(userId, messenger);
    // }

    async checkLoadMessengers(userId, chatId) {
        let result = {};
        let linkUserChat = await userChatDao.findUserChat(userId, chatId);
        if ($bean.isNotEmpty(linkUserChat)) {
            let countMessengersByChat = await messengerDao.countByChat(chatId);
            result = {
                position: linkUserChat.position,
                countMessengers: countMessengersByChat
            }
        }
        return result;
    }
}

module.exports = userService;
// Chú thích biến
// attributes: mảng các thuộc tính
