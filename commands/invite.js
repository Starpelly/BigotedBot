const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send('https://starpelly.com/bigotedbot');
}

module.exports.config = {
    name: "fnaf",
    description: "fnaf",
    usage: "b!fnaf",
    accessableby: "Members",
    aliases: ['fnaf']
}