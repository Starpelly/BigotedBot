const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');
const { fillTextWithTwemoji } = require('node-canvas-with-twemoji-and-discord-emoji');

const GIFEncoder = require('gif-encoder-2');
const fs = require('fs');
const path = require('path');

module.exports.run = async (bot, message, args) => {

    const canvas = Canvas.createCanvas(578, 911)
    const ctx = canvas.getContext('2d');

    let words = args.join(' ');
    const words2 = words.split(',');

    let messageAttachment;

    if (message.reference)
    {
        var refMessage = message.reference;
        let refer = message.channel.messages.fetch(refMessage.messageID);
        
        let result = await refer;
        
        messageAttachment = result.attachments.size > 0 ? result.attachments.array()[0].url : null
        console.log(result.content)

        if (result.content.length > 0)
        {
            ctx.resetTransform();
            const avatar = await Canvas.loadImage('./images/honor.jpg');
            ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

            words = result.content;

            ctx.textAlign = "center";
            ctx.font = applyText(canvas, words.replace(/(.*?\s.*?\s)/g, '$1'+'\n'), 'Arial');
            ctx.fillText(words.replace(/(.*?\s.*?\s)/g, '$1'+'\n'), 120, 341);
        } else if (messageAttachment == null)
        {
            ctx.resetTransform();
            const avatar = await Canvas.loadImage('./images/honor.jpg');
            ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

            ctx.textAlign = "center";
            ctx.font = applyText(canvas, words.replace(/(.*?\s.*?\s)/g, '$1'+'\n'), 'Arial');
            ctx.fillText(words.replace(/(.*?\s.*?\s)/g, '$1'+'\n'), 120, 341);
        }
        else if (messageAttachment != null)
        {
            ctx.beginPath();
            ctx.rect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";
            ctx.fill();

            const background = await Canvas.loadImage(messageAttachment);
            ctx.drawImage(background, 1, 274, 246, 305);

            ctx.resetTransform();
            const avatar = await Canvas.loadImage('./images/honortransparent.png');
            ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
        }

    }
    else
    {
        messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null

        if (messageAttachment == null)
        {
            ctx.resetTransform();
            const avatar = await Canvas.loadImage('./images/honor.jpg');
            ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

            ctx.textAlign = "center";
            ctx.font = applyText(canvas, words.replace(/(.*?\s.*?\s)/g, '$1'+'\n'), 'Arial');
            ctx.fillText(words.replace(/(.*?\s.*?\s)/g, '$1'+'\n'), 120, 341);
            console.log(words.replace(/(.*?\s.*?\s)/g, '$1'+'\n'));
        }
        else if (messageAttachment != null)
        {
            ctx.beginPath();
            ctx.rect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "white";
            ctx.fill();

            const background = await Canvas.loadImage(messageAttachment);
            ctx.drawImage(background, 1, 280, 237, 305);

            ctx.resetTransform();
            const avatar = await Canvas.loadImage('./images/honortransparent.png');
            ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
        }
    }
    // await fillTextWithTwemoji(ctx, `${words}`, 100, 100);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'lol.png');
    return message.lineReply(attachment);
}

const applyText = (canvas, text, font) => {

	const ctx = canvas.getContext('2d');

	let fontSize = 220 / 4.8;

	do {

		ctx.font = `${fontSize -= 1}px ` + font;

	} while (ctx.measureText(text).width > 154);

	return ctx.font;
};

module.exports.config = {
    name: "lol",
    description: "lol",
    usage: "b!lol",
    accessableby: "Members",
    aliases: ['lol']
}