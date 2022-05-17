const Discord = require('discord.js');
exports.run = async(client, message, args) => {
    const plasmic = new Discord.MessageEmbed()
    .setTitle("")
    .setDescription(`
    **Toplamda ${client.commands.size} kadar komutum var!:**
    `)
    message.channel.send(plasmic)
};
        exports.conf = {
            enabled: true,
            guildOnly: false,
            aliases: [],
            permLevel: 0
        }
        exports.help = {
            name: "toplam-komut"
        }  