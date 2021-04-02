const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
    try {
        const msg = await message.channel.send('Generating...');

        let { body } = await superagent.get('http://aws.random.cat/meow')
        if(!{ body }) return message.channel.send('fucked something up.')
    
        const catEmbed = new Discord.MessageEmbed()
            .setTitle('Random Cat')
            .setImage(body.file)
    
        msg.delete();
        return message.channel.send(catEmbed);
    } catch (error) {
        embed = new Discord.MessageEmbed()
                    .setTitle('ERROR HANDLER')
                    .setDescription(`something happened, message this error to Starpelly. **"${error}"**`)
        return message.channel.send(embed);
    }
}

module.exports.config = {
    name: "orange",
    description: "random cat",
    usage: "b!fucksomeone",
    accessableby: "Members",
    aliases: ['cat']
}