const deviceModel = require('../model/device.model');
module.exports = (sequelize, Sequelize) => {
    const Device = sequelize.define('devices', {
        [deviceModel.id.title]: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [deviceModel.userId.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.brand.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.deviceId.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.deviceName.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.manufacturer.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.model.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.osName.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.osVersion.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.tokenLogin.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.tokenFcm.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.sessionCode.title]: {
            type: Sequelize.STRING
        },
        [deviceModel.status.title]: {
            type: Sequelize.STRING
        }

    });
    return Device;
}
