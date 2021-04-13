const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const fs = require('fs');
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
    //var messageid = args;
    //client.channels.cache.get(channel => channel.id === channelid).fetch(messageid).then(message => message.delete())
}

module.exports.config = {
    name: "muteeeee",
    description: "fish",
    usage: "fish",
    accessableby: "Members",
    aliases: ['m']
}