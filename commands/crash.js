const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.channel.send({ files: ['./images/fnaf_leak.mp4']})
}

module.exports.config = {
    name: "fnaf",
    description: "fnaf",
    usage: "b!fnaf",
    accessableby: "Members",
    aliases: ['fnaf']
}