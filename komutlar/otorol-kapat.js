const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      `Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.`
    );
  const rol = db.fetch(`otoRL_${message.guild.id}`);
  if (!rol)
    return message.reply(`Sanırım Bu Özellik Zaten Kapalıymış.`);

  message.reply(
    `**Bu Özellik Başarıyla Kapatıldı.**`
    
  );

  db.delete(`otoRL_${message.guild.id}`);
  db.delete(`otoRK_${message.guild.id}`);
  db.delete(`otoRM_${message.guild.id}`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["otorol-kapat", "otorolkapat"],
  permLevel: 0
};

exports.help = {
  name: "otorol-kapat",
  description: "taslak",
  usage: "Otorol-ayarla"
};