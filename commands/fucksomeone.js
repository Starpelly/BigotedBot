const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.reply('not done yet');
}

module.exports.config = {
    name: "fucksomeone",
    description: "tags a random person in the server telling them to fuck themselves.",
    usage: "b!fucksomeone",
    accessableby: "Members",
    aliases: ['fs']
}