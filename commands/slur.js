const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const slurs = ["nigger", "faggot", "tranny", "coon", "cracker", 'crow', 'nazi', 'jap' , 'malon', 'nigro', 'walroose', 'monkey', 'redskin', 'OREO LAMOOOO'];
    const random = Math.floor(Math.random() * slurs.length);

    return message.reply(slurs[random]);
}

module.exports.config = {
    name: "slur",
    description: "generates a random slur",
    usage: "b!slur",
    accessableby: "Members",
    aliases: []
}