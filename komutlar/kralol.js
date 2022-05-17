const Discord = require ("discord.js");
exports.run = (client, message) => {
const DEATHHCODEDİSCORDEmbed = new Discord.MessageEmbed()
.setAuthor(message.author.username + ' KRAL OLDUN H.O :D')
.setColor("RANDOM")
.setTimestamp()
.setDescription('')
    .setImage(`https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif`)
return message.channel.send(DEATHHCODEDİSCORDEmbed)
.then; //DEATHHCODE DİSCORD
};
exports.conf = {
enabled: true,
    guildOnly: false,
    aliases: ['kral'],
    kategori:"Eğlence",
    permLevel: 0
};
  exports.help = {
    name: 'kralol',
    description: 'Kral olmak mı ?',
    usage: 'kralol'
};
