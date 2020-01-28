module.exports = (client, message)=> {

	if(!message.content.startsWith(client.config.prefix)) return;
	
	if (message.author.bot) return;
	
	const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	const cmd = client.commands.get(command);
	
	if(!cmd)
	{
		message.channel.send("<@"+message.author.id+">\n"+
								"The command seems not exist, please check the spellings.\n"+
								"Or you can check the command by !sky again.");
		return;
	}
	
	//run the command
	cmd.run(client, message, args);
};