const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const accounts = ['https://twitter.com/itsJeffTiedrich'];
    const random = Math.floor(Math.random() * accounts.length);

    message.reply(accounts[random]);
}

module.exports.config = {
    name: "liberalbio",
    description: "generates a liberal bio",
    usage: "b!conservativebio",
    accessableby: "Members",
    aliases: ['lb']
}