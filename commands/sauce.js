const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');

const SauceNAO = require('saucenao');

module.exports.run = async (bot, message, args) => {

    const canvas = Canvas.createCanvas(403, 353)
    const ctx = canvas.getContext('2d');

    const words = args.join(' ');
    const words2 = words.split(',');

    let messageAttachment;

    let sauce;
    let mySauce = new SauceNAO('d2badde2c078e47b98c2ef381acda79e23cb2859');

    if (message.reference)
    {
        var refMessage = message.reference;
        let refer = message.channel.messages.fetch(refMessage.messageID);
        
        let result = await refer;
        
        messageAttachment = result.attachments.size > 0 ? result.attachments.array()[0].url : null
        
        // sauce = (await SauceNAO(messageAttachment)).json
        sauce = (await mySauce(messageAttachment)).json
    }
    else
    {
        messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        try {
            console.log(messageAttachment);
            if (messageAttachment != null)
            {
                // sauce = (await SauceNAO(messageAttachment)).json
            }
            else
            {
                // message.lineReply('no image, sending blank bg')
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    //return message.lineReply({files: [sa]})

    // const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'suffer.png');
    // return message.lineReply(attachment);
    
}

module.exports.config = {
    name: "sauce",
    description: "sauce",
    usage: "b!sauce",
    accessableby: "Members",
    aliases: ['sauce']
}