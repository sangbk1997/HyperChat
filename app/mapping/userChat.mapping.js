const userChatModel = require('../model/userChat.model');
module.exports = (sequelize, Sequelize) => {
    const UserChat = sequelize.define('userChats', {
        [userChatModel.id.title]: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [userChatModel.userId.title]: {
            type: Sequelize.STRING
        },
        [userChatModel.chatId.title]: {
            type: Sequelize.STRING
        },
        [userChatModel.triggerId.title]: {
            type: Sequelize.STRING
        },
        [userChatModel.isAdmin.title]: {
            type: Sequelize.BOOLEAN
        },
        [userChatModel.triggerId.title]: {
            type: Sequelize.STRING
        },
        [userChatModel.triggerMessage.title]: {
            type: Sequelize.STRING
        },
        [userChatModel.recieverMessage.title]: {
            type: Sequelize.STRING
        },
        [userChatModel.action.title]: {
            type: Sequelize.STRING
        },
        [userChatModel.role.title]: {
            type: Sequelize.STRING,
            defaultValue: 'USER_CHAt'
        },
        [userChatModel.typeChat.title]: {
            type: Sequelize.STRING
        },
        [userChatModel.position.title]: {
            type: Sequelize.INTEGER
        },
        [userChatModel.lastMessengerId.title]: {
            type: Sequelize.STRING
        },
        [userChatModel.notification.title]: {
            type: Sequelize.BOOLEAN
        }
    });

    return UserChat;
}
