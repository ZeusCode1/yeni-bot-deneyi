const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} `,client.user.avatarURL())
 .setThumbnail('')
 .setImage('https://share.creavite.co/CwPjmj9ez1KCIDt4.gif')
 .setColor('RED')
 .setDescription(`

**Ayarlamalı (Genel) Komutlar**
> \`.afk sebep \` ->**Neden Afk Olduğunuzu Ayarlar**
> \`.sil 100 \` ->**!!sil [1-100] arası mesaj siler 100 fazla silemez**
> \`.sa-as\` ->**sa denildiğinde as diye cevap verir**
> \`.üyedurum \` ->**üyedurum gösterir**
> \`.yavaş-mod [1/120] \` ->**Yavaş Modu Açar**
> \`.sohbet-aç \` ->**Sohbet Kilidini Açar**
> \`.sohbet-kapat \` ->**Sohbeti Kilitler**
> \`.rolver\` ->**Etiketlenen Kullanıcıya Rol Verir**
> \`.rolal \` ->**Etiketlenen Kullanıcıdan Rol Alır**
> \`.küfür-engel\` ->**Küfür Engeli Açar**
> \`.reklamengel\` ->**Reklam Engel Açar**
> \`.kanaloluştur [kanalismi] \` ->**Kanal Açar**
> \`.duyurherkes [duyurunuz] \` ->**Duyuru Atar**
> \`.ping \` ->**botun pingini gösterir**
> \`.istatistik \` ->**Botun İstatisiğini Gösterir**
> \`.yetkiler \` ->**Etiketlediğiniz Kullanıcını Yetkilerini Gösterir**
> \`.trrules \` ->**Sizin İçin Kural Ayarlar**
> \`.enrules \` ->**english rules**
> \`.mesajat \` ->**Etiketlenen Kişiye Mesaj Atar**



OrhanUcr Bot Komutları

 **OrhanUcr Bot Hizmetleri.**
 **[[WebSite]](https://tidy-hilarious-asiago.glitch.me/)**  ***&***  **[[Discord]](https://discord.gg/kHRASTQaFD)**`)
 .setFooter(`© 2022 OrhanUcr Tüm Hakları Saklıdır.`)
    
message.channel.send(embed) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["settings-help"],
  aliases: ["ayarlamalı-yardım"],
  permLevel: 1
};

exports.help = {
  name: 'genel-yardım',  
  description: 'genel Ayarlamalı komutlarını gösterir',
  usage: 'genel-yardım'
}; 