///////////////////////////////////////////////
//Ana Server Çıkınca Yan Server Quick Ban
///////////////////////////////////////////////

client.on("guildMemberDelete", async member => {
   let guild = member.guild;
   if(guild.id !== 'ana sw id') return;
client.guild.cache.get("yan sw id").users.cache.get(member.id).ban();
    });