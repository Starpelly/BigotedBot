const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
const Canvas = require('canvas');

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first();

    if (user === undefined) {
        return message.channel.send('please choose who you want to fight and run the command again');
    }

    const multiply = 4;
    var player1health = 48;
    var player2health = 28;

    const canvas = Canvas.createCanvas(240*multiply, 160*multiply)
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const background = await Canvas.loadImage('./images/pokemon/arena.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


    // ctx.imageSmoothingEnabled = true;
    const p1 = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png'}));
    ctx.drawImage(p1, 44*multiply, 93+40*multiply, 50*multiply, 50*multiply);
    
    const p2 = await Canvas.loadImage(user.displayAvatarURL({ format: 'png'}));
    ctx.drawImage(p2, 154*multiply, 21*multiply, 50*multiply, 50*multiply);


    const bgui = await Canvas.loadImage('./images/pokemon/arena_ui_back.png');
    ctx.drawImage(bgui, 0, 0, canvas.width, canvas.height);

    const ui = await Canvas.loadImage('./images/pokemon/arena_ui.png');
    ctx.drawImage(ui, 0, 0, canvas.width, canvas.height);

    // player1 health bar

    var player1fillcolor_1 = '#58d080';
    var player1fillcolor_2 = '#70f8a8';

    if (player1health < 32) 
    {
        player1fillcolor_1 = '#dea801';
        player1fillcolor_2 = '#f8dd2d';
    }
    if (player1health <= 14)
    {
        player1fillcolor_1 = '#af3030';
        player1fillcolor_2 = '#ff5c29';
    }

    ctx.beginPath();
    ctx.fillStyle = player1fillcolor_1;
    ctx.rect(174*multiply, 91*multiply, player1health*multiply, 1*multiply);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = player1fillcolor_2;
    ctx.rect(174*multiply, 92*multiply, player1health*multiply, 1*multiply);
    ctx.fill();


    // player2 health bar

    var player2fillcolor_1 = '#58d080';
    var player2fillcolor_2 = '#70f8a8';

    if (player2health < 32) 
    {
        player2fillcolor_1 = '#dea801';
        player2fillcolor_2 = '#f8dd2d';
    }
    if (player2health <= 14)
    {
        player2fillcolor_1 = '#af3030';
        player2fillcolor_2 = '#ff5c29';
    }

    ctx.beginPath();
    ctx.fillStyle = player2fillcolor_1;
    ctx.rect(52*multiply, 33*multiply, player2health*multiply, 1*multiply);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = player2fillcolor_2;
    ctx.rect(52*multiply, 34*multiply, player2health*multiply, 1*multiply);
    ctx.fill();


    const battle_ui = await Canvas.loadImage('./images/pokemon/arena_battle_ui_choose.png');
    ctx.drawImage(battle_ui, 0, 0, canvas.width, canvas.height);

    ctx.font = '30px Arial';
	ctx.fillStyle = '#000000';
	ctx.fillText(message.author.username, 143*multiply, 85*multiply);
    ctx.fillText(20, 211*multiply, 85*multiply);

    ctx.font = '30px Arial';
	ctx.fillStyle = '#000000';
	ctx.fillText(user.username, 20*multiply, 27*multiply);
    ctx.fillText(20, 89*multiply, 27*multiply);

    // message box
    ctx.font = '30px Arial';
	ctx.fillStyle = '#000000';
	ctx.fillText(`What should ${message.author.username} do?`, 16*multiply, 127*multiply);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'fight.png');
    message.reply(`reply with "fight" or "run" to continue \n(${message.author.username}'s turn)`, attachment);
}

module.exports.config = {
    name: "fight",
    description: "fight command",
    usage: "fight",
    accessableby: "Members",
    aliases: ['f']
}