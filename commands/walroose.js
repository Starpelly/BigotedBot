const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const Canvas = require('canvas');


module.exports.run = async (bot, message, args) => {

    const words = args.join(' ');
    Canvas.registerFont("./fonts/Nanami-Rounded-Book.ttf", { family: 'Nami' });
    const canvas = Canvas.createCanvas(2046, 1152)
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/walroose.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Select the style that will be used to fill the text in
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 20;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 16;
    ctx.shadowColor = "rgba(0, 0, 0, 0.8)";

    ctx.font = applyText(canvas, words, 'Nami');

    ctx.textAlign = "center";
    // Actually fill the text with a solid color
    //ctx.strokeText(words, 200 , 147);
    ctx.strokeText(words.toUpperCase(), 1023, canvas.height / 1.7);
    ctx.fillText(words.toUpperCase(), 1023, canvas.height / 1.7);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'POLITICS.png');
    
    message.channel.send(attachment);
}

const applyText = (canvas, text, font) => {

	const ctx = canvas.getContext('2d');

	let fontSize = 220;

	do {
		
		ctx.font = `${fontSize -= 1}px ` + font;
		
	} while (ctx.measureText(text).width > canvas.width - 190);

	return ctx.font;
};

module.exports.config = {
    name: "walroose",
    description: "generates a 'POLTIICS' card",
    usage: "b!play <arg1>",
    accessableby: "Members",
    aliases: []
}