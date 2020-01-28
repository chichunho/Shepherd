const gameRefresh = require("../bin/gameRefresh.json");
const valuesConst = require("../bin/valuesConst.json");

exports.run = (client, message, args)=>
{
	var reply = "<@"+message.author.id+">\n";
	var currentDate = new Date(Date.now());
	var refreshDate = new Date(currentDate.getTime());
	var nowStartDiff;
	var leftTime = [];
	var usedConst = [valuesConst.hourConst, valuesConst.minuteConst];

	refreshDate.setHours(gameRefresh.refreshHour);
	refreshDate.setMinutes(gameRefresh.refreshMinute);
	refreshDate.setSeconds(gameRefresh.refreshSecond);
	refreshDate.setMilliseconds(gameRefresh.refreshMillisecond);

	if(currentDate.getTime() > refreshDate.getTime())
		refreshDate.setDate(currentDate.getDate() + 1);

	nowStartDiff = Math.abs(refreshDate.getTime() - currentDate.getTime());

	for (var i = 0; i < 2; i++)
	{
		leftTime[i] = Math.floor(nowStartDiff/usedConst[i]);
		nowStartDiff -= leftTime[i]*usedConst[i];
	}

	reply += "The realms refresh at "+refreshDate.toLocaleString()+"\n"+
				"There are "+leftTime[0]+" hour(s) and "+leftTime[1]+" minute(s) before realms refresh.";

	message.channel.send(reply).catch(err=>console.log(err));
}
