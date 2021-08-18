const Discord = require('discord.js');
const botsettings = require('./botsettings.json');
require('discord-reply');
const bot = new Discord.Client({disableEveryone: true});

require("./util/eventHandler")(bot);

const fs = require("fs");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.on('open', () => console.log('connected to database'));

app.use(express.json());

const jokesRouter = require('./routes/jokes');
app.use('/jokes', jokesRouter);

const slursRouter = require('./routes/slurs');
app.use('/slurs', slursRouter);

app.get('/', (req, res) => res.send("bigoted bot api bullshit"))

fs.readdir("./commands/", (err, files) => {
    
    if(err) console.log(err)
    
    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }
    
    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    
    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)
    
})

app.set('json spaces', 2)
bot.login(process.env.token || botsettings.token);
app.listen(process.env.PORT || 3000, () => console.log("server started"));