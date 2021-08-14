const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const fetch = require('node-fetch');

let url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
let settings = { method: "Get" };

module.exports.run = async (bot, message, args) => {
    try {
        const msg = await message.lineReply('Generating...');

        fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            embed = new Discord.MessageEmbed()
            .setAuthor("Donald J. Trump (@realDonaldTrump)", "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m.jpg","https://twitter.com/realDonaldTrump")
            .setColor(`#1da0f2`)
            .setDescription(json.message)
            message.lineReply(embed)
        });
       
        return msg.delete();
    } catch (error) {
        console.log(error);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.config = {
    name: "trump",
    description: "the worst trade deal in the history of trade deals maybe ever",
    usage: "b!trump",
    accessableby: "Members",
    aliases: ['maga']
}