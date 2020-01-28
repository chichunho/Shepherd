const season = require("../game/live/season.json");
const valuesConst = require("../bin/valuesConst.json");

exports.run = (client, message, args)=>
{
	var reply = "<@"+message.author.id+">\n";
	var nowEndDiff;
	var nowStartDiff;
	var seasonEnd;
	var totalCandles;
	var startEndDiff;
	var extraStartEndDiff;
	var extraNowEndDiff;
	const seasonStartDate = new Date(Date.parse(season.startDate));
	const seasonEndDate = new Date(Date.parse(season.endDate));
	const extraCandlesStartDate = new Date(Date.parse(season.extraCandlesStartDate));
	const extraCandlesEndDate = new Date(Date.parse(season.extraCandlesEndDate));

	nowStartDiff = Math.ceil(Math.abs(Date.now() - seasonStartDate.getTime())/valuesConst.dayConst);
	nowEndDiff = Math.ceil(Math.abs(Date.now() - seasonEndDate.getTime())/valuesConst.dayConst);
	startEndDiff = Math.ceil(Math.abs(seasonStartDate.getTime() - seasonEndDate.getTime())/valuesConst.dayConst);
	seasonEnd = Date.now() > seasonEndDate.getTime();
	totalCandles = season.dailyCandles*startEndDiff;
	if (season.extraCandlesStat)
	{
		extraStartEndDiff = Math.ceil(Math.abs(extraCandlesStartDate.getTime() - extraCandlesEndDate.getTime())/valuesConst.dayConst);
		extraNowEndDiff = Math.ceil(Math.abs(Date.now() - seasonEndDate.getTime())/valuesConst.dayConst);
		if (Date.now() < extraCandlesStartDate.getTime())
		{
			reply += "The double seasonal candles event will start at "+extraCandlesStartDate.toLocaleString()+".\n";
			totalCandles += season.extraCandles*extraStartEndDiff;
		}
		else
		{
			reply += "The double seasonal candles event is on going!";
			totalCandles += season.extraCandles*extraNowEndDiff;
		}
	}
	else
	{
		reply += "The double seasonal candles event has not been announced.\n";
	}

	if (seasonEnd)
	{
		reply += season.oldname+" has already ended."
	}
	else
	{
		if(Date.now() < seasonStartDate.getTime())
		{
			reply += season.name+" will start at "+seasonStartDate.toLocaleString()+".\n"+
					"In this season you can get "+totalCandles+" in total."
		}
		else
		{
			reply += "There are "+nowEndDiff+" day(s) before "+season.name+" end.\n"+
					"There are "+totalCandles+" seasonal candles you can get before "+season.name+" end."
		}
	}

	message.channel.send(reply).catch(err=>console.log(err));

}
