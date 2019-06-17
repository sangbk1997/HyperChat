const userFriendModel = require('../model/userFriend.model');
module.exports = (sequelize, Sequelize) => {
    const UserFriend = sequelize.define('userFriends', {
            [userFriendModel.id.title]: {
                type: Sequelize.STRING,
                defaultValue: Sequelize.UUIDV1,
                primaryKey: true
            },
            [userFriendModel.userId.title]: {
                type: Sequelize.STRING
            },
            [userFriendModel.friendId.title]: {
                type: Sequelize.STRING
            },
            [userFriendModel.role.title]: {
                type: Sequelize.STRING,
                defaultValue: 'USER_FRIEND'
            },
            [userFriendModel.intimacy.title]: {
                type: Sequelize.STRING
            },
            [userFriendModel.description.title]: {
                type: Sequelize.STRING
            },
            [userFriendModel.modifiedDate.title]: {
                type: Sequelize.DATE
            }
        }
    );

    return UserFriend;
}
