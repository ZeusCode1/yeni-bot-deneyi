const Discord = require("discord.js");


exports.run = (client, message, args) => {
  const kurallar = new Discord.MessageEmbed()
    .setDescription(`**SERVER RULES**


- Do not start, support or coordinate servers that contain threatening profanity, slang, abusive language, hate speech. Attacking a person or community on the basis of race, ethnicity, national origin, gender, gender, sexual orientation, religion or disability is prohibited.
- Actions such as insulting the honor of administrators, officials and server members are prohibited.
- Do not write in capital letters, as using capital letters will mean shouting.
- Since Discord is a chat center, unnecessary personal discussions and quarrels are prohibited.
- It is forbidden to publish personal information belonging to someone else.
- Authorities may overlook every message, we request you to please report such problems by tagging the authorities.
- It is forbidden to advertise raffles, channels, publishers and servers, you can only advertise your own server in the advertising channel.
- Game account, souvenir, game equipment, etc. It is forbidden to sell / exchange things, share reference links and beg, only in sales channels.
- Illegal, illegal work is prohibited.
- It is forbidden to put inappropriate username and profile photo.
- It is forbidden to disturb server members by using cheats in games.
- It is forbidden to try to attract people by not using the game rooms on our server.
- It is forbidden to humiliate, humiliate, disclose.
- It is forbidden to post +18, pornographic content on photo & video channels.
- It is strictly forbidden to send spoiler messages and give spoilers. Only spoilers can be given to the spoiler channel.


- Unless you follow the Discord Community rules, you will be permanently banned from our server.
• If you want to learn more about Discord Community rules, check https://discord.com/terms & https://discord.com/guidelines.


• It will be enough to follow the classic Discord server rules.
OrhanUcr Bots Support


• It will be enough to follow the classic Discord server rules.`)
    .setColor("RANDOM")
    .setFooter(`${message.guild.name}`)
  message.channel.send(kurallar);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"enrules"
}