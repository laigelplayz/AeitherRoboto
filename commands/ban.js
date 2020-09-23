const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you do not have permissions to use this command!s');
    
    if (!target) return message.reply('please specify a member to ban!');
    if (!reason) return message.reply('please specify a reason for this ban!');
    
    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .addField('Banned Member', `${target.user.username}`)
        .addField('Banned By', `${message.author.username}`)
        .addField('Banned Time', message.createdAt)
        .addField('Banned At', message.channel)
        .addField('Banned Reason', reason)
        .setFooter('Banned user information', target.user.displayAvatarURL);
        
    message.channel.send(`${target.user.username} was banned by ${message.author} for ${reason}`);
    target.ban(reason);
    
};

module.exports.help = {
    name: 'ban'
};
