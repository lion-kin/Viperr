const Discord = require('discord.js')
const randomPuppy = require('random-puppy');

module.exports = {
    name: "clear",
    description: "Clears messages",

    async run (client, message, args) {

         const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const amount = args.join(" ");

        if(!amount) return message.reply('please provide an amount of messages for me to delete')

        if(amount > 100) return message.reply(`you cannot clear more than 100 messages at once`)

        if(amount < 1) return message.reply(`you need to delete at least one message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});

    const seq = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription('Success!');

    message.channel.send(seq)

    }
}