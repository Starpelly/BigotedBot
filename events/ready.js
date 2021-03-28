const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`ready`)
    // bot.user.setActivity('ur mom lol', {type: 'COMPETING'});
    bot.user.setActivity('b!help');

    bot.on('message', (message) => {
        if (message.author.bot) return;

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
        if (msg.includes('starpelly')) {
            message.reply('who is not gay, mind you!');
        }
        if (msg.includes('pelly')) {
            if (msg.includes('starpelly'))
            {} else
                message.reply('who is not gay, mind you!');
        }
        if(msg.includes(`🏳️‍🌈`))
        {
            message.reply('shut up fag');
        }
        if (msg.includes('gay'))
        {
            message.reply({files: ["./images/FAGGOT.mp4"]});
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
            message.channel.send('**L**ibery\n**G**od\n**B**eer\n**T**rump');
        }
    })
}