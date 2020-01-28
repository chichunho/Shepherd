const season = require("../game/live/season.json");
const valuesConst = require("../bin/valuesConst.json");

exports.run = (client, message, args)=>
{
	var reply = "<@"+message.author.id+">\n";
	var pic;
	var pickey = false;
	var nowEndDiff;
	var nowStartDiff;
	var seasonEnd;
	const seasonStartDate = new Date(Date.parse(season.startDate));
	const seasonEndDate = new Date(Date.parse(season.endDate));

	nowStartdiff = Math.ceil(Math.abs(Date.now() - seasonStartDate.getTime())/valuesConst.dayConst);
	nowEndDiff = Math.ceil(Math.abs(Date.now() - seasonEndDate.getTime())/valuesConst.dayConst);
	seasonEnd = Date.now() > seasonEndDate.getTime();
	if(season.pic !== "")
	{
		pic = {files:[season.pic]};
		pickey = true;
	}
	if (seasonEnd && !season.announced)
	{
		reply += season.oldname+" has already ended and the new season has not been announced.\n"+
				"For the latest announcement and information you can visit official website and official discord server."
	}
	else if (seasonEnd && season.announced)
	{
		reply += season.oldname+" has already ended and the new season has been announced!\n"+
				"The new season is called "+season.name+"\n"+
				"There are "+nowStartDiff+" days(s) before the "+season.name+" arrive.\n"+
				"Please wait patiently :)\n"
	}
	else
	{
		reply += "The current season is "+season.name+".\n"+
				"It started at "+seasonStartDate.toLocaleString()+"\n"+
				"And it will end at "+seasonEndDate.toLocaleString()+"\n"+
				"There are "+nowEndDiff+" day(s) before "+season.name+" end.\n"+
				"Enjoy it!"
	}

	if(pickey)
		message.channel.send(reply, pic).catch(err=>console.log(err))
	else
		message.channel.send(reply).catch(err=>console.log(err))
}
