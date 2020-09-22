const Discord = require("discord.js")
const config = require("./config.json")
const client = new Discord.Client({disableEveryone: true})


bot.login(config.token)
