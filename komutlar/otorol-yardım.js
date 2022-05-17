const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`OtoRol`)
    .setTitle(``)
    .setColor("#ff0000")
    .setImage(
      ""
    )
    .setDescription(
      `<:8198red:842045894237093888> Gelişmiş Otorol Menüsü.`
    )
    .addField(
      `**__OtoRol__**`,
      `<:8198red:842045894237093888> \`${prefix}otorol-sistem\` \n OtoRolü Nasıl Ayarlayacagınız Hakkında Bilgi Tablosu.`,
        true
    )
  .addField(
      `**__OtoRol Msg__**`,
      `<:8198red:842045894237093888> \`${prefix}otorol-msg\` \n Sunucunuza Özel OtoRol Mesajı Ayarlarsınız.`,
        true
    )
   .addField(
      `**__OtoRol Ayarla__**`,
      `<:8198red:842045894237093888> \`${prefix}otorol-ayarla\` \n OtoRol Mesaji Gidecegi Kanalı Ve Rölü Ayarlarsınız.`,
        true
    )
   .addField(
      `**__OtoRol Kapat__**`,
      `<:8198red:842045894237093888> \`${prefix}otorol-kapat\` \n Tüm OtoRol Ayalarını Sıfırlarsınız.`,
        true
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"otorol",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};