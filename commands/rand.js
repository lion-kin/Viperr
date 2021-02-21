const Discord = require('discord.js');
module.exports = {
    name: "?",
    description: "random message",


    async run (client, message, args){
        if(!args[0]) return message.channel.send('😐');
        if(args[1]) return message.channel.send('چی??');
        var facts = ["آره", "نه", "شاید"];
        var fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact]);

    }

}
