const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const r34api = new (require('r34api.js'));

module.exports.run = async (bot, message, args) => {

    if (message.channel.nsfw) {
        const formats = ["jpg", 'png', 'gif'];
        const random = Math.floor(Math.random() * formats.length);
        var data = await r34api.random(1, formats[random])

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
                    
            return message.channel.send(embed);
        } catch (error) {
            embed = new Discord.MessageEmbed()
                    .setTitle('ERROR HANDLER')
                    .setDescription(`something happened, message this error to Starpelly. **"${error}"**`)
            return message.channel.send(embed);
        }
    } else {
        return message.channel.send('not in nsfw channel.');
    }
}

module.exports.config = {
    name: "r34",
    description: "generates a random slur",
    usage: "b!slur",
    accessableby: "Members",
    aliases: []
}