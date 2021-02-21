const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('مدیریتی')
        .setColor("RANDOM")
        .addField('`=kick`', 'یک نفر رو کیک کن')
        .addField('`=ban`', 'یک نفر رو بن کن')
        .addField('`=clear`', 'تا سی مسیج رو پاک کن')
        .addField('`=createchannel`', 'یک چنل بساز')
        .addField('`=createvchannel`', 'یک چنل صوتی بساز')
        .addField('`=warn`', 'به یک نفر وارن بده')
        .addField('`=warnings`', 'وارن های یک نفر رو ببین')
        .addField('`=deletewarns`', 'وارن های یک نفر رو دیلیت کن')
        .addField('`=setprefix`', 'پریفیکس بات رو برای سرورت عوض کن')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('فان')
        .setColor("RANDOM")
        .addField('`=meme`', 'یک میم ببین')
        .addField('`=ascii`', 'متنت رو خطی کن')
        .addField('`=say`', 'یه چیزی بگو تا بات برات بگه')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('کاربردی')
        .setColor("RANDOM")
        .addField('`=calculate`', 'یک ماشین حساب خوشگل' )
        .addField('`=ping`', 'پینگ بات رو ببین')
        .addField('`=weather`', 'اب و هوای شهر یا کشورتو ببین')
        .addField('`=covid`', 'وضعیت کرونا تو کشورتو ببین')
        .addField('`=level`', 'لولت رو ببین')
        .addField('`=avatar`', 'عکس پروفایل هر کسی که میخوای رو بگیر')
        .addField('`=user-info`', 'اطلاعات هر کسی که میخوای رو ببین')
        .setTimestamp()
        
        const Bazar = new Discord.MessageEmbed()
        .setTitle('بازار')
        .setColor("RANDOM")
        .addField('`=store`', 'فروشگاه امروز رو ببین' )
        .addField('`=buy`', 'یک چیزی بخر')
        .addField('`=work`', 'کار کن')
        .addField('`=inventory`', 'دارایی هات رو ببین')
        .addField('`=bal`', 'عسل بفروش')
        .addField('`=daily`', 'جایزه روزانت رو بگیر')
        .setTimestamp()


        const pages = [
                moderation,
                fun,
                utility,
                Bazar
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}