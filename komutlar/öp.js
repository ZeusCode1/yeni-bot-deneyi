const Discord = require('discord.js');

exports.run = (client, message , args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send('**Öpmek istediğin kişiyi etiketle!**');
    const embed = new Discord.MessageEmbed()
    .setAuthor (' ')
    .setColor (`RANDOM`)
    .setDescription( message.author.username+` adlı insan varlığı, ${mesaj} adlı insan varlığını deli gibi öptü.` )

    .setImage(`https://i.kym-cdn.com/photos/images/original/000/986/968/2f5.gif`)
  return message.channel.send(embed);
  message.react('617413726768988160')
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
  kategori: 'Eğlence',
    permLevel: 0
};

exports.help = {
    name: 'öp',
    description: 'İstediğiniz kişiyi öpersiniz.',
    usage: 'öp'
};
