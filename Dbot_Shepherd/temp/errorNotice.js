module.exports = (err, message, client)=>
{
	client.users.get(client.config.masterID).send("Error occurs at channel "+message.channel+" in "+message.guild);
	client.users.get(client.config.masterID).send("Error ```"+err+"```");
}