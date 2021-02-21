const Discord = require('discord.js');



const client = new Discord.Client();

const { token, default_prefix } = require('./config.json');

const { readdirSync } = require('fs');

var cheerio = require("cheerio"); /* Used to extract html content, based on jQuery || install with npm install cheerio */
var request = require("request"); /* Used to make requests to URLs and fetch response  || install with npm install request */

const { join } = require('path');

const config = require('./config.json');
client.config = config;

const leveling = require('discord-leveling');

const db = require('quick.db');


function emoji (id) {
    return client.emoji.get(id).toString();
}
 
var http = require('http');

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(8080);

client.commands= new Discord.Collection();
//You can change the prefix if you like. It doesn't have to be ! or ;
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () => {
    console.log('I am ready');
    client.user.setActivity(`=help for see commands`, {type : "LISTENING"})
    
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = await db.get(`prefix_${message.guild.id}`);
    if(prefix === null) prefix = default_prefix;

    let profile = await leveling.Fetch(message.author.id);
    leveling.AddXp(message.author.id, 15);
    
    if (message.content === `${prefix}user-info`) {
        message.channel.send({embed: {
            color: "RANDOM",
            description: `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
          }});
          let afkcheck = bot.afk.get(message.author.id);
          if (afkcheck) return [bot.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000))];
    }
      if (message.content === `${prefix}user-info`) {
        message.channel.send({embed: {
            color: "RANDOM",
            description: `Your username: ${message.author.username}\nYour ID: ${message.author.id}`
          }});
          let afkcheck = bot.afk.get(message.author.id);
          if (afkcheck) return [bot.afk.delete(message.author.id), message.reply(`you have been removed from the afk list!`).then(msg => msg.delete(5000))];
    }
    if (message.content === "heart"){
        message.react('❤');
        message.react('💙');
        message.react('🧡');
        message.react('💛');
        message.react('💜');
        message.react('🤍');
        message.react('🖤');
        message.react('🤎');
    }
    if (message.content === "clap"){
        message.react('👏');
        message.react('👏🏻');
        message.react('👏🏽');
        message.react('👏🏿');
    }
          if (message.content === `${prefix}invite`){
            const inviter = new Discord.MessageEmbed()
            .setTitle("invite")
            .setAuthor("Hitler", "https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
            .setColor("RANDOM")
            .setDescription("")
            .setFooter('', "https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
            .setImage("https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
            .setThumbnail("https://cdn.discordapp.com/attachments/739771551229935736/779752365342851103/20201103_125412.jpg")
            
            .setTimestamp()
            .setURL("https://discord.js.org/#/docs/main/v12/class/MessageEmbed")
            .addFields({ name: "\u200b",
                value: "https://discord.gg/B3DnbsqUpZ", inline: false })
            .addFields({ name: "\u200b",
                value: "👨‍👧 Mokhtalet 👨‍👧", inline: false })
            .addFields({ name: "\u200b",
                value: "🔞 NSFW 🔞", inline: false })
            .addFields({ name: "\u200b",
                value: "⭕️ Cheat و Hack ⭕️", inline: false })
            .addFields({ name: "\u200b",
                value: "🎮 Game 🎮", inline: false })
            .addFields({ name: "\u200b",
                value: "Va … va ... va …", inline: false })
            .addFields({ name: "\u200b",
                value: "why you bully me !!?!", inline: false })
            .addFields({ name: "\u200b",
                value: "BODO BIA 🏃‍♂️", inline: false });
            
    
            message.channels.author.send(inviter);
          }

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})
client.on("message", function(message) {
 
    var parts = message.content.split(" "); // Splits message into an array for every space, our layout: "<command> [search query]" will become ["<command>", "search query"]
 
    /* Simple command manager */
    if (parts[0] === "=image") { // Check if first part of message is image command
 
        // call the image function
        image(message, parts); // Pass requester message to image function
 
    }
 
});
 
function image(message, parts) {
 
    /* extract search query from message */
 
    var search = parts.slice(1).join(" "); // Slices of the command part of the array ["!image", "cute", "dog"] ---> ["cute", "dog"] ---> "cute dog"
 
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };
    request(options, function(error, response, responseBody) {
        if (error) {
            // handle error
            return;
        }
 
        /* Extract image URLs from responseBody using cheerio */
 
        $ = cheerio.load(responseBody); // load responseBody into cheerio (jQuery)
 
        // In this search engine they use ".image a.link" as their css selector for image links
        var links = $(".image a.link");
 
        // We want to fetch the URLs not the DOM nodes, we do this with jQuery's .attr() function
        // this line might be hard to understand but it goes thru all the links (DOM) and stores each url in an array called urls
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
        console.log(urls);
        if (!urls.length) {
            // Handle no results
            return;
        }
 
        // Send result
        message.channel.send( urls[0] );
    });
 
}

client.login(token);
