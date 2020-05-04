const commentModel = require('../model/comment.model');
module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define('comments', {
        [commentModel.id.title]: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [commentModel.userId.title]: {
            type: Sequelize.STRING
        },
        [commentModel.postId.title]: {
            type: Sequelize.STRING
        },
        [commentModel.parentId.title]: {
            type: Sequelize.STRING
        },
        [commentModel.message.title]: {
            type: Sequelize.TEXT
        },
        [commentModel.totalReply.title]: {
            type: Sequelize.INTEGER
        },
        [commentModel.role.title]: {
            type: Sequelize.STRING,
            defaultValue: 'COMMENT'
        },
        [commentModel.type.title]: {
            type: Sequelize.STRING
        },
        [commentModel.fileSize.title]: {
            type: Sequelize.INTEGER
        },
        [commentModel.contentType.title]: {
            type: Sequelize.STRING
        },
        [commentModel.fileExtension.title]: {
            type: Sequelize.STRING
        },
        [commentModel.path.title]: {
            type: Sequelize.STRING
        },
        [commentModel.type.title]: {
            type: Sequelize.STRING
        },
        [commentModel.status.title]: {
            type: Sequelize.STRING
        },
        [commentModel.typeRole.title]: {
            type: Sequelize.STRING
        }
    });
    return Comment;
}
