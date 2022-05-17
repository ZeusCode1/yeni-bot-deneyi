const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (args, message, client) => {
    if (message.author.id !== '777521730570682388')
        return message.channel.send(
            new Discord.MessageEmbed().setColor(`RED`).setDescription(`\`${message.author.tag}\`, **Bu Komutu Çalıştırmak İçin Botun __Geliştiricisi__ Olmanız Lazım !**`)).then(msg => msg.delete({timeout: 5000}));
    message.delete()
    message.reply(`**Bot Yeniden Başlatılıyor...**`).then(msg => {
        console.log(`Bot Tekrardan Işık Hızında`);
        process.exit(0);
    })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ 'reboot', 'yeniden-başlat', 'yenile' ],
    permLevel: 0
};
exports.help = {
    name: "başlat",
    description: "Botunuzu yeniden başlatır.",
    usage: ".reboot"
};
