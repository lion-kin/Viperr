const math = require('mathjs');
const randomPuppy = require('random-puppy');

const Discord = require('discord.js');

module.exports = {
    name: "calculate",
    description: "Get the answer to a math problem",


    async run (client, message, args){
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('ماشین حساب')
        .addField('سوال', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('جواب', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}