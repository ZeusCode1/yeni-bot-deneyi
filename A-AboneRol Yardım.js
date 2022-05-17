const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} `,client.user.avatarURL())
 .setThumbnail('')
 .setImage('https://share.creavite.co/CwPjmj9ez1KCIDt4.gif')
 .setColor('RED')
 .setDescription(`

**Abone Rol Sistemi**
> \`.abone-y-rol\` ->**Abone Yetkilisi Rolünü Ayarlarsınız**
> \`.abonelog #kanal \` ->**Abone Log Ayarlarsınız**
> \`.abonerol \` ->**Abone Rolünü Ayarlarsınız**
> \`.a @kullanıcı \` ->**Abone Rolü Verirsiniz**

OrhanUcr Bot Komutları

 **OrhanUcr Bot Hizmetleri.**
 **[[WebSite]](https://tidy-hilarious-asiago.glitch.me/)**  ***&***  **[[Discord]](https://discord.gg/kHRASTQaFD)**`)
 .setFooter(`© 2022 OrhanUcr Tüm Hakları Saklıdır.`)
    
message.channel.send(embed) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-help"],
  aliases: ["abone-help"],
  permLevel: 1
};

exports.help = {
  name: 'abone-yardım',  
  description: 'Abone komutlarını gösterir',
  usage: 'abone-yardım'
}; 