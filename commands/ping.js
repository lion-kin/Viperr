const Discord = require('discord.js')
const randomPuppy = require('random-puppy');

module.exports = {
    name: "ping",
    description: "test command",

    async run (client, message, args) {
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]


        const ping = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`🏓\`${client.ws.ping}\`ms`);


        message.channel.send(ping);
    }
}