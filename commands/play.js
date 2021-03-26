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
        const slurs = ['nigger', 'virus', 'tacobell', 'mutahar', 'vine'];
        const random = Math.floor(Math.random() * slurs.length);
        connection.play(path.join('./sfx/' + slurs[random] + '.mp3'));
    });
}

module.exports.config = {
    name: "play",
    description: "plays a random sound effect in a voice channel",
    usage: "b!play <arg1>",
    accessableby: "Members",
    aliases: ['p']
}