const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const fetch = require('node-fetch');

let url = "https://api.kanye.rest/";
let settings = { method: "Get" };

module.exports.run = async (bot, message, args) => {
    try {
        const msg = await message.lineReply('Generating...');

        fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            embed = new Discord.MessageEmbed()
            .setAuthor("ye (@kanyewest)", "https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg","https://twitter.com/kanyewest")
            .setColor(`#1da0f2`)
            .setDescription(json.quote)
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
    name: "kanye",
    description: "and im kanye west",
    usage: "b!kanye",
    accessableby: "Members",
    aliases: ['yee']
}