const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

const {c, cpp, node, python, java} = require('compile-run');

module.exports.run = async (bot, message, args) => {
    let words = args.join(' ');
    console.log(words)
    const sourcecode = words;
    let resultPromise = node.runSource(sourcecode);

    resultPromise()
        .then(result => {
            message.lineReply(result.stdout);
        })
        .catch(err => {
            // message.lineReply(err);
        });
}

module.exports.config = {
    name: "compile",
    description: "compiles js code",
    usage: "b!compile",
    accessableby: "Members",
    aliases: ['js']
}