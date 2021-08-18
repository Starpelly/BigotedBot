let url =  "http://localhost:3000/slurs/random";
let settings = { method: "Get"};

module.exports.run = async (bot, message, args) => {
    try {
        fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            return message.lineReply(json.slur);
        });

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