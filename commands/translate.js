const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const Canvas = require('canvas');

const translate = require('@vitalets/google-translate-api')

module.exports.run = async (bot, message, args) => {

    const words = args.join(' ');
    const words2 = words.split(',');

    if (!translate.languages.isSupported(words2[0]))
    {
        return message.reply('that language isnt supported');
    }

    translate(`${words2[1]}`, {from: 'auto', to: words2[0]}).then(res => {
        console.log(res.text);
        message.lineReply(res.text);
    })
}

module.exports.config = {
    name: "translate",
    description: "generates a blackyspeaks card",
    usage: "b!translate",
    accessableby: "Members",
    aliases: ['tr']
}