const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const redisConfig = require('../common/config/redis.config');
const userReactPostCommentModel = require('../model/userReactPostComment.model');
const Op = Sequelize.Op;
var $bean = require('../common/utils/hyd-bean-utils');
var commonStatic = require('../common/obj/objStatic/commonStatic');
const baseDao = require('../dao/base.dao');
const userReactPostCommentDao = require('../dao/userReactPostComment.dao');
const redisService = require('./redis.service');
const listModelType = require('../common/obj/modelType/listModelType');
var HyperError = require("../common/obj/hyper-error/hyper-error")

var userReactPostCommentService = {
    insert(userReactPostComment) {
        return baseDao.insert(userReactPostComment, listModelType.modelTypeUserReactPostComment);
    },

    get(userReactPostCommentId) {
        return baseDao.findById(userReactPostCommentId, listModelType.modelTypeUserReactPostComment);
    },

    list() {
        return baseDao.list(listModelType.modelTypeUserReactPostComment);
    },

    update(userReactPostComment) {
        return baseDao.update(userReactPostComment, listModelType.modelTypeUserReactPostComment);
    },

    quickUpdate(userReactPostComment) {
        return baseDao.quickUpdate(userReactPostComment, listModelType.modelTypeUserReactPostComment);
    },

    delete(userReactPostCommentId) {
        return baseDao.delete(userReactPostCommentId, listModelType.modelTypeUserReactPostComment);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeUserReactPostComment);
    },

    getReactsByPost(postId) {
        return userReactPostCommentDao.getReactsByPost(postId);
    },

    insertReactPost(userLogin, react) {
        return userReactPostCommentDao.insertReactPost(userLogin, react);
    },
    removeReactPost(reactId) {
        return userReactPostCommentDao.removeReactPost(reactId);
    },
    insertReactComment(userLogin, react) {
        return userReactPostCommentDao.insertReactComment(userLogin, react);
    },
    removeReactComment(reactId) {
        return userReactPostCommentDao.removeReactComment(reactId);
    },

}

module.exports = userReactPostCommentService;
