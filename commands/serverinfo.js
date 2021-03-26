const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const { guild } = message

    const { name, region, memberCount, } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
        .setTitle(`Server info for "${name}"`)
        .setThumbnail(icon)
        .addFields(
            {
                name: 'Region',
                value: region,
            },
            {
                name: 'Members',
                value: memberCount,
            },
        )
        .setFooter('thats all you get im bored')

    return message.reply('every bot has this right?', embed);
}

module.exports.config = {
    name: "serverinfo",
    description: "doesnt show serverinfo",
    usage: "b!serverinfo",
    accessableby: "Members",
    aliases: []
}