const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const Op = Sequelize.Op;
var User = db.user;
const emojiModel = require('../model/emoji.model');
var baseService = require('./redis.service');
var chatService = require('./chat.service');
var emoji = db.emoji;
const baseDao = require('../dao/base.dao');
const listModelType = require('../common/obj/modelType/listModelType');
var emojiService = {

    insert(emoji) {
        return baseDao.insert(emoji, listModelType.modelTypeEmoji);
    },

    get(emojiId) {
        return baseDao.findById(emojiId, listModelType.modelTypeEmoji);
    },

    list() {
        return baseDao.list(listModelType.modelTypeEmoji);
    },

    update(emoji) {
        return baseDao.update(emoji, listModelType.modelTypeEmoji);
    },

    quickUpdate(emoji) {
        return baseDao.quickUpdate(emoji, listModelType.modelTypeEmoji);
    },

    delete(emojiId) {
        return baseDao.delete(emojiId, listModelType.modelTypeEmoji);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeEmoji);
    }
}

module.exports = emojiService;
