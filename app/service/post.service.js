const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const redisConfig = require('../common/config/redis.config');
const postModel = require('../model/post.model');
const Op = Sequelize.Op;
var $bean = require('../common/utils/hyd-bean-utils');
var commonStatic = require('../common/obj/objStatic/commonStatic');
const baseDao = require('../dao/base.dao');
const postDao = require('../dao/post.dao');
const redisService = require('./redis.service');
const listModelType = require('../common/obj/modelType/listModelType');
var HyperError = require("../common/obj/hyper-error/hyper-error")

var postService = {
    insert(post) {
        return baseDao.insert(post, listModelType.modelTypePost);
    },

    get(postId) {
        return baseDao.findById(postId, listModelType.modelTypePost);
    },

    list() {
        return baseDao.list(listModelType.modelTypePost);
    },

    update(post) {
        return baseDao.update(post, listModelType.modelTypePost);
    },

    quickUpdate(post) {
        return baseDao.quickUpdate(post, listModelType.modelTypePost);
    },

    delete(postId) {
        return baseDao.delete(postId, listModelType.modelTypePost);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypePost);
    },

    async newPost(userLogin, post) {
        return postDao.newPost(userLogin, post);
    },

    async updatedPost(userLogin, post) {
        return postDao.updatedPost(userLogin, post);
    },

    async removePost(postId) {
        return postDao.removePost(postId);
    },

    viewPost(postId) {
        return postDao.viewPost(postId);
    },


    suggestPosts() {
        return postDao.suggestPosts();
    },

    morePosts(offset) {
        return postDao.morePosts(offset);
    },


    listPostByUser(userId) {
        return postDao.listPostByUser(userId);
    },

    morePostsByUser(userId, offset) {
        return postDao.morePostsByUser(userId, offset);
    }
}

module.exports = postService;
