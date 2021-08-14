const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
    Canvas.registerFont("./fonts/whitneymedium.otf", { family: 'Whit' });
    const canvas = Canvas.createCanvas(433, 107)
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/dreammoment.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = '24px Whit';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffffff';
	// Actually fill the text with a solid color
	ctx.fillText(message.author.username, 69, 52);
    
    // Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(33, 48, 20, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();

    const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg'}));
    ctx.drawImage(avatar, 13, 28, 40, 40);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'n.png');
    
    message.lineReply(attachment);
}

module.exports.config = {
    name: "nwordpurge",
    description: "purges all nwords from your account",
    usage: "b!bansomeone <user>",
    aliases: ['nwp']
}