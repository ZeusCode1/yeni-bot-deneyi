const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {
  if (!message.guild) {
    const EmbedSowwyzCode = new Discord.MessageEmbed()

      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(
        "**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**",
        "**-Sowwyz.**"
      );

    return message.author.send(EmbedSowwyzCode);
  }
  if (message.channel.type !== "dm") {
    const EmbedSowwyzCode = new Discord.MessageEmbed()

      .setTitle(':police_car:'+ message.author.username + " Polis Geliyor!!")
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("***Discord Türkiye seni koruyacak*** ")
      .setImage(
        "http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif"
      );

    return message.channel.send(EmbedSowwyzCode);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['polis','police','polis-çağır','memur','ara'],
  permLevel: 0
};

exports.help = {
  name: "ara155",
  description: "Sowwyz",
  usage: "ara155"
};