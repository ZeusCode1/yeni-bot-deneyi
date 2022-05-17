const Discord = require('discord.js');
const loglar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL()())
    .addField('Korkut')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.MessageEmbed() 
    .setAuthor('Bööö Korktun mu ?')
    .setColor('RANDOM')
    .setTimestamp()
        .setImage(`https://78.media.tumblr.com/452063fcc1533a028f27cba85291d644/tumblr_ms8w5wWoOT1spwp48o1_500.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Eğlence",
  permLevel: 0
};

exports.help = {
  name: 'korkut',
  description: 'Bot sizi korkutur',
  usage: 'korkut'
};