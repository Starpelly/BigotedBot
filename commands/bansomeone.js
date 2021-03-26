const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.reply('nothing here yet.');
}

module.exports.config = {
    name: "bansomeone",
    description: "(REQUIRES ADMIN) bans a random person in the server",
    usage: "b!bansomeone <user>",
    accessableby: "Admins",
    aliases: ['bs']
}