const Discord = require('discord.js')


module.exports.run = async (bot, message, args) => {
    // if(!message.content.startsWith('ticket.'))return;  


    let embed = new Discord.RichEmbed()
    .setTitle("Support Tickets Help")
    .addField("Creating a Ticket [Alias: cr]", "`[create`")
    .addField("Closing a Ticket [Alias: cl]", "`[close [reason]`")
    .addField("Adding a User To The Ticket [Alias: a]", "`[add [usermention]`")
    .addField("Removing a User From The Ticket [Alias: r]", "`[remove [usermention]`")
    .addField("Last Ticket Information [Alias: lt]", "`[last`")
    .addField("ADMIN | Force Closing The Ticket [Alias: fc]", "`[forceclose [reason]`")
    .addField("ADMIN | Rename a Ticket [Alias: rn]", "`[rename [name]`")
    .addField("ADMIN | Timing Out a Ticket [Alias: to]", "`[timeout`")
    .addField("ADMIN | Setting Up Ticket Topics [Alias: s]", "`[set [1 - 5] [Topic]`")
    .addField("ADMIN | Setting Up The Server [Alias: su]", "`[setup`")
    .setColor("#e64b0e")
    message.channel.send(embed)




}

module.exports.help = {
  name:"help",
  aliases: ["h"]
}