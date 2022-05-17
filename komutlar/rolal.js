const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yetkin yok!")
const kisi = message.mentions.members.first()
if (!kisi) return message.channel.send("Kişi etiketle.")

const rol = message.mentions.roles.first()
if (!rol) return message.channel.send("Rol etiketle.")

const kisiyibul = message.guild.members.cache.get(kisi.id)

kisiyibul.roles.remove(rol.id).then(a=> {
message.channel.send("Rolü Aldım.")
}).catch(err => message.channel.send("Rolü Alamadım."))


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rolal',
  description: 'Etiketlediğiniz Kişide İstediğiniz Rolü Alır.',
  usage: 'rolal'
};