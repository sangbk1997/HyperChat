let jwt = require('jsonwebtoken')
const secret = require('../config/env').JWT_SECRET;
const baseDao = require('../../dao/base.dao');
const listModelType = require('../../common/obj/modelType/listModelType');
const HyperError = require('../obj/hyper-error/hyper-error')

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token && token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                throw new HyperError("NOT_AUTHORIZED", 401, "Bạn chưa xác thực ứng dụng !");
            } else {
                let userId = decoded.userId;
                baseDao.findById(userId, listModelType.modelTypeUser).then(res => {
                    console.log("Checked User")
                    if (res) {
                        req.session.user = res;
                    }
                    next();
                }, error => {
                    next(error);
                })
            }
        })
    } else {
        throw new HyperError("NOT_AUTHORIZED", 401, "Bạn chưa xác thực ứng dụng !");
        // next();
        // return res.json({
        //     success: false,
        //     message: 'Auth token is not supplied'
        // })
    }
}

module.exports = checkToken
