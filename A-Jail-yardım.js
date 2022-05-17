const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} `,client.user.avatarURL())
 .setThumbnail('')
 .setImage('https://share.creavite.co/CwPjmj9ez1KCIDt4.gif')
 .setColor('RED')
 .setDescription(`

**Jail Sistemi**
> \`.jail\` ->**Birisini Jaile Atar**
> \`.jaillog [kanal]\` ->**Jail Atılamların Kayıt Yerini Ayarlarsınız**
> \`.jailrol [rol]\` ->**Jail Atılınca Verilen Cezalı Rolü Verirsiniz**
> \`.jailyetkili [rol] \` ->**Jail Yetkili Rol Ayarlayın**


OrhanUcr Bot Komutları

 **OrhanUcr Bot Hizmetleri.**
 **[[WebSite]](https://tidy-hilarious-asiago.glitch.me/)**  ***&***  **[[Discord]](https://discord.gg/kHRASTQaFD)**`)
 .setFooter(`© 2022 OrhanUcr Tüm Hakları Saklıdır.`)
    
message.channel.send(embed) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["jail-help"],
  aliases: ["jail-help"],
  permLevel: 1
};

exports.help = {
  name: 'jail-yardım',  
  description: 'Jail komutlarını gösterir',
  usage: 'jail-yardım'
}; 