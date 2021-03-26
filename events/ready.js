const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`ready`)
    bot.user.setActivity('ur mom lol', {type: 'COMPETING'});

    bot.on('message', (message) => {
        msg = message.content.toLowerCase();
    
        switch (msg) {
            case 'blm':
                message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
                break;
            case 'blacklivesmatter':
                message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
                break;
            case 'black lives matter':
                message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
                break;
        }
    
        if (msg.includes('her')) {
            message.reply({files: ["./images/her.jpg"]});
        }
        if (msg.includes('walroose')) {
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
    })
}