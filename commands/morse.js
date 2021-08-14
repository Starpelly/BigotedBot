const Discord = require("discord.js");
const { getPost, getImage } = require("random-reddit");
const botconfig = require("../botsettings.json");

const morse = require('morse-decoder');

module.exports.run = async (bot, message, args) => {
    const encoded = morse.encode(args.join(' '));
    if (encoded === '')
        return message.reply('nothing to encode.');
    else
        return message.reply(encoded);
}

module.exports.config = {
    name: "morse",
    description: "generates a random slur",
    usage: "b!morse",
    accessableby: "Members",
    aliases: ['m']
}