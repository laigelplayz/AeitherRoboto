const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

return message.channel.send({embed: {
color: 15158332,
title: "Pong",
description: `${Date.now() - message.createdTimestamp}\ms`,
footer: {
text: client.user.username + "Quack"
}
}
})
}

module.exports.config = {
name: "ping",
aliases: []
}
i
