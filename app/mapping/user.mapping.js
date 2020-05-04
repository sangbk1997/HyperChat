const userModel = require('../model/user.model');
var bcrypt = require('bcrypt');
var $bean = require('../common/utils/hyd-bean-utils');
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users', {
            [userModel.id.title]: {
                type: Sequelize.STRING,
                primaryKey: true
            },
            [userModel.username.title]: {
                type: Sequelize.STRING
            },
            [userModel.password.title]: {
                type: Sequelize.STRING
            },
            [userModel.firstName.title]: {
                type: Sequelize.STRING
            },
            [userModel.lastName.title]: {
                type: Sequelize.STRING
            },
            [userModel.fullName.title]: {
                type: Sequelize.STRING
            },
            [userModel.email.title]: {
                type: Sequelize.STRING
            },
            [userModel.salt.title]: {
                type: Sequelize.STRING
            },
            [userModel.avatar_url.title]: {
                type: Sequelize.STRING
            },
            [userModel.location.title]: {
                type: Sequelize.STRING
            },
            [userModel.phone.title]: {
                type: Sequelize.STRING
            },
            [userModel.birthDay.title]: {
                type: Sequelize.DATE
            },
            [userModel.gender.title]: {
                type: Sequelize.INTEGER
            },
            [userModel.facebook.title]: {
                type: Sequelize.STRING
            },
            [userModel.github.title]: {
                type: Sequelize.STRING
            },
            [userModel.skype.title]: {
                type: Sequelize.STRING
            },
            [userModel.role.title]: {
                type: Sequelize.STRING,
                defaultValue: 'USER'
            },
            [userModel.isAdmin.title]: {
                type: Sequelize.BOOLEAN
            },
            [userModel.status.title]: {
                type: Sequelize.BOOLEAN
            },
            [userModel.statusLogin.title]: {
                type: Sequelize.BOOLEAN
            },
            [userModel.lastLogon.title]: {
                type: Sequelize.DATE
            }
        },
        {
            hooks: {
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            },
            instanceMethods: {
                validPassword: function (password) {
                    return bcrypt.compareSync(password, this.password);
                }
            },

            // underscored: true,
            // I don't want createdAt
            // createdAt: false,

            // updatedAt: false
        }
    );

    return User;
}
