const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const Canvas = require('canvas');

const drawMultilineText = require('canvas-multiline-text');
const { white } = require("chalk");


module.exports.run = async (bot, message, args) => {

    const canvas = Canvas.createCanvas(2924, 2636)
    const ctx = canvas.getContext('2d');

    let messageAttachment;

    if (message.author.id == 205751786391207938) return;

    if (message.reference)
    {
        var refMessage = message.reference;
        let refer = message.channel.messages.fetch(refMessage.messageID);
        
        let result = await refer;
        
        messageAttachment = result.attachments.size > 0 ? result.attachments.array()[0].url : null
        
        const foreground = await Canvas.loadImage(messageAttachment);
        ctx.shadowColor = "#000";
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 15;
        ctx.drawImage(foreground, 170, 60, 2076, 1310);
    }
    else
    {
        messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        try {
            console.log(messageAttachment);
            if (messageAttachment != null)
            {
                const foreground = await Canvas.loadImage(messageAttachment);
                ctx.shadowColor = "#000";
                ctx.shadowOffsetX = 3;
                ctx.shadowOffsetY = 3;
                ctx.shadowBlur = 15;
                ctx.drawImage(foreground, 170, 60, 2076, 1310);
            }
            else
            {
                message.lineReply('no image, sending blank bg')
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const background = await Canvas.loadImage('./images/femboy.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'femboylove.png');

    message.lineReply(attachment);
}

function attachIsImage(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
}

const applyText = (canvas, text, font) => {

	const ctx = canvas.getContext('2d');

	let fontSize = 320 / 1.8;
    
    ctx.font = `${fontSize -= 1}px ` + font;

	return ctx.font;
};

module.exports.config = {
    name: "cancer",
    description: "generates a cancer",
    usage: "b!cancer",
    accessableby: "Members",
    aliases: ['c']
}