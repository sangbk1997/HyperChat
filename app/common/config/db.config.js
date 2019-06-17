const envDB = require('./env.js').mysqlDB;

const Sequelize = require('sequelize');
const sequelize = new Sequelize(envDB.database, envDB.username, envDB.password, {
    host: envDB.host,
    dialect: envDB.dialect,
    operatorsAliases: false,

    pool: {
        max: envDB.max,
        min: envDB.pool.min,
        acquire: envDB.pool.acquire,
        idle: envDB.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Request

//Models/tables
db.user = require('../../mapping/user.mapping')(sequelize, Sequelize);
db.channel = require('../../mapping/channel.mapping')(sequelize, Sequelize);
db.messenger = require('../../mapping/messenger.mapping.js')(sequelize, Sequelize);
db.emoji = require('../../mapping/emoji.mapping.js')(sequelize, Sequelize);
db.userChannel = require('../../mapping/userChannel.mapping')(sequelize, Sequelize);
db.userMessenger = require('../../mapping/userMessenger.mapping')(sequelize, Sequelize);
db.userFriend = require('../../mapping/userFriend.mapping')(sequelize, Sequelize);

// // Associations
//
// // User
// db.user.hasMany(db.messenger, {foreignKey: 'userId'});
// db.user.belongsToMany(db.userFriend, {through: 'UserFriend', foreignKey: 'friendId'});
db.user.belongsToMany(db.channel, {through: 'userChannels', foreignKey: 'userId'});
// db.user.hasMany(db.userChannel, {foreignKey: 'userId'});
// // db.userChannel.belongsToMany(db.user, {through: 'UserChannel'});
db.user.hasMany(db.userMessenger, {foreignKey: 'userId'});
db.userMessenger.belongsTo(db.user, {foreignKey: 'userId'});
//
// // Channel
db.channel.hasMany(db.messenger, {foreignKey: 'channelId'});
db.channel.hasMany(db.userMessenger, {foreignKey: 'channelId'});
db.channel.belongsToMany(db.user, {through: 'userChannels', foreignKey: 'channelId'});
// db.channel.hasMany(db.userChannel, {foreignKey: 'channelId'});
// // db.channel.hasMany(db.request, {foreignKey: 'destination'});
//
// // Messenger
db.messenger.hasMany(db.userMessenger, {foreignKey: 'messengerId'});
db.messenger.belongsTo(db.user, {foreignKey: 'userId'});

module.exports = db;
