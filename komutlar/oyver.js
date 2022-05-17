const  Discord = require("discord.js");

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Bana Oyver ")
  .setDescription("[__**Top.gg Oy Link **__](https://top.gg/bot/869339944815046758)")
  .setFooter('Botumuza Oy Verdiğiniz İçin Şimdiden Teşekkür Ederim..')
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori:"Hakkında",
  permLevel: 0
};

exports.help = {
  name: 'oyver',
  description: 'Bota oy verir.',
  usage: 'oyver'
};
