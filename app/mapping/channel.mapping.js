const channelModel = require('../model/channel.model');
module.exports = (sequelize, Sequelize) => {
    const Channel = sequelize.define('channels', {
        [channelModel.id.title] : {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [channelModel.avatar.title]: {
            type: Sequelize.STRING
        },
        [channelModel.title.title]: {
            type: Sequelize.STRING
        },
        [channelModel.slogan.title]: {
            type: Sequelize.STRING
        },
        [channelModel.description.title]: {
            type: Sequelize.STRING
        },
        [channelModel.role.title]: {
            type: Sequelize.STRING,
            defaultValue: 'CHANNEL'
        },
        [channelModel.status.title]: {
            type: Sequelize.BOOLEAN
        },
        [channelModel.createdBy.title]: {
            type: Sequelize.STRING
        },
        [channelModel.type.title]: {
            type: Sequelize.STRING
        },
        [channelModel.style.title]: {
            type: Sequelize.STRING
        }

    });
    return Channel;
}
