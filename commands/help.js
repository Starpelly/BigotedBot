const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    return message.reply(`
**b!play** - plays a random sound effect
**b!walroose** - generates a walroose card thing
**b!superstaight** - makes a superstraight pride pfp
**b!slur** - generates a random slur
**b!liberalbio** - generates a random liberal bio
**b!conservativebio** - generates a random conservative bio
**b!antitrans** - use this command to find out what it does
**b!bansomeone** - (REQUIRES ADMIN) bans a random person in the server
    `)
}

module.exports.config = {
    name: "help",
    description: "help command",
    usage: "b!help",
    accessableby: "Members",
    aliases: ['h']
}