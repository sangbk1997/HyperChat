const axios = require('axios');
const hostPushStream = 'http://172.20.30.107';
const userChatDao = require('../dao/userChat.dao');
var $bean = require('../common/utils/hyd-bean-utils');

var socket = {
    subChat(userId, chatId) {
        return userChatDao.findUserChat(userId, chatId);
    },

    pubToChat(object) {
        console.log('Pub to Chat');
        var url = hostPushStream + '/pub?id=' + object['chatId'];
        // var url = hostPushStream + '/pub?id=' + "hyper";
        console.log('Pub url ' + url);
        return axios.post(url, $bean.encodeObject(object));
    }
}

module.exports = socket;
