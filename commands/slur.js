let url =  `${process.env.URL}/slurs/` || "http://localhost:3000/slurs/";
let settings = { method: "Get"};

module.exports.run = async (bot, message, args) => {
    try {
        let res_;
        fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            const random = Math.floor(Math.random() * json.length);
            return message.lineReply(json[random].slur);
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