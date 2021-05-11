const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const Canvas = require('canvas');


module.exports.run = async (bot, message, args) => {
    const canvas = Canvas.createCanvas(750, 613)
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/cleansing.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


    Canvas.registerFont("./fonts/Roboto-Medium.ttf", { family: 'Nami' });

    ctx.font = '30px Nami';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffffff';
	// Actually fill the text with a solid color
	ctx.fillText(message.author.username, 144, 63);

    ctx.font = '29px Roboto';
    ctx.fillStyle = '#7f8289';
	// Actually fill the text with a solid color
	ctx.fillText("@" + message.author.username, 144, 95);

    // Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(79, 69, 49, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

    const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg'}));
    ctx.drawImage(avatar, 30, 20, 98, 98);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'cleansing.png');

    message.channel.send(attachment);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.config = {
    name: "tweet",
    description: "walroose tweet",
    usage: "b!tweet",
    accessableby: "Members",
    aliases: ['t']
}