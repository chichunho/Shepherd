exports.run = (client, message, args)=>
{
	client.users.get(client.config.masterID).send("testing");
	message.channel.send("message send.");
}