const patch = require("../game/beta/patch.json");

exports.run = (client, message, args)=>
{
  var reply = "<@"+message.author.id+">\n";

  reply += "The latest version of Sky Beta is "+patch.version+".\n"+
            "Update released on "+patch.date+"\n"+
            "Update package number is "+patch.package+".\n"+
            "You can read the patch update details in:\n"+
            patch.note;

  message.channel.send(reply).catch(err=>console.log(err));
}
