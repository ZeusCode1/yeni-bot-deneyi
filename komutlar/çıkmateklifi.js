const Discord = require('discord.js');
exports.run = function(client, message, args) {
    let teamtr = message.mentions.users.first();
    if (!teamtr) return message.channel.send('**Kime çıkma teklif ediceğini seç ! **');
    let dm = args.slice(1).join(' ');
    const dmat = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Biri Sana Çıkma Teklifi Etti!❤️')
    .addField('Ne Cevap Vericen beya 😆', `Kabul et :D`)
    .addField('Teklif Eden Kişi :', `➽ @${message.author.username}`)
    .setFooter('Çıkma Teklifi ')
    teamtr.send(dmat);
    const dmtamam = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('❤️ Çıkma Teklifi Ettin!')
    .setFooter('Çıkma Teklifi Ettim')
    message.channel.send(dmtamam);
    };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çteklifet",'teklifet','çte'],
  kategori:"Eğlence",
  permLevel: 0
};
exports.help = {
  name: 'çıkma-teklif',
  description: 'Woaw çıkma teklifi mi ?',
  usage: 'çıkma-teklif'
};
