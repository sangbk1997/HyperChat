const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const Op = Sequelize.Op;
var User = db.user;
const userFriendModel = require('../model/userFriend.model');
var baseService = require('./redis.service');
var chatService = require('./chat.service');
var UserFriend = db.userFriend;
const baseDao = require('../dao/base.dao');
const listModelType = require('../common/obj/modelType/listModelType');
var userFriendService = {
    // findUserFriend(userId, friendId){
    //     return UserFriend.findOne({
    //         where: {[Op.and]: [{userId: {[Op.or]: [userId, friendId]}}, {friendId: {[Op.or]: [userId, friendId]}}]}
    //     });
    // },
    //
    // deleteUserFriend(userId, friendId){
    //     return UserFriend.destroy({
    //         where: {[Op.and]: [{userId: {[Op.or]: [userId, friendId]}}, {friendId: {[Op.or]: [userId, friendId]}}]}
    //     });
    // },
    //
    // findFriends(userId, number, offset){
    //     if($bean.isNumber(number) && $bean.isNumber(offset)){
    //         return UserFriend.findAll({inclue: {model: User}, limit: number, offset: offset, order: ['username']});
    //     }else{
    //         return UserFriend.findAll({inclue: {model: User}, order: ['username']});
    //     }
    // }

    insert(userFriend) {
        return baseDao.insert(userFriend, listModelType.modelTypeUserFriend);
    },

    get(userFriendId) {
        return baseDao.findById(userFriendId, listModelType.modelTypeUserFriend);
    },

    list() {
        return baseDao.list(listModelType.modelTypeUserFriend);
    },

    update(userFriend) {
        return baseDao.update(userFriend, listModelType.modelTypeUserFriend);
    },

    quickUpdate(userFriend) {
        return baseDao.quickUpdate(userFriend, listModelType.modelTypeUserFriend);
    },

    delete(userFriendId) {
        return baseDao.delete(userFriendId, listModelType.modelTypeUserFriend);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeUserFriend);
    },

    blockUser(userId, userLogin) {

    }
}

module.exports = userFriendService;
