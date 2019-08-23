const userChannelModel = require('../model/userChannel.model');
module.exports = (sequelize, Sequelize) => {
    const UserChannel = sequelize.define('userChannels', {
        [userChannelModel.id.title]: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [userChannelModel.userId.title]: {
            type: Sequelize.STRING
        },
        [userChannelModel.channelId.title]: {
            type: Sequelize.STRING
        },
        [userChannelModel.triggerId.title]: {
            type: Sequelize.STRING
        },
        [userChannelModel.isAdmin.title]: {
            type: Sequelize.BOOLEAN
        },
        [userChannelModel.triggerId.title]: {
            type: Sequelize.STRING
        },
        [userChannelModel.triggerMessage.title]: {
            type: Sequelize.STRING
        },
        [userChannelModel.recieverMessage.title]: {
            type: Sequelize.STRING
        },
        [userChannelModel.action.title]: {
            type: Sequelize.STRING
        },
        [userChannelModel.role.title]: {
            type: Sequelize.STRING,
            defaultValue: 'USER_CHANNEL'
        },
        [userChannelModel.typeChat.title]: {
            type: Sequelize.STRING
        },
        [userChannelModel.position.title]: {
            type: Sequelize.INTEGER
        },
        [userChannelModel.lastMessengerId.title]: {
            type: Sequelize.STRING
        },
        [userChannelModel.notification.title]: {
            type: Sequelize.BOOLEAN
        }
    });

    return UserChannel;
}
