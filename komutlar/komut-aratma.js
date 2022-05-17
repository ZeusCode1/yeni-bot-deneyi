const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!args.length || args.join('').length < 2) {
    return message.reply('lütfen komut adı giriniz. *(2 harf veya 2 harften fazla)*')
  }

  args = args.join('').toLowerCase();
  let commands = client.commands.map(c => c.help.name.toLowerCase()).filter(c => c.includes(args));
  if (commands.length === 0) {
    return message.reply('komut bulunamadı.')
  }
const eembed = new Discord.MessageEmbed()
.setColor(0x36393E)
.setTitle('Komut Arama')
.setDescription(`*${args}* içeren ${commands.length} komut bulundu.`)
.addField('Komutlar',`${commands.join(`\n`)}`)
  await message.channel.send(eembed);
};

exports.conf = {
  aliases: [ 'komut-ara' ],
  enabled: true,
  guildOnly: true,
  kategori:"Genel",
  permLevel:0
};

exports.help = {
  name: 'komut-ara',
  description: 'Botta olan komutları ararsınız.',
  usage: 'komut-ara',
};