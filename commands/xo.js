const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const distube = require('distube');
const path = require('path')

module.exports.run = async (bot, message, args) => {
    const music = args.join(' ');
    const { voice } = message.member;

    if(!voice.channelID) {
        message.reply('youre not in a voice channel faggot');
        return;
    }

    voice.channel.join().then((connection) => {
        connection.play(path.join('./sfx/xo_-_roblox_parody_by_starpelly.mp3'));
    });
}

module.exports.config = {
    name: "xo",
    description: "plays a special song",
    usage: "b!play",
    accessableby: "Members",
    aliases: ['xo']
}