const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    try {
        const slurs = ["nigger", "faggot", "tranny", "coon", "cracker", 'crow', 'jap' , 'malon', 'nigro', 'walroose', 'monkey', 'redskin', 'OREO LAMOOOO', 'geometry dash player',
        'afro engineering', 'nigger rigging', 'ah chac', 'ali baba', 'alligator bait', 'alpine serb', 'ang mo', 'ape',
        'milkshake', 'pepsi', 'banana', 'barbanian', 'bohunk', 'bong', 'creo music', 'brownie', 'buddhahead', 'chankoro', 'charlie', 'cheesehead', 'ching chong', 'chinaman', 'chink', 'chinky',
        'chonky', 'big chungus', 'cholo', 'cokin', 'coconut', 'coolie', 'coon', 'cracker', 'dink', 'dogan', 'dothead', 'dune coon', 'darkie', 'darky', 'darkey', 'turkey', 'frog', 'fuzzy-wuzzy', 'gammon',
        'gans', 'godon', 'gook', 'goombah', 'gora', 'meganeko', 'greaseball', 'gringo', 'groid', 'guiri', 'guinea', 'half-breed', 'hick', 'hike', 'hory'];
        const random = Math.floor(Math.random() * slurs.length);
    
        return message.reply(slurs[random]);
    } catch (error) {
        
    }

}

module.exports.config = {
    name: "slur",
    description: "generates a random slur",
    usage: "b!slur",
    accessableby: "Members",
    aliases: []
}