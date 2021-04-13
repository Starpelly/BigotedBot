const Discord = require("discord.js")
const chalk = require('chalk')
const client = new Discord.Client();

var mute;
var mutedTimes = 0;

module.exports = bot => { 

    console.log(`ready`)
    // bot.user.setActivity('ur mom lol', {type: 'COMPETING'});
    bot.user.setActivity('b!help');

    bot.on('message', (message) => {
        msg = message.content.toLowerCase();
        /*if (msg.includes('b!mute'))
        {
            mute = true;
            mutedTimes += 1;
            message.channel.send('bot is muted');
        } else if (msg.includes('b!unmute'))
        {
            mute = false;
            message.channel.send('bot is unmuted');
        }
        if (mute == true) return;
        console.log(mute);*/
        if (message.author.bot) return;
         // const { guild } = message
         // const { name, region, memberCount, } = guild

         // console.log(chalk.red(name)+ ' >> ' + chalk.yellowBright(message.channel.name) + ' >> ' + chalk.greenBright(message.author.username) + ": " + message.content);

         
        if (msg.includes('michigun'))
        {
            // message.channel.send('∆∆∆');
        }
    
        if (msg.includes('blm')) {
            message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
        }
        if (msg.includes('blacklivesmatter')) {
            message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
        }
        if (msg.includes('black lives')) {
              message.reply('paper beats rock', {files: ["https://pm1.narvii.com/6687/838332442a6553467f57b045da3d2e9cfccb4c75_hq.jpg"]});
        }
    
        if (msg.includes('trans')) {
              message.reply({files: ["./images/based.png"]});
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
              if (message.member.id == '366303675792097291') return;
              message.reply({files: ["./images/FAGGOT.mp4"]});
        }
        if (msg.includes('homo'))
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
              message.channel.send('**L**iberty\n**G**od\n**B**eer\n**T**rump');
        }
        if (msg.includes('ban'))
        {
              message.channel.send({files: ['./images/1984.png']});
        }
        if (msg.includes('suspen'))
        {
              message.channel.send({files: ['./images/1984.png']});
        }
        if (msg.includes('kys'))
        {
              message.channel.send('fucking do it you fucking faggot put a bullet through your skull, hang yourself. nobody loves you, you are worth nothing. the only way you can make things right is to kill yourself so please do it.');
        }
        if (msg.includes('tranny'))
        {
              message.channel.send('based');
        }
        if (msg.includes('fag'))
        {
            if (msg.includes('fagguette')) {
                
            } else {
                  message.channel.send('based');
            } 
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
        if (msg.includes('husband')) {
              message.channel.send({files: ['./images/1984.png']});
        }
        if (msg.includes('crazen')) {
              message.channel.send('https://www.youtube.com/watch?v=izoxbpt-pRM');
        }
        if (msg.includes('trannie')) {
              message.channel.send('based');
        }
        if (msg.includes('negro')) {
              message.channel.send('based');
        }
        if (msg.includes('dza')) {
              message.channel.send('fucking tranny.');
              message.channel.send('https://en.m.wikipedia.org/wiki/List_of_ethnic_slurs');
        }
        if (msg.includes('black')) {
              message.channel.send({files: ['./images/POLITICS-10.jpg']});
        }
        if (msg.includes('white')) {
              message.channel.send({files: ['./images/POLITICS-20.png']});
        }
        if (msg.includes('frank ocean')) {
            message.react('😂')
              message.channel.send({files: ['./images/trollface.png']});
            //message.channel.send(emoji('692557626378289232'));
        }
        if (msg.includes('fagguette'))
        {
              message.channel.send(`Putain, qu'est-ce que tu viens de dire à propos de moi, petite salope? Je vais vous faire savoir que j'ai obtenu mon diplôme en tête de ma classe dans les Navy Seals, et j'ai été impliqué dans de nombreux raids secrets sur Al-Quaida, et j'ai plus de 300 victimes confirmées. Je suis formé à la guerre des gorilles et je suis le meilleur tireur d'élite de toutes les forces armées américaines. Vous n'êtes rien pour moi mais juste une autre cible. Je vais vous effacer avec une précision qui n'a jamais été vue auparavant sur cette Terre, marquez mes putains de mots. Vous pensez que vous pouvez vous en tirer en me disant cette merde sur Internet? Détrompez-vous, putain. Au moment où nous parlons, je contacte mon réseau secret d'espions à travers les États-Unis et votre adresse IP est en cours de traçabilité afin que vous vous prépariez mieux à la tempête, asticot. La tempête qui anéantit la petite chose pathétique que vous appelez votre vie. Tu es putain de mort, gamin. Je peux être n'importe où, n'importe quand, et je peux te tuer de plus de sept cents façons, et c'est juste de mes mains nues. Non seulement je suis largement entraîné au combat à mains nues, mais j'ai accès à tout l'arsenal du Corps des Marines des États-Unis et je vais l'utiliser dans toute sa mesure pour essuyer votre misérable cul de la face du continent, espèce de petite merde. Si seulement vous aviez pu savoir quel châtiment impie votre petit commentaire "intelligent" était sur le point de vous faire subir, peut-être que vous auriez tenu votre putain de langue. Mais tu ne pouvais pas, tu ne l'as pas fait, et maintenant tu en paies le prix, putain d'idiot. Je vais faire chier la fureur partout sur vous et vous vous noyer dedans. Tu es putain de mort, gamin.`);
        }
        if (msg.includes('🏳️‍⚧️'))
        {
              message.react('❌');
        }
        if (msg.includes('kumato'))
        {
              message.reply('i love you faggot uwu');
        }
    })
}