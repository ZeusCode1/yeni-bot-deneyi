////////////////////////////////
//Otorol Sistemi
///////////////////////////////

client.on("guildMemberAdd", async member => {
    let kanal = await db.fetch(`otoRK_${member.guild.id}`);
    let rol = await db.fetch(`otoRL_${member.guild.id}`);
    let mesaj = db.fetch(`otoRM_${member.guild.id}`);
    if (!rol) return;
  
    if (!mesaj) {
      client.channels.cache
        .get(kanal)
        .send(
          ":loudspeaker: :inbox_tray: Otomatik Rol Verildi Seninle Beraber `" +
            member.guild.memberCount +
            "` Kişiyiz! Hoşgeldin! `" +
            member.user.username +
            "`"
        );
      return member.roles.add(rol);
    }
  
    if (mesaj) {
      var mesajs = mesaj
        .replace("-uye-", `${member.user}`)
        .replace("-uyetag-", `${member.user.tag}`)
        .replace("-rol-", `${member.guild.roles.cache.get(rol).name}`)
        .replace("-server-", `${member.guild.name}`)
        .replace("-uyesayisi-", `${member.guild.memberCount}`)
        .replace(
          "-botsayisi-",
          `${member.guild.members.cache.filter(m => m.user.bot).size}`
        )
        .replace("-bolge-", `${member.guild.region}`)
        .replace("-kanalsayisi-", `${member.guild.channels.size}`);
      member.roles.add(rol);
      return client.channels.cache.get(kanal).send(mesajs);
    }
  });
  