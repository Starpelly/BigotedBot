const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const fetch = require('node-fetch');

let url = "https://uselessfacts.jsph.pl/random.json?language=en";
let settings = { method: "Get" };

module.exports.run = async (bot, message, args) => {
    try {
        const msg = await message.lineReply('Generating...');

        fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            message.lineReply(`${json.text}`)
        });
       
        return msg.delete();
    } catch (error) {
        console.log(error);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.config = {
    name: "fact",
    description: "random fact",
    usage: "b!fact",
    accessableby: "Members",
    aliases: ['fact']
}