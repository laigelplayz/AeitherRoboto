const Discord = require("discord.js")
const config = require("./config.json")
const bot = new Discord.Client({disableEveryone: true})

bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection()

const fs = require("fs")
fs.readdir('./commands/', (err, files) => {
	if (err) console.log(err);

let jsfile = files.filter(f => f.split('.').pop() === 'js');
if (jsfile.length <= 0) {
		return console.log("Couldn't Find Commands!");
}
jsfile.forEach((f, i) => {
		let pull = require(`./commands/${f}`);
		bot.commands.set(pull.config.name, pull);
		pull.config.aliases.forEach(alias => {
			bot.aliases.set(alias, pull.config.name);
			
		});
	});
});

bot.on('message', async message => {
  
	if (message.author.bot || message.channel.type === 'dm') return;
	let prefix = config.prefix
	let messageArray = message.content.split(' ');
	let cmd = messageArray[0];
	let args = message.content.slice(prefix.length).split(" ");

	if (!message.content.startsWith(prefix)) return;
        let commandfile =
		bot.commands.get(cmd.slice(prefix.length)) ||
		bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
	if (commandfile) commandfile.run(bot, message, args);
});

bot.login(config.token)
