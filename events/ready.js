const Discord = require("discord.js")
const chalk = require('chalk')

module.exports = bot => { 
    console.log(`ready`)
    // bot.user.setActivity('ur mom lol', {type: 'COMPETING'});
    bot.user.setActivity('b!help');

    bot.on('message', (message) => {
        if (message.author.bot) return;

        // const { guild } = message
        // const { name, region, memberCount, } = guild

        // console.log(chalk.red(name)+ ' >> ' + chalk.yellowBright(message.channel.name) + ' >> ' + chalk.greenBright(message.author.username) + ": " + message.content);

        msg = message.content.toLowerCase();

        if (msg.includes('michigun'))
        {
            // message.channel.send('∆∆∆');
        }
    
        if (msg.includes('blm')) {
            return message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
        }
        if (msg.includes('blacklivesmatter')) {
            return message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
        }
        if (msg.includes('black lives')) {
            return message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
        }
    
        if (msg.includes('transgender')) {
            return message.reply({files: ["./images/her.jpg"]});
        }
        if (msg.includes('walrooose')) {
            return message.reply('https://www.youtube.com/watch?v=-HSuGYt_mDo');
        }
        if(msg.includes(`🏳️‍🌈`))
        {
            return message.reply('shut up fag');
        }
        if (msg.includes('gay'))
        {
            return // message.reply({files: ["./images/FAGGOT.mp4"]});
        }
        if (msg.includes('homo'))
        {
            return // message.reply({files: ["./images/FAGGOT.mp4"]});
        }
        if (msg.includes('rslur'))
        {
            return message.reply('https://www.youtube.com/watch?v=U4KcRgJfsyw');
        }
        if (msg.includes('rword'))
        {
            return message.reply('https://www.youtube.com/watch?v=U4KcRgJfsyw');
        }
        if(msg.includes('lgbt'))
        {
            return message.channel.send('**L**iberty\n**G**od\n**B**eer\n**T**rump');
        }
        if (msg.includes('ban'))
        {
            return // message.channel.send({files: ['./images/1984.png']});
        }
        if (msg.includes('suspen'))
        {
            return message.channel.send({files: ['./images/1984.png']});
        }
        if (msg.includes('kys'))
        {
            return message.channel.send('do it');
        }
        if (msg.includes('tranny'))
        {
            return message.channel.send('based');
        }
        if (msg.includes('fag'))
        {
            return message.channel.send('based');
        }
        if (msg.includes('nigger'))
        {
            return message.channel.send('based');
        }
        if (msg.includes('nigga'))
        {
            return message.channel.send('based');
        }
        if (msg.includes('cracker'))
        {
            return message.channel.send('based');
        }
        if (msg.includes('crakka'))
        {
            return message.channel.send('based');
        }
        if (msg.includes('chink'))
        {
            return message.channel.send('based');
        }
        if (msg.includes('azusaw'))
        {
            return message.channel.send('dude what the fuck');
        }
        if (msg.includes('meow'))
        {
            return message.channel.send('kys');
        }
        if (msg.includes(':3'))
        {
            return message.channel.send('kys');
        }
        if (msg.includes('asian'))
        {
            return message.channel.send('i do not speak the arabic letters');
        }
        if (msg.includes('cum'))
        {
            return message.channel.send({files: ["./images/cumcart.jpg"]});
        }
        if (msg.includes('dream'))
        {
            return message.channel.send({files: ["./images/dream.png"]});
        }
        if (msg.includes('xd'))
        {
            return message.channel.send('xd');
        }
        if (msg.includes('toshiba aimi')) {
            return message.channel.send('stop fucking microwaves.');
        }
        if (msg.includes('toshiba')) {
            return message.channel.send('stop fucking microwaves.');
        }
        if (msg.includes('husband')) {
            return message.channel.send({files: ['./images/1984.png']});
        }
        if (msg.includes('crazen')) {
            return message.channel.send('https://www.youtube.com/watch?v=izoxbpt-pRM');
        }
    })
}