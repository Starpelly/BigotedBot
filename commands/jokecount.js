const Discord = require("discord.js")
const client = new Discord.Client();
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');
const fs = require('fs');
const paginationEmbed = require('discord.js-pagination');

let url = `${process.env.URL}/jokes/` || "http://localhost:3000/jokes/";
let settings = { method: "Get"};

module.exports.run = async (bot, message, args) => {

    const words = args.join(' ').trim().split(/ +/);

    const userMentioned = getUserFromMention(args[0]);

    if (!userMentioned) 
    {
        if (words == "list")
        {
            fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                let joke = [
    
                ]
    
                let jokeLength = json.reverse().length;
                if (jokeLength > 150)
                    jokeLength = 150;
    
                if (json.length > 0)
                {
                    // const { displayAvatarURL } = await client.fetchUser(json[i].userID)

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
    
                jokes = {password: "niggafag123", message: messageText, username: user.username, media: messageAttachment, userID: user.id};
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
    else
    {
        fetch(`${url}${userMentioned.user.id}`, settings)
            .then(res => res.json())
            .then((json) => {
                let joke = [
    
                ]

                if (json.length > 0)
                {
                    for (let i = 0; i < json.reverse().length; i++) {
                        var embed = new Discord.MessageEmbed()
                        .setAuthor(userMentioned.user.username, userMentioned.user.displayAvatarURL({ format: 'jpg'}))
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
                    return message.lineReply("this user has no jokes, fucking loser lmaoooo");
                }
            });
        // if (userMentioned.userID.id)
        // return message.lineReply(`${userMentioned.user.id}`);
    }

    function getUserFromMention(mention) {
        if (!mention) return;
    
        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);
            
            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }
    
            return message.guild.members.cache.get(mention);
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