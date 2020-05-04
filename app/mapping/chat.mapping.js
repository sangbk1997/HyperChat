const chatModel = require('../model/chat.model');
module.exports = (sequelize, Sequelize) => {
    const Chat = sequelize.define('chats', {
        [chatModel.id.title]: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [chatModel.avatar_url.title]: {
            type: Sequelize.STRING
        },
        [chatModel.title.title]: {
            type: Sequelize.STRING
        },
        [chatModel.slogan.title]: {
            type: Sequelize.STRING
        },
        [chatModel.description.title]: {
            type: Sequelize.STRING
        },
        [chatModel.role.title]: {
            type: Sequelize.STRING,
            defaultValue: 'CHAT'
        },
        [chatModel.status.title]: {
            type: Sequelize.BOOLEAN
        },
        [chatModel.createdBy.title]: {
            type: Sequelize.STRING
        },
        [chatModel.type.title]: {
            type: Sequelize.STRING
        },
        [chatModel.style.title]: {
            type: Sequelize.STRING
        },
        [chatModel.lastMessageDate.title]: {
            type: Sequelize.DATE
        }

    });
    return Chat;
}
