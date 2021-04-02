const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const Canvas = require('canvas');
const drawMultilineText = require('canvas-multiline-text')


module.exports.run = async (bot, message, args) => {

    const words = args.join(' ');

    Canvas.registerFont("./fonts/Nanami-Rounded-Book.ttf", { family: 'Nami' });
    const canvas = Canvas.createCanvas(2046, 1152)
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/walroosegone.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    function drawStrokedText(text, x, y)
    {
        // https://stackoverflow.com/questions/7814398/a-glow-effect-on-html5-canvas
        ctx.save();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 20;
        ctx.lineJoin="round";
        ctx.miterLimit=2;
        ctx.strokeText(text, x, y);
        ctx.fillText(text, x, y);
        ctx.restore();
    }

    ctx.font = applyText(canvas, words.toUpperCase(), 'Nami');

    ctx.textAlign = "center";

    if (words.toUpperCase() > 65)
    {
        message.channel.send('argument is longer than 65, output might look like shit')
    }
    drawStrokedText(words.toUpperCase(), 1023, canvas.height / 1.7);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'POLITICS.png');
    
    if (words === '')
    {
        message.channel.send('no arguments, sending template');
    }
    message.channel.send(attachment);
    console.log(words)
}

const applyText = (canvas, text, font) => {

	const ctx = canvas.getContext('2d');

	let fontSize = 220;

	do {
		
		ctx.font = `${fontSize -= 1}px ` + font;
		
	} while (ctx.measureText(text).width > canvas.width);

	return ctx.font;
};

module.exports.config = {
    name: "walroosegone",
    description: "generates a 'POLTIICS' card",
    usage: "b!play <arg1>",
    accessableby: "Members",
    aliases: []
}