const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+');

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** `)
  const linqo = `https://habbofont.net/font/neon_blue/${yazi}.gif`
  .replace(' ', '+')


  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Neon Mavi Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    kategori:"Logo",
    permLevel: 0
}

exports.help = {
    name: 'neonmavi',
    description: 'Yazdığınız yazıyı neon maviye çevirir.',
    usage: 'neonmavi <yazı>'
}
