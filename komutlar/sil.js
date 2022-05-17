const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply({content: "**Yetersiz Yetki Gerekn Yetki: Mesajları Yönet**" }).catch(e => {})

  const sayi = args[0]

  if (!sayi) {
    return message.reply({content: "En Az `1 - 100` En fazla bir sayı girmelisiniz." }).catch(e => {})
  }

  if(isNaN(sayi)) return message.reply({content: "Bir Sayı Seçmelisiniz." }).catch(e => {})
  if (sayi > 101) return message.reply({content: "En Az `1 - 100` En fazla bir sayı girmelisiniz." }).catch(e => {})


  await message.channel.messages.fetch({limit: sayi}).then(messages => {
    message.channel.bulkDelete(messages).catch(e => {})
});
  
setTimeout(() => {
    message.channel.send({content: `<@${message.author.id}> ${sayi} Mesaj Başarılı Bir Şekilde Uzay Boşluna Fırlatıldı :rocket:`}).then(cs => {
      setTimeout(() => {
      cs.delete().catch(e => {})
      }, 5000)
    }).catch(e => {})
  }, 2000)
};

exports.conf = {
  aliases: ["clear","temizle","delete"]
};

exports.help = {
  name: 'sil'
};