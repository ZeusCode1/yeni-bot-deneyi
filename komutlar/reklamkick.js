const db = require('orio.db')
const Discord = require('discord.js')
exports.run = async (bot, message, args) => {

    if (!message.member.permissions.has('ADMINISTRATOR'))
        return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  
    if (!args[0]) return message.channel.send(':no_entry: Sistemi kullanabilmek için: `reklamkick aç veya kapat` yazın.')

    if (args[0] == 'aç') {
        db.set(`reklamkick_${message.guild.id}`, 'acik')
        message.channel.send(`Reklam kick sistemi açıldı. Reklam yapanlar 3 uyarıdan sonra kicklenecek.`)
    }
    if (args[0] == 'kapat') {
        db.set(`reklamkick_${message.guild.id}`, 'kapali')
        message.channel.send(`Reklam kick sistemi kapatıldı`)

    }
}

exports.conf = {
    aliases: ['reklam-kick']
}
// IlgarCaliskan
exports.help = {
    name: 'reklamkick'
}