const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const ideology = ['Neocon', 'Populist', 'Centrist'];
    const randomId = Math.floor(Math.random() * ideology.length);

    const christian = ['Atheist', 'Christian', 'Islam', 'JEBUS 4 LIFE!!!!'];
    const randomCH = Math.floor(Math.random() * christian.length);

    const hastag = ['#TRUMP2024', '#KANYE2024 (BASED)', 'Based and redpilled'];
    const randomHT = Math.floor(Math.random() * hastag.length);

    const relationship = ['Father', 'Mother', 'Single'];
    const randomRS = Math.floor(Math.random() * hastag.length);


    return message.lineReply(ideology[randomId] + ' ' + christian[randomCH] + ' ' + hastag[randomHT] + '. ' + relationship[randomRS]);
}

module.exports.config = {
    name: "conservativebio",
    description: "generates a conservative bio",
    usage: "b!conservativebio",
    accessableby: "Members",
    aliases: ['cb']
}