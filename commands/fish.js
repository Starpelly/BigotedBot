const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const fs = require('fs');
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
    return message.channel.send({files: ['./images/fish.gif']});
}

module.exports.config = {
    name: "fish",
    description: "fish",
    usage: "fish",
    accessableby: "Members",
    aliases: ['fs']
}