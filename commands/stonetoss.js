const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
    const canvas = Canvas.createCanvas(1500, 500)
    const ctx = canvas.getContext('2d');

    const rand = getRandomInt(2);

    let avatar = undefined;

    let dx;
    let dy;
    let dw;
    let dh;

    switch (rand) {
        case 0:
            avatar = await Canvas.loadImage('./images/stonetoss/1.png');
            dx = 1080;
            dy = 150;
            dw = 320;
            dh = 320;
            break;
        case 1:
            avatar = await Canvas.loadImage('./images/stonetoss/2.png');
            dx = 600;
            dy = 150;
            dw = 320;
            dh = 320;
            break;
    }

    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);

    let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
    try {
        if (messageAttachment != null)
        {
            const foreground = await Canvas.loadImage(messageAttachment);
            ctx.drawImage(foreground, dx, dy, dw, dh);
        }
        else
        {
            if (message.mentions.users.size) {
                const user = message.mentions.users.first() || message.author;
                const userAvatar = await Canvas.loadImage(user.displayAvatarURL({ format: 'jpg'}));
                ctx.drawImage(userAvatar, dx, dy, dw, dh);
            }
            else
            {
                const background = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg'}));
                ctx.drawImage(background, dx, dy, dw, dh);
            }
            
        }
    }
    catch (error) {
        console.log(error)
    }
    

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'stonetoss.png');
    
    return message.lineReply(attachment);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

module.exports.config = {
    name: "stonetoss",
    description: "stonetoss",
    usage: "b!stonetoss",
    accessableby: "Members",
    aliases: ['s']
}