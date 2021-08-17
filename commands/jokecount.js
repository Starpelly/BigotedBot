const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');
const fs = require('fs');
const paginationEmbed = require('discord.js-pagination');

let url =  `${process.env.URL}/jokes/` || "http://localhost:3000/jokes/";
let settings = { method: "Get"};

module.exports.run = async (bot, message, args) => {

    const words = args.join(' ');

    if (words == "list")
    {
        fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let joke = [

            ]

            let jokeLength = json.reverse().length;
            if (jokeLength > 50)
                jokeLength = 50;

            if (json.length > 0)
            {
                for (let i = 0; i < jokeLength; i++) {
                    var embed = new Discord.MessageEmbed()
                    .setAuthor(json[i].username, json[i].pfp)
                    .setColor(`#111248`)
                    .setDescription(json[i].message)
                    .setImage(json[i].media)
                    .setFooter(`Number of total jokes: ${json.length}`)
    
                    joke.push(embed);
                }
    
                return paginationEmbed(message, joke);
            }
            else
            {
                return message.lineReply("no jokes in list");
            }
        });
    }
    else if (words == "random")
    {
        fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let j = getRandomInt(json.length);

            if (json.length > 0)
            {
                var embed = new Discord.MessageEmbed()
                .setAuthor(json[j].username, json[j].pfp)
                .setColor(`#111248`)
                .setDescription(json[j].message)
                .setImage(json[j].media)
                .setFooter(`Number of total jokes: ${json.length}`)

                return message.lineReply(embed);
            }
            else
            {
                return message.lineReply("no jokes in list");
            }
        });
    }
    else
    {
        if (message.reference)
        {
            var refMessage = message.reference;
            let refer = message.channel.messages.fetch(refMessage.messageID);
            const user = message.mentions.users.first() || message.author;
    
            let result = await refer;
            let messageText = result.content;

            if (isImgLink(result.content)) {
                messageAttachment = result.content;
                messageText = "";
            } else {
                messageAttachment = result.attachments.size > 0 ? result.attachments.array()[0].url : null
            }
            

            var jokes = {}

            jokes = {password: "sugmacock", message: messageText, pfp: user.displayAvatarURL({ format: 'jpg'}), username: user.username, media: messageAttachment};
            json = JSON.stringify(jokes, null, 4);
    
            fetch(url, { method: 'post', body: json, headers: { 'Content-Type': 'application/json' }})
            .then(res => {
                if (res.ok) {
                    return message.lineReply(`${user.username} has their joke added!`);
                } else {
                    return message.lineReply(`Error code: ${res.status}`);
                }
            });
        }
        else
        {
            return message.lineReply("This command only works with replied messages.");
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function isImgLink(url) {
    if(typeof url !== 'string') return false;
    return(url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null);
}

module.exports.config = {
    name: "joke",
    description: "funny",
    usage: "b!jokecount",
    accessableby: "Members",
    aliases: ['j']
}