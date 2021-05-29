const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const path = require('path')

module.exports.run = async (bot, message, args) => {

    /*try {
        const music = args.join(' ');
        const { voice } = message.member;
    
        if(!voice.channelID) {
            message.reply('youre not in a voice channel faggot');
            return;
        }
    
        voice.channel.join().then((connection) => {
            const dispatcher = connection.play(path.join('./sfx/xo_-_roblox_parody_by_starpelly.mp3'));
            dispatcher.on("finish", end => {
                return voice.channel.leave();
            });
        });
    } catch (error) {
        embed = new Discord.MessageEmbed()
                .setTitle('ERROR HANDLER')
                .setDescription(`something happened, message this error to Starpelly. **"${error}"**`)
        return message.channel.send(embed);
    }*/
}

module.exports.config = {
    name: "xo",
    description: "plays a special song",
    usage: "b!play",
    accessableby: "Members",
    aliases: ['xo']
}