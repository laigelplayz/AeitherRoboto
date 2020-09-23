const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

return message.channel.send({embed: {
color: 15158332,
title: ":ping_pong: Pong",
description: `${Date.now() - message.createdTimestamp}ms\nAeither Roboto Latency`,
}
})
}

module.exports.config = {
name: "ping",
aliases: []
}
