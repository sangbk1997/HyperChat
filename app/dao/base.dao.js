const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const listModelType = require('../common/obj/modelType/listModelType');
const redisConfig = require('../common/config/redis.config');
const redisApp = redisConfig.redisApp;
const redisPushStream = redisConfig.redisPushStream;
var $bean = require('../common/utils/hyd-bean-utils');
var HyperError = require('../common/obj/hyper-error/hyper-error')
var baseDao = {

    // Crud with DB

    // modelType : Xác định bạn đang làm việc trên bảng (database)

    async insert(value, modelType) {   // value : đối tượng cần thêm mới
        if ($bean.isNotEmpty(value) && $bean.isNotEmpty(modelType)) {
            var objStorage = {};
            let result = {};
            for (key in modelType.mapObj) {
                objStorage[modelType.mapObj[key].title] = value[key];
            }
            if ($bean.isEmpty(objStorage['id'])) {
                objStorage['id'] = $bean.genRandomID(16).toString();
            }
            result = await modelType.mapTable.create(objStorage);
            // let randomKey = $bean.genRandomID(16);
            // let resultSaveToRedis = await redisApp.set(randomKey, $bean.getJson(objStorage));
            // let objFromRedis = await redisApp.get(randomKey);
            // if ($bean.isNotEmpty(objFromRedis)) {
            //     result = await modelType.mapTable.create(objStorage);
            //     if ($bean.isNotEmpty(result)) {
            //         redisApp.del(randomKey, function (err, reply) {
            //             if (!err) {
            //                 if (reply === 1) {
            //                     console.log('Success delete entity from redis');
            //                 } else {
            //                     console.log(key + " does't exists in redis !");
            //                 }
            //             } else {
            //             }
            //         });
            //     }
            // } else {
            // }
            return result;
        } else {
            throw new HyperError("EMPTY_DATA", 400, "Dữ liệu không hợp lệ");
        }
    },

    async list(modelType) {
        let result = await modelType.mapTable.findAll();
        return result;
    },

    async findById(id, modelType) {  // id: id đối tượng
        let result = await modelType.mapTable.findByPk(id);
        return result;
    },

    async findByField(fieldObj, modelType) {  // id: id đối tượng
        let result = {};
        let valueSearch = [];
        for (var key in fieldObj) {
            let object = {};
            object[key] = fieldObj[key];
            valueSearch.push(object);
        }
        if ($bean.isNotEmpty(fieldObj)) {
            result = await modelType.mapTable.findOne({
                where: {[Op.and]: valueSearch},
                limit: 1
            });
        }
        return result;
    },

    async update(newObj, modelType) {  // value: đối tượng update
        let oldObj = await baseDao.findById(newObj['id'], modelType);
        if ($bean.isNotEmpty(oldObj)) {
            var objStorage = {};
            for (key in modelType.mapObj) {
                if ($bean.isNotNil(newObj[key])) {
                    objStorage[modelType.mapObj[key].title] = newObj[key];
                }
            }
            if ($bean.isNotNil(objStorage.id)) {
                delete objStorage.id;
            }
            let affectedRow = await modelType.mapTable.update(objStorage,
                {where: {'id': newObj['id']}}
            );
            if ($bean.isNotNil(affectedRow)) {
                let result = await baseDao.findById(newObj['id'], modelType);
                return result;
            }
        }
    },

    async delete(id, modelType) {
        let deletedObj = await baseDao.findById(id, modelType);
        if ($bean.isNotEmpty(deletedObj)) {
            let affectedRow = await modelType.mapTable.destroy({
                where: {id: id}
            })
            if ($bean.isNotEmpty(affectedRow)) {
                return deletedObj;
            }
        }
    },

    async quickUpdate(newObj, modelType) {  // value: đối tượng {key: value}
        let oldObj = await baseDao.findById(newObj['id'], modelType);
        if ($bean.isNotEmpty(oldObj)) {
            var objStorage = {};
            // Kiem tra doi tuong gui len la cua nguoi dung hay doi tuong duoc database tra ve
            if ($bean.isNotEmpty(newObj['dataValues'])) {
                newObj = newObj['dataValues'];
            }
            for (key in newObj) {
                if ((key in modelType.mapObj)) {
                    objStorage[modelType.mapObj[key].title] = newObj[key];
                }
            }
            if ($bean.isNotNil(objStorage.id)) {
                delete objStorage.id;
            }
            let affectedRow = await modelType.mapTable.update(objStorage,
                {where: {'id': newObj['id']}}
            );
            if ($bean.isNotNil(affectedRow)) {
                let result = await baseDao.findById(newObj['id'], modelType);
                return result;
            }
        }
    },

    async deleteAll(modelType) {
        let affectedRow = await modelType.mapTable.destroy();
        if ($bean.isNotNil(affectedRow)) {
            let result = {'message': 'You have deleted all item !'};
            return result;
        }
    },

    async listAndOrder(orderAttributes, modelType, number, offset) {
        let result = {};
        if ($bean.isNumber(number) && $bean.isNumber(offset)) {
            if ($bean.isNotEmpty(orderAttributes)) {
                result = await modelType.mapTable.findAll({limit: number, offset: offset, order: orderAttributes});
            } else {
                result = await modelType.mapTable.findAll({limit: number, offset: offset});
            }
        } else {
            if ($bean.isNotEmpty(orderAttributes)) {
                result = await modelType.mapTable.findAll({order: orderAttributes});
            } else {
                result = await modelType.mapTable.findAll();
            }
        }
        return result;
    },

    async search(value, affectAttributes, modelType, number, offset) { // value là giá trị cần search
        let result = {};
        let valueSearch = [];
        let orderBy = [];
        if ($bean.isNotEmpty(affectAttributes)) {
            for (let i = 0; i < affectAttributes.length; i++) {
                let object = {};
                object[affectAttributes[i]] = {[Op.substring]: value};
                valueSearch.push(object);
                let objOrder = [affectAttributes[i], 'ASC'];
                orderBy.push(objOrder);
            }
        }
        if ($bean.isNumber(number) && $bean.isNumber(offset)) {
            if ((valueSearch.length > 0) && $bean.isNotEmpty(affectAttributes)) {
                result = await modelType.mapTable.findAll({
                    where: {[Op.or]: valueSearch},
                    limit: number,
                    offset: offset,
                    order: orderBy
                })
            } else if ($bean.isEmpty(affectAttributes)) {
                result = await modelType.mapTable.findAll({
                    where: {[Op.or]: valueSearch},
                    limit: number,
                    offset: offset
                });
            } else if ($bean.isNotEmpty(affectAttributes)) {
                result = await modelType.mapTable.findAll({limit: number, offset: offset, order: orderBy});
            } else {
                result = await modelType.mapTable.findAll({limit: number, offset: offset});
            }
        } else {
            if ((valueSearch.length > 0) && $bean.isNotEmpty(affectAttributes)) {
                result = await modelType.mapTable.findAll({where: {[Op.or]: valueSearch}, order: orderBy});
            } else if ($bean.isNotEmpty(affectAttributes)) {
                result = await modelType.mapTable.findAll({where: {[Op.or]: valueSearch}});
            } else if ($bean.isNotEmpty(affectAttributes)) {
                result = await modelType.mapTable.findAll({order: orderBy});
            } else {
                result = await modelType.mapTable.findAll();
            }
        }
        return result;
    },

    async countSearch(value, affectAttributes, modelType) { // value là giá trị cần search
        let result = {};
        let resultSearch = [];
        let valueSearch = [];
        if ($bean.isNotEmpty(affectAttributes)) {
            for (let i = 0; i < affectAttributes.length; i++) {
                let object = {};
                object[affectAttributes[i]] = {[Op.substring]: value};
                valueSearch.push(object)
            }
        }
        if (valueSearch.length > 0) {
            resultSearch = await modelType.mapTable.findAll({where: {[Op.or]: valueSearch}});
        } else {
            resultSearch = await modelType.mapTable.findAll();
        }
        result = {count: resultSearch.length};
        return result;
    }


}

module.exports = baseDao;


// Chú thích chung

// modelType: Xác định bạn đang làm việc với đối tượng csdl nào
// number: số lượng đối tượng được lấy ra
// offset: vị trí bắt đầu tính toán
// attributes: đối tượng chứa nhiều giá trị {key, value}
// orderAttributes: mảng danh sách các thuộc tính được sắp xếp vd : [['username', 'ASC'], ['email', 'DESC']]
