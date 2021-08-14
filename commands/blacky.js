const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const Canvas = require('canvas');

const drawMultilineText = require('canvas-multiline-text');
const { white } = require("chalk");


module.exports.run = async (bot, message, args) => {

    const words = args.join(' ');
    const words2 = words.split(',');

    Canvas.registerFont("./fonts/American.ttf", { family: 'American' });
    const canvas = Canvas.createCanvas(1257, 719)
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/blacky.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    let messageAttachment;

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
        ctx.drawImage(foreground, 480, 0, 776, canvas.height);
    }
    else
    {
        let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        try {
            if (messageAttachment != null)
            {
                const foreground = await Canvas.loadImage(messageAttachment);
                ctx.shadowColor = "#000";
                ctx.shadowOffsetX = 3;
                ctx.shadowOffsetY = 3;
                ctx.shadowBlur = 15;
                ctx.drawImage(foreground, 480, 0, 776, canvas.height);
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


    ctx.fillStyle = "white";

    ctx.font = applyText(canvas, words.toUpperCase(), 'American');

    function drawStrokedText(text, x, y, red, blue)
    {
        ctx.save();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 6;
        ctx.lineJoin="round";
        ctx.miterLimit=2;
        ctx.shadowColor="black";
        ctx.shadowBlur=7;

        ctx.strokeText(text, x, y);

        if (red)
        {
            var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.4);
            gradient.addColorStop(0, "#ff666b");
            gradient.addColorStop(0.7, "#a80506");
     
            ctx.fillStyle = gradient;
        }
        if (blue)
        {
            var gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.4);
            gradient.addColorStop(0, "#949fff");
            gradient.addColorStop(0.7, "#001aff");
    
            ctx.fillStyle = gradient;
        }
        
        ctx.fillText(text, x, y);
        ctx.restore();
    }

    let caption1 = words2[0].trim();
    let caption2 = undefined;
    let caption3 = undefined;

    if (words2[1] != undefined)
    {
        caption2 = words2[1].trim();
    }
    
    if (words2[2] != undefined)
    {
        caption3 = words2[2].trim();
    }


    // ctx.textAlign = "center";
    drawStrokedText(caption1.toUpperCase(), 25 / 2, canvas.height / 2.2);
    ctx.fillStyle = 'red';
    if (words2[1] != undefined)
        drawStrokedText(caption2.toUpperCase(), 25 / 2, canvas.height / 1.45, true, false);
    if (words2[2] != undefined)
        drawStrokedText(caption3.toUpperCase(), 25 / 2, canvas.height / 1.09, false, true);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'nigger.png');
    
    if (words === '')
    {
        message.lineReply('no arguments, sending template');
    }
    message.lineReply(attachment);
    console.log(words)
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
    name: "blacky",
    description: "generates a blackyspeaks card",
    usage: "b!blacky",
    accessableby: "Members",
    aliases: []
}