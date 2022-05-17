const Discord = require('discord.js');
const shorten = require('isgd');

exports.run = (client, message, args, tools) => {
 if (!message.guild) {
  return }
message.delete();
    if (!args[0]) return message.channel.send('963443114654195752')

    if(!args[1]) {

        shorten.shorten(args[0], function(res) {
            if (res.startsWith('Hata:')) message.channel.send('**Lütfen Doğru URL Girin.**');

            message.channel.send(`**<${res}>**`);
        })
    } else {
        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith('Hata:')) message.channel.send(`**<${res}>**`);

            message.channel.send(`**<${res}>**`);
        })
    }

};



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['link', 'kısalt'],
  permLevel: 0,
  kategori: 'Genel'
};

exports.help = {
  name: 'kısalt',
  description: 'Link Kısaltır.',
  usage: 'kısalt'
};