const axios = require('axios');
const hostPushStream = 'http://172.20.30.107';
const userChannelDao = require('../dao/userChannel.dao');
var $bean = require('../common/utils/hyd-bean-utils');

var socket = {
    subChannel(userId, channelId) {
        return userChannelDao.findUserChannel(userId, channelId);
    },

    pubToChannel(object) {
        console.log('Pub to Channel');
        var url = hostPushStream + '/pub?id=' + object['channelId'];
        console.log('Pub url ' + url);
        return axios.post(url, $bean.encodeObject(object));
    }
}

module.exports = socket;
