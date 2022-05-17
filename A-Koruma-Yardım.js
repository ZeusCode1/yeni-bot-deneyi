const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} `,client.user.avatarURL())
 .setThumbnail('')
 .setImage('https://share.creavite.co/CwPjmj9ez1KCIDt4.gif')
 .setColor('RED')
 .setDescription(`

**Koruma Sistemi** 
> \`.kanalkoruma\` ->**Kanal Koruma Sistemi [aç] [kapat]**
> \`.rolkoruma\` ->**Rol Koruma [aç] [kapat]**
> \`.spambotkoruması\` ->**Sunucunuza Saldırıları Engeller**
> \`.ever@here engel\` ->**Otomatik Açılır**
> \`.spam-engel  \` ->**Spam Koruması Açar**
> \`.spam-kapat  \` ->**Spam Engel Kapatır**
> \`.bankoruma  \` ->**Otomatik Açılır**
> \`.caps-engel aç kapat  \` ->**CapsLock Engeller**

OrhanUcr Bot Komutları

 **OrhanUcr Bot Hizmetleri.**
 **[[WebSite]](https://tidy-hilarious-asiago.glitch.me/)**  ***&***  **[[Discord]](https://discord.gg/kHRASTQaFD)**`)
 .setFooter(`© 2022 OrhanUcr Tüm Hakları Saklıdır.`)
    
message.channel.send(embed) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["koruma-help"],
  aliases: ["koruma-help"],
  permLevel: 1
};

exports.help = {
  name: 'koruma-yardım',  
  description: 'Koruma komutlarını gösterir',
  usage: 'koruma-yardım'
}; 