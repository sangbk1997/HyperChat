const db = require('../../../common/config/db.config');
const userModel = require('../../../model/user.model');
const messengerModel = require('../../../model/messenger.model');
const channelModel = require('../../../model/channel.model');
const emojiModel = require('../../../model/emoji.model');
const userMessengerModel = require('../../../model/userMessenger.model');
const userChannelModel = require('../../../model/userChannel.model');
const userFriendModel = require('../../../model/userFriend.model');

var listModelType = {

    modelTypeUser: {
        mapTable: db.user,
        mapObj: userModel
    },
    modelTypeChannel: {
        mapTable: db.channel,
        mapObj: channelModel
    },
    modelTypeMessenger: {
        mapTable: db.messenger,
        mapObj: messengerModel
    },
    modelTypeEmoji: {
        mapTable: db.emoji,
        mapObj: emojiModel
    },
    modelTypeUserChannel: {
        mapTable: db.userChannel,
        mapObj: userChannelModel
    },
    modelTypeUserMessenger: {
        mapTable: db.userMessenger,
        mapObj: userMessengerModel
    },

    modelTypeUserFriend: {
        mapTable: db.userFriend,
        mapObj: userFriendModel
    }
}

module.exports = listModelType;
