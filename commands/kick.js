const discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you do not have permissions to use this command');
    
    if (!target) return message.reply('please specify a member to kick!');
    if (!reason) return message.reply('please specify a reason for this kick!');
    
    let embed = new discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .addField('Kicked Member', `${target.user.username}`)
        .addField('Kicked By', `${message.author.username}`)
        .addField('Kicked Time', message.createdAt)
        .addField('Kicked At', message.channel)
        .addField('Kicked Reason', reason)
        .setFooter('Kicked user information', target.user.displayAvatarURL);
        
    message.channel.send(`${target.user.username} was kicked by ${message.author} for ${reason}`);
    target.kick(reason);
};

module.exports.help = {
    name: 'kick'
};
