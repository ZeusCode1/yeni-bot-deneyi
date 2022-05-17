const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
  let kanal = args.slice(0).join(' ')
  if (!kanal) return message.reply('Oluşturacağım kanalın ismini yazman gerek!')
  message.delete({timeout:100})
  message.guild.channels.create(kanal,{type: 'text'})
  message.channel.send("Kanal oluşturuldu!")
  
  }
exports.conf = {
  aliases: ['kanaloluştur']
  }

exports.help = {
  name:  'kanaloluştur'
  }