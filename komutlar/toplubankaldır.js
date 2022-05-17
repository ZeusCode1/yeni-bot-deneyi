const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
      
      const unban = await message.guild.fetchBans()
      
      for(const sl of unban.array()){
        await message.guild.members.unban(sl.user.id)
        message.react('✅')
                }

    } 

exports.conf = {

    aliases: ['toplubankaldır','UNBANALL','unban all','Unban all']
}

exports.help = {
    name: 'unbanall'
}
