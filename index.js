const Discord = require("discord.js")
const config = require("./config.json")
const client = new Discord.Client({disableEveryone: true})

client.on('message', async message {
let prefix = "+"
if(message.content.startsWith(`${prefix}ping`){
return message.channel.send("Pong")
}
bot.login(config.token)
