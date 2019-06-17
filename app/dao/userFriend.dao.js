const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const UserFriend = db.userFriend;
const Op = Sequelize.Op;
const listModelType = require('../common/obj/modelType/listModelType');
const baseDao = require('./base.dao');
var userFriendStatic = require('../common/obj/objStatic/userFriendStatic');
var $bean = require('../common/utils/hyd-bean-utils');

var userFriendDao = {


}

module.exports = userFriendDao;


// Chú thích biến
// attributes: mảng các thuộc tính
