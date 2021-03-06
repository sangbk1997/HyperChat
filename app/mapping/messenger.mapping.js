const messengerModel = require('../model/messenger.model');
module.exports = (sequelize, Sequelize) => {
    const Messenger = sequelize.define('messengers', {
        [messengerModel.id.title]: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [messengerModel.userId.title]: {
            type: Sequelize.STRING
        },
        [messengerModel.chatId.title]: {
            type: Sequelize.STRING
        },
        [messengerModel.refId.title]: {
            type: Sequelize.STRING
        },
        [messengerModel.title.title]: {
            type: Sequelize.STRING
        },
        [messengerModel.message.title]: {
            type: Sequelize.TEXT
        },
        [messengerModel.role.title]: {
            type: Sequelize.STRING,
            defaultValue: 'MESSENGER'
        },
        [messengerModel.type.title]: {
            type: Sequelize.STRING
        },
        [messengerModel.fileSize.title]: {
            type: Sequelize.INTEGER
        },
        [messengerModel.contentType.title]: {
            type: Sequelize.STRING
        },
        [messengerModel.fileExtension.title]: {
            type: Sequelize.STRING
        },
        [messengerModel.path.title]: {
            type: Sequelize.STRING
        },
        [messengerModel.type.title]: {
            type: Sequelize.STRING
        },
        [messengerModel.status.title]: {
            type: Sequelize.STRING
        },
        [messengerModel.typeRole.title]: {
            type: Sequelize.STRING
        },
        [messengerModel.modifiedDate.title]: {
            type: Sequelize.DATE
        }
    });

    return Messenger;
}
