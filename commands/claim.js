const db = require("quick.db")
const ms = require("parse-ms")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
	let timeout = 1800000
	let amount = 1
	
	let claimed = await db.fetch(`claim_${message.author.id}_${message.guild.id}`)
	
	if(claimed !== null && timeout - (Date.now() - claimed) > 0) {
		let time = ms(timeout - (Date.now() - claimed))
		return message.channel.send(`You Can Claim Again In ${time.minutes}m ${time.seconds}s!`)
	} else {
		db.add(`points_${message.author.id}`, 1)
		db.set(`claim_${message.author.id}_${message.guild.id}`, Date.now())
		let bal = await db.fetch(`points_${message.author.id}`)
		let embed = new Discord.MessageEmbed()
		.setTitle("Successfully Claimed Aeither Points!")
		.setDescription(`You Successfully Claimed 1 Points\nCurrent Points: ${bal}`)
		.setColor("RANDOM")
		message.channel.send(embed)
	}
}
module.exports.config = {
	name: "claim",
	aliases: []
}