const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    try {
    
        var randomIcon = `https://avatars.githubusercontent.com/u/30000${getRandomInt(99)}`;
    
        embed = new Discord.MessageEmbed()
            .setTitle(`Random Github Icon`)
            .setImage(randomIcon)
        message.lineReply(embed);
    } catch (error) {
        console.log(error);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.config = {
    name: "github",
    description: "generates a random geometry dash icon",
    usage: "b!gdicon",
    accessableby: "Members",
    aliases: ['gh']
}