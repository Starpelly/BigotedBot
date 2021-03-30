const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const { guild } = message
    const { member, mentions } = message

    if (member.hasPermission('ADMINISTRATOR') || member.hasPermission('BAN_MEMBERS')) {
        if (message.guild.me.hasPermission('ADMINISTRATOR') || message.guild.me.hasPermission('BAN_MEMBERS')) {
            var user = guild.members.cache.random();
            const target = user
            const targetMember = message.guild.members.cache.get(target.id);

            // console.log(targetMember);

            if (targetMember.id == 366303675792097291) {
                return message.reply(`i cannot ban god`);
            } else {
                if (targetMember.bannable == true) {
                    targetMember.ban();
                    return message.reply(`${targetMember} has been randomly banned`);
                } else {
                    if (targetMember == message.guild.me) {
                        return message.reply('i cant ban myself');
                    } else {
                        return message.reply(`cant ban this guy ${targetMember}`);
                    }
                }
            }
        } else {
            return message.reply('i dont have the permissions to do this.');  
        }
    } else {
        return message.reply('you aint got the white privilege.');  
    }
}

module.exports.config = {
    name: "bansomeone",
    description: "(REQUIRES ADMIN) bans a random person in the server",
    usage: "b!bansomeone <user>",
    accessableby: "Admins",
    aliases: ['bs']
}