//import files needed
const Discord = require('discord.js');
const Enmap = require("enmap");
const fs = require("fs");

//new a discord client
const client = new Discord.Client();

//attach the files needed
client.config = require("./bin/config.json");

//grab event and command from folders
fs.readdir("./events/", (err, files)=> {
	if(err) return console.error(err);
	files.forEach(file=> {
		const event = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		client.on(eventName, event.bind(null, client));
	});
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files)=> {
	if(err) return conosole.error(err);
	files.forEach(file=> {
		if(!file.endsWith(".js")) return;
		let props = require(`./commands/${file}`);
		let commandName = file.split(".")[0];
		console.log(`Attempting to load command ${commandName}`);
		client.commands.set(commandName, props);
	});
});

client.login(client.config.token);