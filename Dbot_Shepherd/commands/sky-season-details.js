const season = require("../game/live/season.json");

exports.run = (client, message, args)=>
{
	var reply = "<@"+message.author.id+">\n";
	var pic;
	var pickey = false;

	if(season.spiritPic !== "")
	{
		pic = {files:[season.spiritPic]};
		pickey = true;
	}


	reply +=  "In "+season.name+", there are total "+season.spiritNumber+" seasonal spirits.\n"+
				"You will need "+season.totalNeed+" seasonal candles to get all the collectibles.\n";

	reply += "Picture credit to "+season.picCredit+".";
	if(pickey)
		message.channel.send(reply, pic).catch(err=>console.log(err))
	else
		message.channel.send(reply).catch(err=>console.log(err))
}
