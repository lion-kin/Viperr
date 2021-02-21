const { MessageFlags } = require("discord.js");
const Discord = require('discord.js')
const randomPuppy = require('random-puppy');

module.exports = {
    name: "react",
    desciption: "react command",

    async run (client, message, args) {
      message.delete
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
         msg = args.slice(1).join(" ");
         msgg = args.join(" ");
        kio = await  message.channel.send(`${msgg}`);
            setTimeout(() => {
    // Edit msg 20 seconds later
    kio.react(msg);
  }, 1000)
    }
}