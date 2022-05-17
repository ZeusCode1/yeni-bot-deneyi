const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();
return message.channel.send(Embed)
.then;
};
exports.conf = {
enabled: true,
    guildOnly: false,
    aliases: [],
    kategori:"Hayvanlar",
    permLevel: 0
};
  exports.help = {
    name: 'kuş',
    description: 'Salla kuşların kafası güzel .dd',
    usage: 'kuş'
};
