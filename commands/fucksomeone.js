const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const { guild } = message

    var user = guild.members.random.choice(ctx.guild.members)
    //var user2 = message.guild.members.random();
    return message.channel.send(`${user}`);
}

module.exports.config = {
    name: "fucksomeone",
    description: "tags a random person in the server telling them to fuck themselves.",
    usage: "b!fucksomeone",
    accessableby: "Members",
    aliases: ['fs']
}