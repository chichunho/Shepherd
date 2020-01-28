exports.run = (client, message, args)=>
{
	var reply = "<@"+message.author.id+">\n";

	reply += "Welcome to the kingdom of Sky, "+message.author.username+".\n"+
				"Let me know if I can help you anything :smiley:\n"+
				"Command list:\n"+
				"!sky\n"+
				"!sky-live-version\n"+
				"!sky-beta-version\n"+
				"!sky-season-time\n"+
				"!sky-season-details\n"+
				"!sky-season-candles\n"+
				"!sky-travel-spirit\n"+
				"!sky-refresh-realms\n"+
				"!sky-refresh-eden"

	message.channel.send(reply).catch(err=>console.log(err));
}
