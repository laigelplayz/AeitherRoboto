const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You Don't Have Enough Permission To Use This")
	let amount = args.slice(2).join(" ")
	if(!amount) return message.channel.send("Please Enter A Valid Amount")
	if(isNaN(amount)) return message.channel.send("Please Enter A Valid Amount")
	
	let user = message.mentions.users.first()
	if(!user) return message.channel.send("Please Mention A User!")
	
	await db.add(`points_${user.id}`, amount)
	let pts = db.fetch(`points_${user.id}`)
	
	let embed = new Discord.MessageEmbed()
	.setTitle("Aeither Points")
	.setDescription (`Added ${amount} Points To ${user}\nThey Now Have ${pts}`)
	.setTimestamp()
	.setColor("RANDOM")
	message.channel.send(embed)
}
module.exports.config = {
	name: "addpoints",
	aliases: []
}