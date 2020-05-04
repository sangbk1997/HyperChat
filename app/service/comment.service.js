const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const redisConfig = require('../common/config/redis.config');
const commentModel = require('../model/comment.model');
const Op = Sequelize.Op;
var $bean = require('../common/utils/hyd-bean-utils');
var commonStatic = require('../common/obj/objStatic/commonStatic');
const baseDao = require('../dao/base.dao');
const commentDao = require('../dao/comment.dao');
const redisService = require('./redis.service');
const listModelType = require('../common/obj/modelType/listModelType');
var HyperError = require("../common/obj/hyper-error/hyper-error")

var commentService = {
    insert(comment) {
        return baseDao.insert(comment, listModelType.modelTypeComment);
    },

    get(commentId) {
        return baseDao.findById(commentId, listModelType.modelTypeComment);
    },

    list() {
        return baseDao.list(listModelType.modelTypeComment);
    },

    update(comment) {
        return baseDao.update(comment, listModelType.modelTypeComment);
    },

    quickUpdate(comment) {
        return baseDao.quickUpdate(comment, listModelType.modelTypeComment);
    },

    delete(commentId) {
        return baseDao.delete(commentId, listModelType.modelTypeComment);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeComment);
    },

    newComment(userLogin, comment) {
        return commentDao.newComment(userLogin, comment);
    },

    updatedComment(comment) {
        return commentDao.updatedComment(comment);
    },

    removeComment(commentId) {
        return commentDao.removeComment(commentId);
    },

    listCommentByPost(postId) {
        return commentDao.listCommentByPost(postId);
    },

    listReplyComment(commentId) {
        return commentDao.listReplyComment(commentId);
    }
}

module.exports = commentService;
