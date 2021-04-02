const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const fs = require('fs');
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args) => {
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.config = {
    name: "youtube",
    description: "generates a random geometry dash icon",
    usage: "b!gdicon",
    accessableby: "Members",
    aliases: ['yt']
}