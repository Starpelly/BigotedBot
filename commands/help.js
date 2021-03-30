const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    embed = new Discord.MessageEmbed()
        .setTitle(`Help command`)
        .setDescription(`**b!play** - plays a random sound effect\n
        **b!walroose** - generates a walroose card thing\n
        **b!superstaight** - makes a superstraight pride pfp\n
        **b!slur** - generates a random slur\n
        **b!liberalbio** - generates a random liberal bio\n
        **b!conservativebio** - generates a random conservative bio\n
        **b!antitrans** - use this command to find out what it does\n
        **b!bansomeone** - (REQUIRES ADMIN) bans a random person in the server\n
        **b!xo** - plays a special song\n
        **b!r34** - generates a random rule34 image from ANY category (USE AT RISK)\n
        **b!danbooru** - generates a random danbooru image (safe images only)\n
        **b!fucksomeone** - says fuck you to a random person in the server, essentially @someone brought back to life.\n
        **b!gdicon** - generates a random geometry dash icon`)
        .setFooter('you can message me Starpelly#0255 if you have a question or bug or the bot crashed or something if you want')
    return message.reply(embed);
}

module.exports.config = {
    name: "help",
    description: "help command",
    usage: "b!help",
    accessableby: "Members",
    aliases: ['h']
}