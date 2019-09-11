let jwt = require('jsonwebtoken')
const secret = require('../config/env').JWT_SECRET;

let checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token && token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                // return res.json({
                //     success: false,
                //     message: 'Token is invalid !'
                // })
                next();
            } else {
                req.session.user = decoded.user;
                next();
            }
        })
    } else {
        next();
        // return res.json({
        //     success: false,
        //     message: 'Auth token is not supplied'
        // })
    }
}

module.exports = checkToken
