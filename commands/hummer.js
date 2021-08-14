const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
    const canvas = Canvas.createCanvas(1486, 1080)
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
        
        ctx.setTransform(1.4, .11, .3, 1, 1, 0);
        const background = await Canvas.loadImage(messageAttachment);
        ctx.drawImage(background, 370, 365, 290, 280);
    }
    else
    {
        messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        try {
            console.log(messageAttachment);
            if (messageAttachment != null)
            {
                ctx.setTransform(1.4, .11, .3, 1, 1, 0);
                const background = await Canvas.loadImage(messageAttachment);
                ctx.drawImage(background, 370, 365, 290, 280);
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
    const avatar = await Canvas.loadImage('./images/hummer.png');
    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

    /*ctx.setTransform(1.4, .1, .3, 1, 1, 0);
    // ctx.fillRect(654, 403, 440, 403);
    const background = await Canvas.loadImage('./images/walroose.png');
    ctx.drawImage(background, words2[0], words2[1], words2[2], words2[3]);*/

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'wiiu.png');
    
    return message.lineReply(attachment);
}

module.exports.config = {
    name: "hummer",
    description: "hummer",
    usage: "b!hummer",
    accessableby: "Members",
    aliases: ['animals']
}