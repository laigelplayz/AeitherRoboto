const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

let embed = new Discord.MessageEmbed()

    

   .setColor("RANDOM")

   .setTitle("Help")

   .setDescription("This are the list of Commands")

   .addFields({name: ":tada: Misc And Utility", value: "Ping"})
message.channel.send(embed)
}


module.exports.config = {

    name: "help",

    aliases: []

}


