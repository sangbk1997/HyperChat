const deviceModel = require('../model/device.model');
module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define('devices', {
        [deviceModel.id.title]: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [deviceModel.username.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.tokenValue.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.cookies.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.createdDate.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.sessionCode.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.token.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.deviceName.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.osName.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.osVersion.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.status.title]: {
            type: Sequelize.STRING
        }

    });
    return Device;
}
