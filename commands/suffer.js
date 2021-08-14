const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');

const GIFEncoder = require('gif-encoder-2');
const fs = require('fs');
const path = require('path');

module.exports.run = async (bot, message, args) => {

    const canvas = Canvas.createCanvas(403, 353)
    const ctx = canvas.getContext('2d');

    const words = args.join(' ');
    const words2 = words.split(',');

    let messageAttachment;

    if (message.reference)
    {
        var refMessage = message.reference;
        let refer = message.channel.messages.fetch(refMessage.messageID);
        
        let result = await refer;
        
        messageAttachment = result.attachments.size > 0 ? result.attachments.array()[0].url : null
        
        const background = await Canvas.loadImage(messageAttachment);
        ctx.drawImage(background, 14, 15, 370, 208);
    }
    else
    {
        messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        try {
            console.log(messageAttachment);
            if (messageAttachment != null)
            {
                const background = await Canvas.loadImage(messageAttachment);
                ctx.drawImage(background, 14, 15, 370, 208);
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

    ctx.resetTransform();
    const avatar = await Canvas.loadImage('./images/suffer.png');
    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'suffer.png');
    return message.lineReply(attachment);

    
    /*const size = 200
    const half = size / 2

    const canvas = Canvas.createCanvas(size, size)
    const ctx = canvas.getContext('2d')

    function drawBackground() {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, size, size)
    }

    const encoder = new GIFEncoder(size, size)
    encoder.setDelay(500)
    encoder.start()

    drawBackground()
    ctx.fillStyle = '#ff0000'
    ctx.fillRect(0, 0, half, half)
    encoder.addFrame(ctx)

    drawBackground()
    ctx.fillStyle = '#00ff00'
    ctx.fillRect(half, 0, half, half)
    encoder.addFrame(ctx)

    drawBackground()
    ctx.fillStyle = '#0000ff'
    ctx.fillRect(half, half, half, half)
    encoder.addFrame(ctx)

    drawBackground()
    ctx.fillStyle = '#ffff00'
    ctx.fillRect(0, half, half, half)
    encoder.addFrame(ctx)

    encoder.finish()

    const buffer = encoder.out.getData()

    fs.writeFile(path.join(__dirname, 'output', 'beginner.gif'), buffer, error => {
        // gif drawn or error
        const attachment = new Discord.MessageAttachment(buffer, 'suffer.gif');
        return message.lineReply(attachment);
        console.log(buffer)
    })*/
    
}

module.exports.config = {
    name: "suffer",
    description: "suffer",
    usage: "b!suffer",
    accessableby: "Members",
    aliases: ['suf']
}