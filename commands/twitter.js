const Discord = require("discord.js");
const { getPost, getImage } = require("random-reddit");
const botconfig = require("../botsettings.json");

var scraperjs = require('scraperjs');

module.exports.run = async (bot, message, args) => {
    scraperjs.StaticScraper.create('http://tweet.onerandom.com/')
	.scrape(function($) {
		return $('a').map(function() {
            return $(this).attr('href');
          }).get();
	})
	.then(function(news) {
		console.log(news);
        if (news[2].startsWith("https://twitter.com"))
        {
            if (!news[2].startsWith("https://twitter.com/hashtag"))
                return message.lineReply(news[2]);
        }
        else if (news[3].startsWith("https://twitter.com"))
        {
            if (!news[3].startsWith("https://twitter.com/hashtag"))
                return message.lineReply(news[3]);
        }
        else if (news[4].startsWith("https://twitter.com"))
        {
            if (!news[4].startsWith("https://twitter.com/hashtag"))
                return message.lineReply(news[4]);
        }
        else
            return message.lineReply(news[2]);
	})

}

module.exports.config = {
    name: "twitter",
    description: "generates a random slur",
    usage: "b!slur",
    accessableby: "Members",
    aliases: ['twt']
}