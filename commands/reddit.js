const Discord = require("discord.js");
const { getPost, getImage } = require("random-reddit");
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const post = await getPost('random');

    try {
        embed = new Discord.MessageEmbed()
            .setTitle(post.title)
            .setFooter(`Author: ${post.author}`)
            .setAuthor(`r/${post.subreddit}`)
            .setURL(`https://reddit.com${post.permalink}`)
            .setImage(post.url_overridden_by_dest)
            .setDescription(post.selftext)
            .setColor(post.link_flair_background_color)

        return message.lineReply(embed)
    } catch (error) {
        embed = new Discord.MessageEmbed()
            .setTitle('ERROR HANDLER')
            .setDescription(`i expected this to happen eventually, just run the command again. **"${error}"**`)
        return message.lineReply(embed);
    }

}

module.exports.config = {
    name: "reddit",
    description: "generates a random slur",
    usage: "b!slur",
    accessableby: "Members",
    aliases: ['d']
}