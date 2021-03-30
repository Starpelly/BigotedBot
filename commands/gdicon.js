const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    try {
        const msg = await message.channel.send('Generating...');

        var form = ['cube', 'ship', 'ball', 'ufo', 'wave', 'robot', 'spider']
        var randomForm = Math.floor(Math.random() * form.length);

        var glow = getRandomInt(2);
        var colors1 = getRandomInt(42);
        var colors2 = getRandomInt(42);

        var icons = getRandomInt(150);

        switch (form[randomForm]) {
            case 'cube':
                icons = getRandomInt(150);
                break;
            case 'ship':
                icons = getRandomInt(52);
                break;
            case 'ball':
                icons = getRandomInt(44);
                break;
            case 'ufo':
                icons = getRandomInt(36);
                break;
            case 'wave':
                icons = getRandomInt(36);
                break;
            case 'robot':
                icons = getRandomInt(27);
                break;
            case 'spider':
                icons = getRandomInt(18);
                break;
        }
    
        var randomIcon = `https://gdbrowser.com/icon/noUser?form=${form[randomForm]}&icon=${icons}&col1=${colors1}&col2=${colors2}&glow=${glow}` + '.png';
    
        embed = new Discord.MessageEmbed()
            .setTitle(`Random GD Icon`)
            .setImage(randomIcon)
            .setFooter(`form: ${form[randomForm]}\ncolor1: ${colors1}\ncolor2: ${colors2}`)
        message.channel.send(embed);
        return msg.delete();
    } catch (error) {
        console.log(error);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.config = {
    name: "gdicon",
    description: "generates a random geometry dash icon",
    usage: "b!gdicon",
    accessableby: "Members",
    aliases: ['gd']
}