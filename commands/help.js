const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const paginationEmbed = require('discord.js-pagination');

module.exports.run = async (bot, message, args) => {
    let pages = [

    ]

    page1 = new Discord.MessageEmbed()
        .setTitle(`Help command`)
        .setDescription(`
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
        **b!gdicon** - generates a random geometry dash icon\n
        **b!orange** - generates a random cat image\n
        **b!invite** - sends an invite link for the bot\n
        **b!stonetoss** - amogus\n
        `)
        .setFooter('you can message me Starpelly#0255 if you have a question or bug or the bot crashed or something if you want');
    pages.push(page1);
    
    page2 = new Discord.MessageEmbed()
    .setTitle(`Help command`)
    .setDescription(`
    **b!reddit** - gets a random post from a random subreddit\n
    **b!blacky** - funny thumbnails\n
    **b!wiiu** - better than switch\n
    **b!play** - play a random sound effect\n
    **b!hummer** - DUDE THIS CAR KICKS ASS, AND I CAN WATCH MADAGASCAR WHILE I'M DRIVING!\n
    **b!kanye** - generates a random kanye west quote\n
    **b!kym** - gets 10 random images from a know your meme search\n
    **b!morse** - generates morse code based on arguments passed\n
    **b!trump** - generates a random trump tweet maybe\n
    **b!fact** - random fact fucking useless kys\n
    **b!joke** - adds or gets the global joke list, PARAMS: (list: displays all the jokes from a max of 50, random: gets a random joke). **THIS ONLY WORKS WHEN REPLYING TO MESSAGES**\n
    **b!pablo** - THE PABLO!!!!!!!!\n
    **b!twelve** - generates a SHES 12??!!! thumbnail
    `)
    .setFooter('you can message me Starpelly#0255 if you have a question or bug or the bot crashed or something if you want');
    pages.push(page2);

    return paginationEmbed(message, pages);
    // return message.lineReply(embed);
}

module.exports.config = {
    name: "help",
    description: "help command",
    usage: "b!help",
    accessableby: "Members",
    aliases: ['h']
}