const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  
    let intiharsebep = args.join(" ");
    if(intiharsebep.length < 1) {
    return message.reply('_**Neden İntihar Ettiğini Belirtmelisin.**_')
    } else {    
   message.delete()
  const intihar = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle('İNTİHAR VAKASI!')
      .setDescription(`${message.author.username} │ Adlı Kullanıcı **${intiharsebep}** Yüzünden İntihar Etti ! `)
    
      message.channel.send(intihar);
    
    }

    
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    kategori: "Eğlence",
    permLevel: 0
  };
  
  exports.help = {
    name: 'intihar-et',
    description: "İntihar edersiniz :(",
    usage: "intihar-et"
   
  };