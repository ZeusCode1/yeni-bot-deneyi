const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+');

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.**`)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=booking-logo&text=${yazi}`
  .replace(' ', '+')


  const embed = new Discord.MessageEmbed()
  .setTitle("İşte Kırmızı logon")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Kırmızı Logo Oluşturuldu.')
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
    name: 'kırmızı',
    description: 'Yazdığınız yazıyı kırmızı logoya çevirir.',
    usage: 'kırmızı <yazı>'
}
