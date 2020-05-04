const postModel = require('../model/post.model');
module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('posts', {
        [postModel.id.title]: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [postModel.userId.title]: {
            type: Sequelize.STRING
        },
        [postModel.content.title]: {
            type: Sequelize.STRING
        },
        [postModel.role.title]: {
            type: Sequelize.STRING,
            defaultValue: 'POST'
        },
        [postModel.textEmotion.title]: {
            type: Sequelize.STRING
        },
        [postModel.codeEmotion.title]: {
            type: Sequelize.STRING
        },
        [postModel.textActivity.title]: {
            type: Sequelize.STRING
        },
        [postModel.codeActivity.title]: {
            type: Sequelize.STRING
        },
        [postModel.tagPeople.title]: {
            type: Sequelize.TEXT
        },
        [postModel.totalComment.title]: {
            type: Sequelize.INTEGER
        },
        [postModel.locationId.title]: {
            type: Sequelize.STRING
        },
    });
    return Post;
}
