const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.lineReply({files: ['./images/gore.jpg']});
}

module.exports.config = {
    name: "gore",
    description: "gore",
    usage: "gore",
    accessableby: "Members",
    aliases: ['gore']
}