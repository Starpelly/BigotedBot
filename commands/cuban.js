const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
    const canvas = Canvas.createCanvas(1500, 1500)
    const ctx = canvas.getContext('2d');
    
    let messageAttachment;
    const avatar = await Canvas.loadImage('./images/cuban.png');

    if (message.reference)
    {
        var refMessage = message.reference;
        let refer = message.channel.messages.fetch(refMessage.messageID);
        
        let result = await refer;
        
        messageAttachment = result.attachments.size > 0 ? result.attachments.array()[0].url : null
        
        const background = await Canvas.loadImage(messageAttachment);
        ctx.drawImage(background, 469, 469, 563, 563);
    }
    else
    {
        messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        try {
            console.log(messageAttachment);
            if (messageAttachment != null)
            {
                const background = await Canvas.loadImage(messageAttachment);
                ctx.drawImage(background, 469, 469, 563, 563);
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

    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'cuban.png');
    
    return message.lineReply(attachment);
}

module.exports.config = {
    name: "cuban",
    description: "cuban",
    usage: "b!cuban",
    accessableby: "Members",
    aliases: ['cuban', 'communism']
}