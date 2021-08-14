const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const KYM = require('shitty-memes')
const kym = new KYM()
const paginationEmbed = require('discord.js-pagination');

module.exports.run = async (bot, message, args) => {
    try {
        let words = args.join(' ');

        const msg = await message.lineReply('Generating...');

        kym.search(`${args}`).then((json) => {

            if (json.length < 1 && words != '') {
                msg.delete();
                return message.lineReply('No results found');
            } else if (json.length < 1 && words == '') {
                msg.delete();
                return message.lineReply('No arguments.')
            }

            let pages = [

            ]

            for (let i = 0; i < 10; i++) {
                var embed = new Discord.MessageEmbed()
                .setAuthor("Know Your Meme", "https://knowyourmeme.com/assets/favicons/favicon-96x96.png", "https://knowyourmeme.com")
                .setColor(`#111248`)
                .setImage(json[i])

                pages.push(embed);
            }

            // message.lineReply(embed1);
            paginationEmbed(message, pages);
            msg.delete();
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports.config = {
    name: "kym",
    description: "worst site ever",
    usage: "b!kym",
    accessableby: "Members",
    aliases: ['knowyourmeme']
}