const Discord = require('discord.js');
exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} `,client.user.avatarURL())
 .setThumbnail('')
 .setImage('https://share.creavite.co/CwPjmj9ez1KCIDt4.gif')
 .setColor('RED')
 .setDescription(`
**Bot Hakkında**
**("Merhaba Ben OrhanUçar 14 Yaşındayım OrhanUcr 
Botunun Sahibiyim OrhanUcr Botumda   
Genel Komutlar Eğlence Komutları Abone Rol  
Komutları Ban Komutları Jail Komutları 
Koruma Sistemi Gibi Komutlar Var 
Bizi Tercih Ettiğiniz İçin Teşekkürler!
Prefix : . ")**


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

**Abone Rol Sistemi**
> \`.abone-y-rol\` ->**Abone Yetkilisi Rolünü Ayarlarsınız**
> \`.abonelog #kanal \` ->**Abone Log Ayarlarsınız**
> \`.abonerol \` ->**Abone Rolünü Ayarlarsınız**
> \`.a @kullanıcı \` ->**Abone Rolü Verirsiniz**


**Ban Sistemi**
> \`.ban\` ->**Etiketlediğiniz Kişiye Ban Atar**
> \`.banlog [kanal]\` ->**Ban Atılan Kişilerin Kaydı Buraya Düşer**
> \`.banlist [kanal]\` ->**Banlıları Gösterir**
> \`.unbanall \` ->**Sunucunuzdaki Banları Açar**
> \`.unban [kullanıcı id] [sebep] \` ->**Ban Açar**
> \`.kick\` ->**Etiketlediğiniz Kişiyi Sunucudan Atar**


**Jail Sistemi**
> \`.jail\` ->**Birisini Jaile Atar**
> \`.jaillog [kanal]\` ->**Jail Atılamların Kayıt Yerini Ayarlarsınız**
> \`.jailrol [rol]\` ->**Jail Atılınca Verilen Cezalı Rolü Verirsiniz**
> \`.jailyetkili [rol] \` ->**Jail Yetkili Rol Ayarlayın**


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
  aliases: ["help"],
  aliases: ["y"],
  permLevel: 1
};

exports.help = {
  name: 'yardım',  
  description: 'yardım komutlarını gösterir',
  usage: 'yardım'
}; 