const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
    const canvas = Canvas.createCanvas(128, 69)
    const ctx = canvas.getContext('2d');

    let messageAttachment;

    if (message.reference)
    {
        var refMessage = message.reference;
        let refer = message.channel.messages.fetch(refMessage.messageID);
        
        let result = await refer;
        
        messageAttachment = result.attachments.size > 0 ? result.attachments.array()[0].url : null
        
        const background = await Canvas.loadImage(messageAttachment);
        ctx.drawImage(background, 29, 14, 69, 42);
    }
    else
    {
        messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        try {
            console.log(messageAttachment);
            if (messageAttachment != null)
            {
                const background = await Canvas.loadImage(messageAttachment);
                ctx.drawImage(background, 29, 14, 69, 42);
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

    const avatar = await Canvas.loadImage('./images/wiiu.png');
    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'wiiu.png');
    
    return message.lineReply(attachment);
}

module.exports.config = {
    name: "wiiu",
    description: "wiiu",
    usage: "b!wiiu",
    accessableby: "Members",
    aliases: ['wii']
}