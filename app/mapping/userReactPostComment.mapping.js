const userReactPostCommentModel = require('../model/userReactPostComment.model');
module.exports = (sequelize, Sequelize) => {
    const UserReactPostComment = sequelize.define('userReactPostComments', {
        [userReactPostCommentModel.id.title]: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [userReactPostCommentModel.userId.title]: {
            type: Sequelize.STRING
        },
        [userReactPostCommentModel.postId.title]: {
            type: Sequelize.STRING
        },
        [userReactPostCommentModel.commentId.title]: {
            type: Sequelize.STRING
        },
        [userReactPostCommentModel.action.title]: {
            type: Sequelize.STRING
        },
        [userReactPostCommentModel.role.title]: {
            type: Sequelize.STRING,
            defaultValue: 'USER_REACT_POST_COMMENT'
        },
        [userReactPostCommentModel.textEmoji.title]: {
            type: Sequelize.STRING
        },
        [userReactPostCommentModel.codeEmoji.title]: {
            type: Sequelize.STRING
        },
        [userReactPostCommentModel.readDate.title]: {
            type: Sequelize.DATE
        },
        [userReactPostCommentModel.reactDate.title]: {
            type: Sequelize.DATE
        }
    });

    return UserReactPostComment;
}
