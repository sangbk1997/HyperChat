const env = {
    reverseProxy: {},
    nodeApp: {
        port: 80,
        host: '172.20.80.13'
    },
    redisApp: {
        port: 6379,
        host: '172.20.80.12'
    },
    redisPushstream: {
        port: 6379,
        host: '172.20.30.107'
    },
    pushStreamServer: {},
    mysqlDB: {
        // database: 'chatme',
        database: 'chat',
        username: 'root',
        password: 'Hyperlogya@123',
        host: '172.20.80.11',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    JWT_SECRET: 'Hyperlogy'
};

module.exports = env;
