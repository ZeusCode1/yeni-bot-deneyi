const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {
  
const yaz = args.slice(0).join(' '); 
  
  if(!yaz) return message.channel.send(`:x: | **Yazdıracağın Mesajı Girmedin!**`)
  message.channel.send(`${yaz}`)
  
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['yazdır', 'say'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'botayazdır',
  category: '',
  description: '',
  usage:''
}