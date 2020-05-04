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
db.chat = require('../../mapping/chat.mapping')(sequelize, Sequelize);
db.messenger = require('../../mapping/messenger.mapping.js')(sequelize, Sequelize);
db.emoji = require('../../mapping/emoji.mapping.js')(sequelize, Sequelize);
db.device = require('../../mapping/device.mapping.js')(sequelize, Sequelize);
db.userChat = require('../../mapping/userChat.mapping')(sequelize, Sequelize);
db.userMessenger = require('../../mapping/userMessenger.mapping')(sequelize, Sequelize);
db.userFriend = require('../../mapping/userFriend.mapping')(sequelize, Sequelize);
db.post = require('../../mapping/post.mapping')(sequelize, Sequelize);
db.comment = require('../../mapping/comment.mapping')(sequelize, Sequelize);
db.userReactPostComment = require('../../mapping/userReactPostComment.mapping')(sequelize, Sequelize);
db.notification = require('../../mapping/notification.mapping')(sequelize, Sequelize);
// db.attachment = require('../../mapping/attachment.mapping')(sequelize, Sequelize);

// // Associations
//
// // User
// db.user.hasMany(db.messenger, {foreignKey: 'userId'});
// db.user.belongsToMany(db.userFriend, {through: 'UserFriend', foreignKey: 'friendId'});
db.user.belongsToMany(db.chat, {through: db.userChat, foreignKey: 'userId'});
// db.user.hasMany(db.userChat, {foreignKey: 'userId'});
// // db.userChat.belongsToMany(db.user, {through: 'UserChat'});
db.user.hasMany(db.userMessenger, {foreignKey: 'userId'});
db.user.hasMany(db.device, {foreignKey: 'userId'});
// db.user.hasMany(db.userChat, {foreignKey: 'userId'});
db.userMessenger.belongsTo(db.user, {foreignKey: 'userId'});
//
// // Chat
db.chat.hasMany(db.messenger, {foreignKey: 'chatId'});
db.chat.hasMany(db.userMessenger, {foreignKey: 'chatId'});
// db.chat.hasMany(db.userChat, {foreignKey: 'chatId'});
db.chat.belongsToMany(db.user, {through: db.userChat, foreignKey: 'chatId'});
// db.chat.hasMany(db.userChat, {foreignKey: 'chatId'});
// // db.chat.hasMany(db.request, {foreignKey: 'destination'});
//
// // Messenger
db.messenger.hasMany(db.userMessenger, {foreignKey: 'messengerId'});
db.messenger.belongsTo(db.user, {foreignKey: 'userId'});
db.messenger.belongsTo(db.messenger, {as: 'refMessenger', foreignKey: 'refId'})
// // Messenger
db.userChat.belongsTo(db.user, {foreignKey: 'userId'});

db.post.belongsTo(db.user, {foreignKey: 'userId'});
db.post.hasMany(db.comment, {foreignKey: 'postId'});
db.post.hasMany(db.userReactPostComment, {foreignKey: 'postId'});
db.comment.belongsTo(db.user, {foreignKey: 'userId'});
db.comment.hasMany(db.userReactPostComment, {foreignKey: 'commentId'})

// react post comment
db.userReactPostComment.belongsTo(db.user, {foreignKey: 'userId'});

module.exports = db;
