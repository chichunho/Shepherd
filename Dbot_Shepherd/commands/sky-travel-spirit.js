const travelSpirit = require("../game/live/travelSpirit.json");
const valuesConst = require("../bin/valuesConst.json");

exports.run = (client, message, args)=>
{
	var reply = "<@"+message.author.id+">\n";
	var currentStartDate;
	var currentEndDate;
	var nextStartDate;
	var nowEndDiff;
	const startDate = new Date(Date.parse(travelSpirit.startDate));

	currentStartDate = new Date(startDate.getTime()+travelSpirit.frequency*(travelSpirit.sequence - 1));
	currentEndDate = new Date(currentStartDate.getTime()+travelSpirit.period);
	nextStartDate = startDate+travelSpirit.frequency*(travelSpirit.sequence);
	nowEndDiff = Math.ceil(Math.abs(Date.now() - currentEndDate.getTime())/valuesConst.hourConst);
	nowStartDiff = Math.ceil(Math.abs(Date.now() - currentStartDate.getTime())/valuesConst.dayConst);


	if (Date.now() < currentStartDate)
	{
		reply += travelSpirit.name+" is on his/her way, please wait for him/her patiently.\n"+
					"He/She will arrive on "+currentStartDate.toLocaleString()+".\n"+
					"There are "+nowStartDiff+" day(s) before he/she arrive."
	}
	else if (Date.now() > currentEndDate)
	{
		reply += travelSpirit.name+" has gone and continue his/her journey.\n"+
					"The next travel spirit will arrive at "+nextStartDate.toLocaleString()+"."
	}
	else
	{
		reply += travelSpirit+" is now at Home Space!\n"+
					"There are "+nowEndDiff+" hour(s) before he/she gone."
	}

	message.channel.send(reply).catch(err=>console.log(err));
}
