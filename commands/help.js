/*
  Create by : H29id
  Community : Discordbots Nation
*/

const Discord = require("discord.js");
const moment = require("moment");

exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`${bot.user.tag} Commands`)
  .addField(":gear: Core", "`help` `stats` `invite`")
  .addField(":rainbow: Rainbow Role", "`rainbow {mentionrole}` `stoprainbow {mentionrole}`")
  .addField(":bar_chart: Utility", "`avatar` `serverinfo` `userinfo`")
  .addField(":notes: Music", "`play` `volume` `stop`")

.addField('Youtube :white_check_mark:','[Click](https://www.youtube.com/channel/UCaB6NwTJ-UlLsk4YiOvqEDQ?sub_confirmation=1)', true)
.addField('Server :heart:','[Click](https://discord.gg/NR7rHKS)', true)
.setFooter("All rights reserved ©ArilOfficial Development in 2019")
  message.channel.send(embed)
}

exports.help = {
  name: "help"
}
