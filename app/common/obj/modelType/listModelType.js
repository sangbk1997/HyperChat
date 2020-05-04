const db = require('../../../common/config/db.config');
const userModel = require('../../../model/user.model');
const messengerModel = require('../../../model/messenger.model');
const chatModel = require('../../../model/chat.model');
const emojiModel = require('../../../model/emoji.model');
const deviceModel = require('../../../model/device.model');
const userMessengerModel = require('../../../model/userMessenger.model');
const userChatModel = require('../../../model/userChat.model');
const userFriendModel = require('../../../model/userFriend.model');
const postModel = require('../../../model/post.model');
const commentModel = require('../../../model/comment.model');
const userReactPostCommentModel = require('../../../model/userReactPostComment.model');
const notificationModel = require('../../../model/notification.model');

var listModelType = {

    modelTypeUser: {
        mapTable: db.user,
        mapObj: userModel
    },
    modelTypeChat: {
        mapTable: db.chat,
        mapObj: chatModel
    },
    modelTypeMessenger: {
        mapTable: db.messenger,
        mapObj: messengerModel
    },
    modelTypeEmoji: {
        mapTable: db.emoji,
        mapObj: emojiModel
    },
    modelTypeDevice: {
        mapTable: db.device,
        mapObj: deviceModel
    },
    modelTypeUserChat: {
        mapTable: db.userChat,
        mapObj: userChatModel
    },
    modelTypeUserMessenger: {
        mapTable: db.userMessenger,
        mapObj: userMessengerModel
    },

    modelTypeUserFriend: {
        mapTable: db.userFriend,
        mapObj: userFriendModel
    },

    modelTypePost: {
        mapTable: db.post,
        mapObj: postModel
    },

    modelTypeComment: {
        mapTable: db.comment,
        mapObj: commentModel
    },

    modelTypeUserReactPostComment: {
        mapTable: db.userReactPostComment,
        mapObj: userReactPostCommentModel
    },

    modelTypeNotification: {
        mapTable: db.notification,
        mapObj: notificationModel
    }
}

module.exports = listModelType;
