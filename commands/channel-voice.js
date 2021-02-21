const Discord = require('discord.js')
module.exports = {
    name: "createvchannel",
    description: "...",

    async run (client, message, args){
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You don\'t have permission to execute this command');
    if(!args[0]) return message.channel.send('Please incudle a name for the channel after the command');
    message.guild.channels.create(args.slice(0).join(" "), {type: 'voice'}), message.channel.send('channel succesfully created');
}
}