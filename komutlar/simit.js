const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username +  ' Simiti bi güzel yedin, Afıyet Olsun 🥯')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://www.bobiler.org/monte/preview/116199/bobiler.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori:"Eğlence",
  permLevel: 0
};

exports.help = {
  name: 'simit',
  description: 'Simit Yer.',
  usage: 'simit'
};
