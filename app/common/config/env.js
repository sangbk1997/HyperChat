const env = {
    reverseProxy: {},
    nodeApp: {
        port: 80,
        host: '172.16.40.43'
    },
    redisApp: {
        port: 6379,
        host: '172.16.40.42'
    },
    redisPushstream: {
        port: 6379,
        host: '172.16.40.44'
    },
    pushStreamServer: {},
    mysqlDB: {
        // database: 'chatme',
        database: 'chat',
        username: 'root',
        password: 'Hyperlogya@123',
        host: '172.16.40.41',
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
