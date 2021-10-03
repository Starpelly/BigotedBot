const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
    const words = args.join(' ');

    const canvas = Canvas.createCanvas(826, 687)
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/shes12.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    var img;

    if (message.reference)
    {
        var refMessage = message.reference;
        let refer = message.channel.messages.fetch(refMessage.messageID);
        
        let result = await refer;
        
        let messageAttachment = result.attachments.size > 0 ? result.attachments.array()[0].url : null

        img = await Canvas.loadImage(messageAttachment);
    }
    else
    {
        let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        try {
            if (messageAttachment != null)
            {
                img = await Canvas.loadImage(messageAttachment);
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    if (img)
    {
        ctx.drawImage(img, 405, 88, 421, 599);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'twelve.png');
        return message.lineReply(attachment);
    }
    else
    {
        return message.lineReply("No Image");
    }
}

module.exports.config = {
    name: "twelve",
    description: "12",
    usage: "b!twelve",
    accessableby: "Members",
    aliases: ['12']
}