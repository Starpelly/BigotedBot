const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
    const canvas = Canvas.createCanvas(307, 307)
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg'}));
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage('./images/superstraight.png');
    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
    

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'superstraight-pride.png');
    
    return message.channel.send(attachment);
}

module.exports.config = {
    name: "superstraight",
    description: "adds a superstraight border to your pfp",
    usage: "b!superstraight",
    accessableby: "Members",
    aliases: ['ss']
}