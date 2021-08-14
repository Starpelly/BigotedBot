const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
    try {
        const msg = await message.lineReply('Generating...');

        let { body } = await superagent.get('http://aws.random.cat/meow')
        if(!{ body }) return message.lineReply('fucked something up.')
    
        const catEmbed = new Discord.MessageEmbed()
            .setTitle('Random Cat')
            .setImage(body.file)
    
        msg.delete();
        return message.lineReply(catEmbed);
    } catch (error) {
        embed = new Discord.MessageEmbed()
                    .setTitle('ERROR HANDLER')
                    .setDescription(`something happened, message this error to Starpelly. **"${error}"**`)
        return message.lineReply(embed);
    }
}

module.exports.config = {
    name: "orange",
    description: "random cat",
    usage: "b!fucksomeone",
    accessableby: "Members",
    aliases: ['cat']
}