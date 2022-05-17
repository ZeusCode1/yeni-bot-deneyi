const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} `,client.user.avatarURL())
 .setThumbnail('')
 .setImage('https://share.creavite.co/CwPjmj9ez1KCIDt4.gif')
 .setColor('RED')
 .setDescription(`

**Ban Sistemi**
> \`.ban\` ->**Etiketlediğiniz Kişiye Ban Atar**
> \`.banlog [kanal]\` ->**Ban Atılan Kişilerin Kaydı Buraya Düşer**
> \`.banlist [kanal]\` ->**Banlıları Gösterir**
> \`.unbanall \` ->**Sunucunuzdaki Banları Açar**
> \`.unban [kullanıcı id] [sebep] \` ->**Ban Açar**
> \`.kick\` ->**Etiketlediğiniz Kişiyi Sunucudan Atar**

OrhanUcr Bot Komutları

 **OrhanUcr Bot Hizmetleri.**
 **[[WebSite]](https://tidy-hilarious-asiago.glitch.me/)**  ***&***  **[[Discord]](https://discord.gg/kHRASTQaFD)**`)
 .setFooter(`© 2022 OrhanUcr Tüm Hakları Saklıdır.`)
    
message.channel.send(embed) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-help"],
  aliases: ["ban-help"],
  permLevel: 1
};

exports.help = {
  name: 'ban-yardım',  
  description: 'Ban komutlarını gösterir',
  usage: 'ban-yardım'
}; 