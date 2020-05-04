const Sequelize = require('sequelize');
const db = require('../common/config/db.config.js');
const baseDao = require('../dao/base.dao');
const deviceDao = require('../dao/device.dao');
const listModelType = require('../common/obj/modelType/listModelType');

var deviceService = {
    async insert(device) {
        let result = await baseDao.insert(device, listModelType.modelTypeDevice);
        return result;
    },

    get(deviceId) {
        return baseDao.findById(deviceId, listModelType.modelTypeDevice);
    },

    list() {
        return baseDao.list(listModelType.modelTypeDevice);
    },

    update(device) {
        return baseDao.update(device, listModelType.modelTypeDevice);
    },

    quickUpdate(device) {
        return baseDao.quickUpdate(device, listModelType.modelTypeDevice);
    },

    delete(deviceId) {
        return baseDao.delete(deviceId, listModelType.modelTypeDevice);
    },

    deleteAll() {
        return baseDao.deleteAll(listModelType.modelTypeDevice);
    },

    getFcmByUser(userId) {
        return deviceDao.fcmByUser(userId);
    }
}

module.exports = deviceService;
