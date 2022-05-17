const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      ` Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.`
    );
    let mesaj = args.slice(0).join(" ");
    if (mesaj.length < 5)
      return message.channel.send(
        new Discord.MessageEmbed()
               .setColor("#ff0000")
         .setDescription(
          "**Otorol Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin.**\n\n **Örnek Kullanım:**\n \`\`\`a!otorol-ayarla @rol #logkanalı```\n\n \`a!otorol-msg\` <a:Anxie_8:839892830688247868>  **Otorol Mesajını Ayarlar.**\n\n <a:Anxie_1:839318000996974613> **Örnek Kullanım:** <a:Anxie_1:839318000996974613>\n ```a!otorol-msg :loudspeaker::inbox_tray: Kullanıcı Katıldı! -hedefuye- Kişi Olmamıza -kalanuye- Kişi Kaldı -uyesayisi- Kişiyiz! -uye-\`\`\`"
           )
      );

    message.channel.send(
        " **Oto-Rol Mesajını** `" +
        mesaj +
        "` **Olarak Ayarladım.**"
    );
    db.set(`otoRM_${message.guild.id}`, mesaj);
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oto-rol-msg"],
  permLevel: 0
};

exports.help = {
  name: "otorol-msg",
  description: "taslak",
  usage: "sayac-hg-msg"
};