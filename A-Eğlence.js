const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} `,client.user.avatarURL())
 .setThumbnail('')
 .setImage('https://share.creavite.co/CwPjmj9ez1KCIDt4.gif')
 .setColor('RED')
 .setDescription(`

**Eğlence Komutları**
> \`.youtube <search> \` ->**Youtube'De Arama Yaparsınız**
> \`.wasted @kullanıcı \` ->**Etiketlediğiniz Kullanıcıyı Öldürür**
> \`.tersyazı [yazı] \` ->**Yazdığınız Yazının Tersini Gösterir**
> \`.sunucu-pp \` ->**Sunucunuzun Resmini Gösterir**
> \`.sunucubilgi \` ->**Sunucununuzun Bilgilerini Söyler**
> \`.stresçarkı \` ->**Stres Çarkı Çevirirsiniz**
> \`.token \` ->**Botun Tokenini Atar**
> \`.ara155 \` ->**Polisi Ararsın**
> \`.adamasmaca \` ->**Adamasmaca Oynarsınız**
> \`.vipal \` ->**Vip Alırsınıız**
> \`.vipver \` ->**Vip Verirsiniz**
> \`.botayazdır  \` ->**Bota Yazdığınız Yazıyı Yazdırır**
> \`.tokat \` ->**Belirtilen Kişiyi, Tokatlar!**
> \`.efkarım \` ->**Efkarınızı Ölçer**
> \`.ağla \` ->**Botu Ağlatırsınız**
> \`.iltifat \` ->**Size İltifat Eder**
> \`.çevir \` ->**Çevir TR Kelime**
> \`.yazı-tura \` ->**Yazı Tura Atarsınız**
> \`.akinator \` ->**Ünlü Birini Bulursunuz**
> \`.oylama \` -> **Oylama Yaparsınız**
> \`.çekiç \` ->**Eyiketlenenin Kafasına Vurur**
> \`.çıkma-teklif \` ->**Çıkma Teklif Eder**
> \`.ihtihar-et \` ->**İhtihar Edersiniz**
> \`.kaçcm \` ->**Sizin Malafatı Söyler**
> \`.korkut \` ->**Sizi Korkutur**
> \`.kralol \` ->**Sizi Kral Yapar**
> \`.öp \` ->**Etiketleneni Kişiyi Öper**
> \`.bayrak \` ->**Size Bayrağımızı Gösterir**
> \`.simit \` ->**Size Simit Verir**
> \`.şifre uzunluk \` ->**Size Rastgele Şifre Oluşturu**



OrhanUcr Bot Komutları

 **OrhanUcr Bot Hizmetleri.**
 **[[WebSite]](https://tidy-hilarious-asiago.glitch.me/)**  ***&***  **[[Discord]](https://discord.gg/kHRASTQaFD)**`)
 .setFooter(`© 2022 OrhanUcr Tüm Hakları Saklıdır.`)
    
message.channel.send(embed) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fun-help"],
  aliases: ["eğlence-help"],
  permLevel: 1
};

exports.help = {
  name: 'eğlence-yardım',  
  description: 'eğlence komutlarını gösterir',
  usage: 'eğlence-yardım'
}; 