const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const Booru = require('booru')

module.exports.run = async (bot, message, args) => {
    try {
        Booru.search('safebooru', [''], { limit: 1, random: true })
        .then(posts => {
            for (let post of posts)
            console.log(posts)
            embed = new Discord.MessageEmbed()
                .setTitle(`Random danbooru image`)
                .setImage(post.fileUrl)
    
            return message.channel.send(embed);
        })
    } catch (error) {
        embed = new Discord.MessageEmbed()
                .setTitle('ERROR HANDLER')
                .setDescription(`something happened, message this error to Starpelly. **"${error}"**`)
        return message.channel.send(embed);
    }

}

module.exports.config = {
    name: "danbooru",
    description: "generates a random slur",
    usage: "b!slur",
    accessableby: "Members",
    aliases: []
}