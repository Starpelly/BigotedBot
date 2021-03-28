const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

// const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
    Canvas.registerFont("./fonts/Nanami-Medium.ttf", { family: 'Nami' });

    const canvas = Canvas.createCanvas(400, 250)
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/trans.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const background2 = await Canvas.loadImage('./images/anti.png');
    ctx.drawImage(background2, 0, 0, canvas.width, canvas.height);


    const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg'}));
    ctx.drawImage(avatar, 95, 25, 200, 200);

    // Select the style that will be used to fill the text in
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;

    ctx.font = '38px Impact';
    ctx.strokeText('SAYS FUCK TRANS RIGHTS!', 4 , 245);
    ctx.fillText('SAYS FUCK TRANS RIGHTS!', 4 , 245);

    ctx.font = '60px Impact';

    ctx.textAlign = "center";
    // Actually fill the text with a solid color
    ctx.strokeText(message.author.username.toUpperCase(), 200 , 53);
    ctx.fillText(message.author.username.toUpperCase(), 200 , 53);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'anti-trans-pride.png');
    
    return message.channel.send(attachment);
}

module.exports.config = {
    name: "antitrans",
    description: "guess what this does",
    usage: "b!antitrans",
    accessableby: "Members",
    aliases: ['at']
}