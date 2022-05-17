const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {
if(message.author.id !== '777521730570682388') return;

function gönderkardesim(content) {
const infoEmbed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(content)
.setTimestamp()
.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
return message.channel.send(infoEmbed)
};

const durum = await database.fetch(client.user.id);
if(durum == true) {

await database.delete(client.user.id);
return gönderkardesim('<a:839442360583716904:935528245527461980> Bakım artık sona erdi,herkes komutları kullanabilir.');

                                                                 // <a:839442360583716904:935528245527461980> Bu şekilde emoji idsini yazıp emoji ekleyebilirsiniz 
} else {

await database.set(client.user.id, true);
database.set(client.user.id+':)', {
author: message.author,
time: Date.now()
});

return gönderkardesim('<a:839442360583716904:935528245527461980> Bakım modu açıldı.\nArtık <@777521730570682388> dışında kimse komutları kullanamayacak.');
};

                                                // <a:839442360583716904:935528245527461980> Bu şekilde emoji idsini yazıp emoji ekleyebilirsiniz 

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım'],
  permLevel: 0
};
 
exports.help = {
  name: 'bakım-modu',
    description: 'bakım'
};