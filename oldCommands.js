command(client, 'serverinfo', (message) => {
    const { guild } = message

    const { name, region, memberCount, } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
        .setTitle(`Server info for "${name}"`)
        .setThumbnail(icon)
        .addFields(
            {
                name: 'Region',
                value: region,
            },
            {
                name: 'Members',
                value: memberCount,
            },
        )
        .setFooter('thats all you get im bored')

    message.reply('every bot has this right?', embed)
})

command(client, 'help', (message) => {
    message.reply(`my prefix is ${prefix}, you can figure out the rest`)
})

command(client, 'antitrans', async (message) => {

    const canvas = Canvas.createCanvas(400, 250)
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/trans.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const background2 = await Canvas.loadImage('./images/anti.png');
    ctx.drawImage(background2, 0, 0, canvas.width, canvas.height);


    const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg'}));
    ctx.drawImage(avatar, 95, 25, 200, 200);

    // Select the style that will be used to fill the text in
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;

    ctx.font = '38px Impact';
    ctx.strokeText('SAYS FUCK TRANS RIGHTS!', 4 , 245);
    ctx.fillText('SAYS FUCK TRANS RIGHTS!', 4 , 245);

    ctx.font = '60px Impact';

    ctx.textAlign = "center";
    // Actually fill the text with a solid color
    ctx.strokeText(message.author.username.toUpperCase(), 200 , 53);
    ctx.fillText(message.author.username.toUpperCase(), 200 , 53);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'anti-trans-pride.png');
    
    message.lineReply(attachment);
})

command(client, 'walroose', async (message) => {
    const canvas = Canvas.createCanvas(400, 250)
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./images/trans.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Select the style that will be used to fill the text in
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 4;

    ctx.font = '60px Arial';

    ctx.textAlign = "center";
    // Actually fill the text with a solid color
    ctx.strokeText(message.author.username.toUpperCase(), 200 , 147);
    ctx.fillText(message.author.username.toUpperCase(), 200 , 147);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'anti-trans-pride.png');
    
    message.lineReply(attachment);
})

command(client, 'superstraight', async (message) => {
    const canvas = Canvas.createCanvas(307, 307)
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg'}));
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage('./images/superstraight.png');
    ctx.drawImage(avatar, 0, 0, canvas.width, canvas.height);
    

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'superstraight-pride.png');
    
    message.lineReply(attachment);
})

command(client, 'slur', (message) => {
    const slurs = ["nigger", "faggot", "tranny", "coon", "cracker", 'crow', 'nazi', 'jap' , 'malon', 'nigro', 'walroose', 'monkey', 'redskin', 'OREO LAMOOOO'];
    const random = Math.floor(Math.random() * slurs.length);

    message.reply(slurs[random]);
})

command(client, 'fucksomeone', (message) => {
    message.reply('havent started yet lol');
})

client.on('message', (message) => {

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
    if(msg.includes('lgbt'))
    {
        message.lineReply('**L**ibery\n**G**od\n**B**eer\n**T**rump');
    }
})