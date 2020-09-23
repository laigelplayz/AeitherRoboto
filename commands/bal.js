const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
	let bal = await db.fetch(`points_${message.author.id}`)
	if(bal === null) bal = 0
	
	let embed = new Discord.MessageEmbed()
	.setTitle("Aeither Points")
	.setDescription(`${message.author.tag} Points\n**${bal}**`)
	.setColor("RANDOM")
	.setTimestamp()
	message.channel.send(embed)
}
module.exports.config = {
	name: "balance",
	aliases: ["bal", "points"]
}