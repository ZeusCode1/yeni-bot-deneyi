const Discord = require('discord.js');
 
exports.run = async(client, message, args) => {
    var iltifat = ["Mucizelerden bahsediyordum. Tam o sırda gözlerin geldi aklıma.", "çok güzelsin","çok yakışıklısın","Seni gördüm günüm aydı.","Sen gülünce gülmemek elde değil.","Yağmurdan sonra açan gök kuşağı gibisin, öyle güzel ve özel","Işığınla gecemi aydınlatıyorsun.","Sen bu hayatta güvendiğim nadir insanlardan bir tanesisin. Senin söylediğin her söze itimadım var."]
    var matheusiltifat = iltifat[Math.floor(Math.random() * iltifat.length)];
      message.channel.send(`${matheusiltifat}`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};
 
exports.help = {
  name: 'iltifat'
};