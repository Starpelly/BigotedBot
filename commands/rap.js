const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const Canvas = require('canvas');
const CanvasFilters = require('canvas-filters');

const drawMultilineText = require('canvas-multiline-text')

module.exports.run = async (bot, message, args) => {

    let words = args.join(' ');
    const words2 = words.split('/');

    Canvas.registerFont("./fonts/steelfish.ttf", { family: 'Steelfish' });
    const canvas = Canvas.createCanvas(1200, 1200)
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "white";

    let background;

    background = await Canvas.loadImage('./images/walroose.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.font = applyText(canvas, words.toUpperCase(), 'Steelfish');
    ctx.textAlign = "center";
    ctx.shadowColor="black";
    ctx.shadowBlur=7;
    ctx.lineWidth=5;
    ctx.fillText(words.toUpperCase(), 1200 / 2, canvas.height / 1.7);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'rap.png');

    message.lineReply(attachment);
    console.log(words)
}

const applyText = (canvas, text, font) => {

	const ctx = canvas.getContext('2d');

	let fontSize = 220 / 1.8;

	do {
		
		ctx.font = `${fontSize -= 1}px ` + font;
		
	} while (ctx.measureText(text).width > canvas.width);

	return ctx.font;
};

module.exports.config = {
    name: "rap",
    description: "FUCK THEM RAP TV NIGGAS!!!",
    usage: "b!rap",
    accessableby: "Members",
    aliases: ['r', 'gdtv']
}