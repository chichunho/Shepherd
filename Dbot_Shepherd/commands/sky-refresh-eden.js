const gameRefresh = require("../bin/gameRefresh.json");
const valuesConst = require("../bin/valuesConst.json");

exports.run = (client, message, args)=>
{
	var reply = "<@"+message.author.id+">\n";
	var currentDate = new Date(Date.now());
	var refreshDate = new Date(currentDate.getTime()+(gameRefresh.edenDay - currentDate.getDay())*valuesConst.dayConst);
	var nowStartDiff;
	var leftTime = [];
	var usedConst = [valuesConst.dayConst, valuesConst.hourConst, valuesConst.minuteConst];

	refreshDate.setHours(gameRefresh.refreshHour);
	refreshDate.setMinutes(gameRefresh.refreshMinute);
	refreshDate.setSeconds(gameRefresh.refreshSecond);
	refreshDate.setMilliseconds(gameRefresh.refreshMillisecond);

	nowStartDiff = Math.abs(refreshDate.getTime() - currentDate.getTime());

	for( var i = 0; i < 3; i++)
	{
		leftTime[i] = Math.floor(nowStartDiff/usedConst[i]);
		nowStartDiff -= leftTime[i]*usedConst[i];
	}

	reply += "The Eye of Eden refresh at "+refreshDate.toLocaleString()+"\n"+
				"There are "+leftTime[0]+" day(s), "+leftTime[1]+" hour(s) and "+leftTime[2]+" minute(s) before The Eye of Eden refresh.";

	message.channel.send(reply).catch(err=>console.log(err));
}
