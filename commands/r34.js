const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const r34api = new (require('r34api.js'));

module.exports.run = async (bot, message, args) => {
    const formats = ["jpg", 'png', 'gif'];
    const random = Math.floor(Math.random() * formats.length);
    var data = await r34api.random(1, formats[random])
            
    if (message.channel.nsfw) {
        try {

            if (args == 'delete')
            {
                return console.log('kinda works');
            }

            var image = data.data[0].media;
            var tags = data.data[0].tags;
            var url = data.data[0].post;
            var dimension = data.data[0].dimension;
            
            embed = new Discord.MessageEmbed()
                    .setTitle(`Random rule34 image`)
                    .setURL(url)
                    .addField( "image resolution", dimension)
                    .setImage(image)
                    .setDescription(tags.join())
                    
            return message.lineReply(embed)
            .then(function (message) {
                message.react("👍")
                message.react("➖")
                message.react("👎")
            });;
        } catch (error) {
            embed = new Discord.MessageEmbed()
                    .setTitle('ERROR HANDLER')
                    .setDescription(`something happened, message this error to Starpelly. **"${error}"**`)
            return message.lineReply(embed);
        }
    }
    else
    {
        return message.lineReply("not in nsfw channel");
    }
}

module.exports.config = {
    name: "r34",
    description: "generates a rule34 image",
    usage: "b!r34",
    accessableby: "Members",
    aliases: ["rule34", "34", "walrooseporn64", "superepicporncommand", "lololol"]
}