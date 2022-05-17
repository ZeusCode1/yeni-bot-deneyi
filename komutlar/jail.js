const Discord = require('discord.js');
const ms = require('ms');

    exports.run = (client, message, args) => {

        // Yetki İçin
         if(!message.member.roles.cache.get("948799281781948466")){
             const yetki = new Discord.MessageEmbed()
             .setColor('BLACK')
             .setDescription(` ${message.author} **Bu Kodu Kullana Bilmek İçin Yeterli Yetkin Bulunmuyor...** `)
             return message.channel.send(yetki)
        }

        let kullanıcı = message.mentions.members.first();
        let sure = args[1];
        let sebep = args.slice(2).join(' ');

        if(!kullanıcı){
            const kullanicihatasi = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(` ** ${message.author} Kullanıcı Bulunamadı, Lütfen Kullanıcı Etiketle** `)
            .setFooter('Jail Hatası ❌')
            return message.channel.send(kullanicihatasi)
        }
        
        if(!sure){
            const surehatasi = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(` ** ${message.author} Süre Girmeyi Unuttun, \n\n \` 1s = 1 Saniye ||  1m = 1 Dakika || 1h = 1 Saat || 1d = 1 Gün || 1y = 1 Yıl \` ** `)
            .setFooter('Jail Hatası ❌')
            return message.channel.send(surehatasi)
        }

        if(!sebep){
            const sebephatasi = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setDescription(` ** ${message.author} **Lütfen Geçerli Bir Sebep Giriniz...** `)
            .setFooter('Jail Hatası ❌')
            return message.channel.send(sebephatasi)
        }

        if(kullanıcı || sure || sebep){
            const jail = new Discord.MessageEmbed()
            .setDescription(` ${kullanıcı} Kişisi ${message.author} Tarafından, **${sebep}** Sebebiyle **${sure.replace(/s/, ' Saniye').replace(/m/, ' Dakika').replace(/h/, ' Saat').replace(/d/, ' Gün')}** Boyunca Jail'e Atıldı `)
            .setColor('#00FF00')
            .setTitle(` **Başarıyla Jail'e Atıldı** `)
            message.channel.send(jail)

            // Jail Atıldığı Zaman Verilecek & Alınacak Roller
                kullanıcı.roles.add('948799396714266685')
                kullanıcı.roles.remove('949951050939531305')
                kullanıcı.roles.remove('945544056694521886')
            // Jail Bittiği Zaman Verilecek & Alınacak Roller
                setTimeout(() => {
                    kullanıcı.roles.remove('948799396714266685')
                    kullanıcı.roles.add('949951050939531305')
                    kullanıcı.roles.add('945544056694521886')
                    // Jail Bitince Kanal Bilgilendirme Mesajı Atalım

                    client.channels.cache.get('953516919577800724').send(` **${kullanıcı} Jail Süren Doldu Umarım Tekrarlamazsın** `)
                }, ms(sure))
        }
    } 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Jail','karantina','Karantina','JAİL','Cezalı','cezalı','Ceza-ver','ceza-ver'],
    permLevel: 0
}

exports.help = {
    name: 'jail',
    description: 'Süreli Jail',
    usage: '.jail @kişi süre sebep'
}