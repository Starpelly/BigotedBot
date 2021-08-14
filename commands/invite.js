const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.lineReply('https://starpelly.com/bigotedbot');
}

module.exports.config = {
    name: "invite",
    description: "fnaf",
    usage: "b!fnaf",
    accessableby: "Members",
    aliases: ['in']
}