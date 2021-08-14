const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');
const fs = require('fs');
const paginationEmbed = require('discord.js-pagination');

module.exports.run = async (bot, message, args) => {

    const words = args.join(' ');

    if (words == "list")
    {
        fs.readFile('funnyjokes.json', (err, data) => {
            if (err) return message.lineReply("done");
            var json = JSON.parse(data);

            let joke = [

            ]

            let jokeLength = json.jokes.reverse().length;
            if (jokeLength > 50)
                jokeLength = 50;

            if (json.jokes.length > 0)
            {
                for (let i = 0; i < jokeLength; i++) {
                    var embed = new Discord.MessageEmbed()
                    .setAuthor(json.jokes[i].username, json.jokes[i].pfp)
                    .setColor(`#111248`)
                    .setDescription(json.jokes[i].message)
                    .setImage(json.jokes[i].media)
                    .setFooter(`Number of total jokes: ${json.jokes.length}`)
    
                    joke.push(embed);
                }
    
                return paginationEmbed(message, joke);
            }
            else
            {
                return message.lineReply("no jokes in list");
            }
        })
    }
    else if (words == "random")
    {
        fs.readFile('funnyjokes.json', (err, data) => {
            if (err) return message.lineReply("done");
            var json = JSON.parse(data);

            let j = getRandomInt(json.jokes.length);

            if (json.jokes.length > 0)
            {
                var embed = new Discord.MessageEmbed()
                .setAuthor(json.jokes[j].username, json.jokes[j].pfp)
                .setColor(`#111248`)
                .setDescription(json.jokes[j].message)
                .setImage(json.jokes[j].media)
                .setFooter(`Number of total jokes: ${json.jokes.length}`)

                return message.lineReply(embed);
            }
            else
            {
                return message.lineReply("no jokes in list");
            }
        })
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
            
            var obj = {
                jokes: []
            };
    
            obj.jokes.push({message: messageText, messageCreator: result.name})
            var json = JSON.stringify(obj);
    
            fs.readFile('funnyjokes.json', 'utf8', function readFileCallback(err, data) {
                if (err)
                    return message.lineReply(err);
                else {
                    obj = JSON.parse(data);
                    obj.jokes.push({message: messageText, pfp: user.displayAvatarURL({ format: 'jpg'}), username: user.username, media: messageAttachment});
                    json = JSON.stringify(obj, null, 4);
                    fs.writeFile('funnyjokes.json', json, 'utf8', function(err) {});
                    return message.lineReply(`${user.username} has their joke added!`);
                }
            })
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