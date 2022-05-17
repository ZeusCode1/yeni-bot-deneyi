const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  let rol = message.mentions.roles.first();
  let kanal = message.mentions.channels.first();
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      `Bu Komutu Kullanabilmek İçin \`Yönetici\` Yetkisine Sahip Olmalısın.`
    );

  if (!rol)
    return message.channel.send(
      new Discord.MessageEmbed().setColor("#ff0000").setDescription(`
**Ayarlamam İçin Bir Rol Etiketlemeilisin.**
\`Rolü Etiketleyemiyorsan Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma!\`\n
**Örnek Kullanım:**\n \`\`\`a!otorol-ayarla @rol #kanal\`\`\`

 `)
    );

  if (!kanal)
    return message.channel.send(`
 Ayarlamam İçin Bir Kanal Etiketlemeilisin.
`);

  message.channel.send(`╔▬▬▬▬▬▬▬▬Otorol▬▬▬▬▬▬▬▬▬
║► ✔️ Otorol Aktif Edildi.
║► ✔️ **${rol}** Olarak Güncelledim!
║► ✔️ Kayıt Kanalını **${kanal}** Olarak Güncelledim!
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

  db.set(`otoRL_${message.guild.id}`, rol.id);
  db.set(`otoRK_${message.guild.id}`, kanal.id);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "otorol-ayarla",
  description: "taslak",
  usage: "Otorol-ayarla"
};