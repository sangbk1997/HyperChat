const emojiModel = require('../model/emoji.model');
module.exports = (sequelize, Sequelize) => {
    const Emoji = sequelize.define('emojis', {
        [emojiModel.id.title]: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        [emojiModel.name.title]: {
            type: Sequelize.STRING
        },
        [emojiModel.native.title]: {
            type: Sequelize.STRING
        },
        [emojiModel.text.title]: {
            type: Sequelize.STRING
        },
        [emojiModel.keywords.title]: {
            type: Sequelize.STRING
        }
    });

    return Emoji;
}
