const userMessengerModel = require('../model/userMessenger.model');
module.exports = (sequelize, Sequelize) => {
    const UserMessengers = sequelize.define('userMessengers', {
        [userMessengerModel.id.title]: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [userMessengerModel.userId.title]: {
            type: Sequelize.STRING
        },
        [userMessengerModel.channelId.title]: {
            type: Sequelize.STRING
        },
        [userMessengerModel.messengerId.title]: {
            type: Sequelize.STRING
        },
        [userMessengerModel.action.title]: {
            type: Sequelize.STRING
        },
        [userMessengerModel.role.title]: {
            type: Sequelize.STRING,
            defaultValue: 'USER_MESSENGER'
        },
        [userMessengerModel.emoji.title]: {
            type: Sequelize.STRING
        },
        [userMessengerModel.readDate.title]: {
            type: Sequelize.DATE
        },
        [userMessengerModel.reactDate.title]: {
            type: Sequelize.DATE
        }
    });

    return UserMessengers;
}
