const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const path = require('path')

module.exports.run = async (bot, message, args) => {
    try {
        const music = args.join(' ');
        const { voice } = message.member;

        if(!voice.channelID) {
            message.reply('youre not in a voice channel faggot');
            return;
        }
        
        voice.channel.join().then((connection) => {
            const slurs = ['nigger.mp3', 'virus.mp3', 'mutahar.mp3', 'vine.mp3', 'bopbopnigga.mp3', 'amogus.mp3', 'NIGGERS.mp3', 'Big Rock Finish H.mp3',
            'trol.mp3', 'liveblackreaction.mp3'];
            const random = Math.floor(Math.random() * slurs.length);
            const dispatcher = connection.play(path.join('./sfx/' + slurs[random]));
            dispatcher.on("finish", end => {
                // console.log('yep')
                return voice.channel.leave();
            });
        });
        // message.lineReply('ayo this shit break too much ill fix it in the morning.');
    } catch (error) {
        embed = new Discord.MessageEmbed()
                .setTitle('ERROR HANDLER')
                .setDescription(`something happened, message this error to Starpelly. **"${error}"**`)
        return message.lineReply(embed);
    }
}

module.exports.config = {
    name: "play",
    description: "plays a random sound effect in a voice channel",
    usage: "b!play <arg1>",
    accessableby: "Members",
    aliases: ['p']
}