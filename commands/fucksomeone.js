const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const { guild } = message
    var user = guild.members.cache.random();
    if (user.id == 366303675792097291)
    {
        return message.channel.send(`${user}, I love you have a good day.`);
    } else {
        return message.channel.send(`${user}, FUCK YOU`);
    }
}

module.exports.config = {
    name: "fucksomeone",
    description: "tags a random person in the server telling them to fuck themselves.",
    usage: "b!fucksomeone",
    accessableby: "Members",
    aliases: ['fs']
}