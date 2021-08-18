const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const Canvas = require('canvas');
const CanvasFilters = require('canvas-filters');

const drawMultilineText = require('canvas-multiline-text')

module.exports.run = async (bot, message, args) => {

    let words = args.join(' ');
    const words2 = words.split('/');

    Canvas.registerFont("./fonts/Nanami-Rounded-Book.ttf", { family: 'Nami' });
    const canvas = Canvas.createCanvas(2046 / 2, 1152 / 2)
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "white";
    function drawStrokedText(text, x, y)
    {
        // https://stackoverflow.com/questions/7814398/a-glow-effect-on-html5-canvas
        ctx.save();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 14;
        ctx.lineJoin="round";
        ctx.miterLimit=2;
        ctx.strokeText(text, x, y);
        ctx.fillText(text, x, y);
        ctx.restore();
    }

    let background;

    let messageAttachment;

    async function drawBG(customIMG)
    {
        if (customIMG)
        {
            background = await Canvas.loadImage('./images/walroosegone.png');
        }
        else if (customIMG == false)
        {
            background = await Canvas.loadImage('./images/walroose.png');
        }
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    }

    function drawFG(fg)
    {
        ctx.drawImage(fg, 450, -10, 576, 596);
    }

    if (message.reference)
    {
        var refMessage = message.reference;
        let refer = message.channel.messages.fetch(refMessage.messageID);
        
        let result = await refer;
        
        messageAttachment = result.attachments.size > 0 ? result.attachments.array()[0].url : null

        if (messageAttachment != null)
        {
            drawBG(true);
            const foreground = await Canvas.loadImage(messageAttachment);
            drawFG(foreground);
            if (words2[1] != undefined) {
                words = words2[1];
            }
            else {
                if (result.content.length > 0)
                    words = result.content;
            }
        }
        else
        {
            drawBG(false);
            background = await Canvas.loadImage('./images/walroose.png');
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            words = result.content;
        }
    }
    else if (words === '')
    {
        message.lineReply('no arguments, sending template');
        drawBG(false);
        background = await Canvas.loadImage('./images/walroose.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    }
    else
    {
        messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null

        if (messageAttachment == null)
        {
            drawBG(false);
            background = await Canvas.loadImage('./images/walroose.png');
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        }
        else
        {
            drawBG(true);
            const foreground = await Canvas.loadImage(messageAttachment);
            drawFG(foreground);
        }
    }

    ctx.font = applyText(canvas, words.toUpperCase(), 'Nami');
    ctx.textAlign = "center";
    drawStrokedText(words.toUpperCase(), 1023 / 2, canvas.height / 1.7);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'POLITICS.png');

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
    name: "walroose",
    description: "generates a 'POLTIICS' card",
    usage: "b!play <arg1>",
    accessableby: "Members",
    aliases: []
}