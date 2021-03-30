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
    
        if (msg.includes('blm')) {
            message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
        }
        if (msg.includes('blacklivesmatter')) {
            message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
        }
        if (msg.includes('black lives')) {
            message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
        }
    
        if (msg.includes('transgender')) {
            message.reply({files: ["./images/her.jpg"]});
        }
        if (msg.includes('walrooose')) {
            message.reply('https://www.youtube.com/watch?v=-HSuGYt_mDo');
        }
        if(msg.includes(`🏳️‍🌈`))
        {
            message.reply('shut up fag');
        }
        if (msg.includes('gay'))
        {
            // message.reply({files: ["./images/FAGGOT.mp4"]});
        }
        if (msg.includes('homo'))
        {
            // message.reply({files: ["./images/FAGGOT.mp4"]});
        }
        if (msg.includes('rslur'))
        {
            message.reply('https://www.youtube.com/watch?v=U4KcRgJfsyw');
        }
        if (msg.includes('rword'))
        {
            message.reply('https://www.youtube.com/watch?v=U4KcRgJfsyw');
        }
        if(msg.includes('lgbt'))
        {
            message.channel.send('**L**iberty\n**G**od\n**B**eer\n**T**rump');
        }
        if (msg.includes('ban'))
        {
            // message.channel.send({files: ['./images/1984.png']});
        }
        if (msg.includes('suspen'))
        {
            message.channel.send({files: ['./images/1984.png']});
        }
        if (msg.includes('kys'))
        {
            message.channel.send('do it');
        }
        if (msg.includes('tranny'))
        {
            message.channel.send('based');
        }
        if (msg.includes('fag'))
        {
            message.channel.send('based');
        }
        if (msg.includes('nigger'))
        {
            message.channel.send('based');
        }
        if (msg.includes('nigga'))
        {
            message.channel.send('based');
        }
        if (msg.includes('cracker'))
        {
            message.channel.send('based');
        }
        if (msg.includes('crakka'))
        {
            message.channel.send('based');
        }
        if (msg.includes('chink'))
        {
            message.channel.send('based');
        }
        if (msg.includes('azusaw'))
        {
            message.channel.send('dude what the fuck');
        }
        if (msg.includes('meow'))
        {
            message.channel.send('kys');
        }
        if (msg.includes(':3'))
        {
            message.channel.send('kys');
        }
        if (msg.includes('asian'))
        {
            message.channel.send('i do not speak the arabic letters');
        }
        if (msg.includes('cum'))
        {
            message.channel.send({files: ["./images/cumcart.jpg"]});
        }
        if (msg.includes('dream'))
        {
            message.channel.send({files: ["./images/dream.png"]});
        }
        if (msg.includes('xd'))
        {
            message.channel.send('xd');
        }
        if (msg.includes('toshiba aimi')) {
            message.channel.send('stop fucking microwaves.');
        }
        if (msg.includes('toshiba')) {
            message.channel.send('stop fucking microwaves.');
        }
    })
}