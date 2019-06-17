
var emojiService = require('./emoji.service');

var initDataService = {
    insertEmojis() {
        let emojis = [];
        emojis.push({name: "Thumbs Up Sign"});
        emojis.push({name: "Heavy Black Heart"});
        emojis.push({name: "Grinning Face with Smiling Eyes"});
        emojis.push({name: "Face with Tears of Joy"});
        emojis.push({name: "Rolling on the Floor Laughing"});
        emojis.push({name: "Smiling Face with Open Mouth and Cold Sweat"});
        emojis.push({name: "Smiling Face with Heart-Shaped Eyes"});
        emojis.push({name: "Face with Stuck-out Tongue"});
        emojis.push({name: "Face with Stuck-out Tongue and Winking Eye"});
        emojis.push({name: "Crying Face"});
        emojis.push({name: "Loudly Crying Face"});

        for(let i = 0; i < emojis.length; i++){
            emojiService.insert(emojis[i]).then(function (emoji) {
                console.log(emoji);
            })
        }
    }
}

module.exports = initDataService;
