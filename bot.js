const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
var prefix = ayarlar.prefix;

client.on("ready", () => {
  console.log(`Botun Aktif Knk ${client.user.tag}!`);
});

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

///////////// KOMUTLAR BAŞ

////////////// KOMUTLAR SON
////////////// ALTI ELLEME
require("./util/eventLoader")(client);

client.login(ayarlar.token);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });----------------------------------------------------------------

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});


//////////////////////
//rolkoruma
//////////////////////

client.on("roleDelete", async role => {
  let rolkoruma = await db.fetch(`rolk_${role.guild.id}`);
  if (rolkoruma) { 
         const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.guild.roles.create({ data: {
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
}, reason: 'Silinen Roller Tekrar Açıldı.'})
  }
})

//

client.on("roleCreate", async role => {
  let rolkorumaa = await db.fetch(`rolk_${role.guild.id}`);
  if (rolkorumaa) { 
       const entry = await role.guild.fetchAuditLogs({ type: "ROLE_CREATE" }).then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
  role.delete()
  }
})

//////////////////////
//küfürengel
//////////////////////

client.on('message', async message => {
const cdb = require("croxydb") //gerekli modül
if(message.guild){
  const data1 = cdb.get("cd1."+message.guild.id)
  const data2 = cdb.get("cd2."+message.channel.id+message.guild.id)
 
  if(data1){
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];

  let content = message.content.split(' ');
 
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(!message.member.permissions.has('BAN_MEMBERS')){
  message.delete({timeout: 1000});
  message.reply("**Lütfen Küfür Etme!!**")
  }
  }
  })
  }

    if(!data1 && data2){
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];

  let content = message.content.split(' ');
 
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(!message.member.permissions.has('BAN_MEMBERS')){
  message.delete({timeout: 1000});
  message.reply("**Lütfen Küfür Etme!!**")
  }
  }
  })
  }
 
}
  });


////////////////////
//kanalkoruma
////////////////////

client.on("channelDelete", async function(channel) {
  let rol = await db.fetch(`kanalk_${channel.guild.id}`);

  if (rol) {
    const guild = channel.guild.cache;
    let channelp = channel.parentID;

    channel.clone().then(z => {
      let kanal = z.guild.channels.find(c => c.name === z.name);
      kanal.setParent(
        kanal.guild.channels.find(channel => channel.id === channelp)
      );
    });
  }
});

//////////////////////
//Sa-As
/////////////////////

client.on('message', message => {
  // Data--------------------------------------------------------------------
  let sistem = db.fetch(`cmfsaas_${message.guild.id}`)

  // Sa----------------------------------------------------------------------
  var sa = ["Sa", "Selam", "selam", "Slm", "slm", "SA","sa","Sea","sea","SEA","selamın aleyküm","Selamın Aleyküm","SELAMIN ALEYKÜm","selamun aleyküm","Selamun Aleyküm","SELAMUN ALEYKÜM"]

  if(sistem === 'aktif'){
    if(sa.includes(message.content.toLowerCase())){
      message.channel.send(`${message.author} **Aleyküm Selam Dostum, Hoşgeldin.**`)
    }
  } else {
    // Sistem Kapalıysa Bot İplemesin.--------------------------------------
    return;
  }
})

////////////////////////
//REKLAMENGEL
////////////////////////

const reklam = [
  ".com",
  ".net",
  ".xyz",
  ".tk",
  ".pw",
  ".io",
  ".me",
  ".gg",
  "www.",
  "https",
  "http",
  ".gl",
  ".org",
  ".com.tr",
  ".biz",
  "net",
  ".rf",
  ".gd",
  ".az",
  ".party",
".gf"
];
client.on("messageUpdate", async (old, nev) => {

if (old.content != nev.content) {
let i = await db.fetch(`reklam.${nev.member.guild.id}.durum`);
let y = await db.fetch(`reklam.${nev.member.guild.id}.kanal`);
if (i) {

if (reklam.some(word => nev.content.includes(word))) {
if (nev.member.hasPermission("BAN_MEMBERS")) return ;
 //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
const embed = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${nev.author} , **Mesajını editleyerek reklam yapmaya çalıştı!**`)
      .addField("Mesajı:",nev)
  
      nev.delete();
      const embeds = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${nev.author} , **Mesajı editleyerek reklam yapamana izin veremem!**`) 
    client.channels.cache.get(y).send(embed)
      nev.channel.send(embeds).then(msg => msg.delete({timeout:5000}));
    
}
} else {
}
if (!i) return;
}
});

client.on("message", async msg => {


if(msg.author.bot) return;
if(msg.channel.type === "dm") return;
   let y = await db.fetch(`reklam.${msg.member.guild.id}.kanal`);

let i = await db.fetch(`reklam.${msg.member.guild.id}.durum`);
    if (i) {
        if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
          try {
           if (!msg.member.hasPermission("MANAGE_GUILD")) {
           //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
msg.delete({timeout:750});
              const embeds = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` <@${msg.author.id}> , **Bu sunucuda reklam yapmak yasak!**`)
msg.channel.send(embeds).then(msg => msg.delete({timeout: 5000}));
          const embed = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${msg.author} , **Reklam yapmaya çalıştı!**`) .addField("Mesajı:",msg)
         client.channels.cache.get(y).send(embed)
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
   if(!i) return ;
});

///////////////////
//Ping
////////////////////

client.on('message', msg => {

if(client.ping > 2500) {

            let bölgeler = ['singapore', 'eu-central', 'india', 'us-central', 'london',
            'eu-west', 'amsterdam', 'brazil', 'us-west', 'hongkong',
            'us-south', 'southafrica', 'us-east', 'sydney', 'frankfurt',
            'russia']
           let yenibölge = bölgeler[Math.floor(Math.random() * bölgeler.length)]
           let sChannel = msg.guild.channels.find(c => c.name === "ddos-system")

           sChannel.send(`Sunucu'ya Vuruyorlar \nSunucu Bölgesini Değiştirdim \n __**${yenibölge}**__ :tik: __**Sunucu Pingimiz**__ :`+ client.ping)
           msg.guild.setRegion(yenibölge)
           .then(g => console.log(" bölge:" + g.region))
           .then(g => msg.channel.send("bölge **"+ g.region  + " olarak değişti"))
           .catch(console.error);
}});

/////////////////////////
//Sunucuya Eklendim
/////////////////////////

client.on('guildCreate', guild => {

let ekleme = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle(" Bir Sunucuya Eklendim! ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi",`<@${guild.ownerID}>`)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

  client.channels.cache.get('962682196211167293').send(ekleme);

});

///////////////////////
//Sunucudan Atıldım
///////////////////////

client.on('guildDelete', guild => {

let matheus = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(" Bir Sunucudan Atıldım ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi",`<@${guild.ownerID}>`)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

  client.channels.cache.get('962682651830022204').send(matheus);

});


client.on("guildMemberUpdate", async (oldMember, newMember) => {
let kanal = "962683396100853880"
let rol = "945292565228437505"
if (oldMember.guild.id !== 'swid') return;
if(oldMember._roles === newMember._roles) return;
if(oldMember.roles.cache.has(rol)) return;
if(!newMember.roles.cache.has(rol)) return;
client.channels.cache.get(kanal).send(`${newMember.user.tag} yetkili kadrosuna hoş geldin!`)
});


//////////////////////////////
//Rainbow Role
/////////////////////////////
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;


client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

//////////////////////////
//bot eklenince mesaj
//////////////////////////

client.on("guildCreate", async guild => {
  const biggz = [
    "Bot sunucuna eklendi.Tebrikler dostum.",
    "Bu bot **OrhanUçar#6318 Ve RTG#0001** tarafından geliştirilmektedir.",
    'iyi günlerde kullanın :flag_tr..'
  ];
  guild.owner.send(biggz);
  console.log(`LOG: ${guild.name}. sunucuya katıldım!`);
});

///////////////////////////
//everhere&engel
//////////////////////////

//client.on('message', message => {
 // if (message.content.includes('@everyone')) {
 //   message.reply(`??Lütfen **everyone** Kullanmayınız.!!`)
 //   message.delete()
 // }
//});
//client.on('message', message => {
//  if (message.content.includes('@here')) {
//    message.reply(`??Lütfen **here** Kullanmayınız.!!`)
//    message.delete()
//  }
//});

///////////////////////////
//Etiket Prefix Bot
//////////////////////////

client.on('message', async msg => {
  if(msg.content == `<@953273451148357632>`) return msg.channel.send(`> **değistir | Prefix**\n\n> **Sanırım beni etiketlediniz.**\n > **Buyurun prefixim** \`${prefix}\``);
});



//////////////////////////////////
//Reklam Kick
/////////////////////////////////

client.on("messageCreate", async message => {

const cdb = require("orio.db")
let uyarisayisi = await cdb.get(`reklamuyari_${message.author.id}`)
let reklamkick = await cdb.get(`reklamkick_${message.guild.id}`)
let kullanici = message.member; 

if (reklamkick == 'acik') {  if(!kullanici.permissions.has("MANAGE_GUILD")){

const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",]

if (reklam.some(word => message.content.toLowerCase().includes(word))) {

message.delete()
cdb.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme

if (uyarisayisi == 1) {
let uyari = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription(`<@${message.author.id}> Reklam yapmaya devam edersen kickleniceksin (1/3)`)
.setTimestamp()        
message.channel.send({embeds: [uyari] })                
}
          
if(uyarisayisi == 2) {
let uyari = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription(`<@${message.author.id}> Reklam yapmaya devam edersen kickleniceksin (2/3)`)
.setTimestamp()        
message.channel.send({embeds:[uyari]})
}
          
if(uyarisayisi === 3) {
await message.member.kick([`Reklam kick sistemi`])

let uyari = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription(`<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacak`)
.setTimestamp()               
message.channel.send({embeds:[uyari]}) 
}
          
if(uyarisayisi > 4) {
await message.member.ban({reason: `Reklam ban sistemi`})
cdb.delete(`reklamuyari_${message.author.id}`)

let uyari = new Discord.MessageEmbed()
.setColor("BLUE")
.setDescription(`<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`)
.setTimestamp()
message.channel.send({embeds:[uyari]})
}}}}
})


//////////////////////////////
//Spam Koruma
//////////////////////////////

const dctrat = require('dctr-antispam.js'); 

var authors = [];
var warned = [];

var messageLog = [];

client.on('message', async message => {
const spam = await db.fetch(`spam.${message.guild.id}`);
if(!spam) return;
const maxTime = await db.fetch(`max.${message.guild.id}.${message.author.id}`);
const timeout = await db.fetch(`time.${message.guild.id}.${message.author.id}`);
db.add(`mesaj.${message.guild.id}.${message.author.id}`, 1)
if(timeout) {
const sayı = await db.fetch(`mesaj.${message.guild.id}.${message.author.id}`);
if(Date.now() < maxTime) {
  const AsreaperHerDaim = new Discord.MessageEmbed()
  .setColor(0x36393F)
  .setDescription(` <@${message.author.id}> , **Bu sunucuda spam yapmak yasak!**`)
 // .setFooter(`Bu mesaj otomatik olarak silinecektir.`)
 if (message.member.hasPermission("BAN_MEMBERS")) return ;
 message.channel.send(AsreaperHerDaim).then(msg => msg.delete({timeout: 1500}));
  return message.delete();
  
}
} else {
db.set(`time.${message.guild.id}.${message.author.id}`, 'ok');
db.set(`max.${message.guild.id}.${message.author.id}`, Date.now()+3000);
setTimeout(() => {
db.delete(`mesaj.${message.guild.id}.${message.author.id}`);
db.delete(`time.${message.guild.id}.${message.author.id}`);
}, 500) // default : 500
}


});

//////////////////////////////////
//Ban Koruma 
//////////////////////////////////

const wait = require("util").promisify(setTimeout);
client.on("guildBanAdd", async function(guild, user) {
 
    let rol = guild.roles.get("945292565492666403")
    let kanal = guild.channels.get("966018277937664140")
    if (!kanal) return;
    if (!rol) return;
    wait(1000);
    const entry = await guild
      .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
      .then(audit => audit.entries.first());
    const yetkili = await guild.members.get(entry.executor.id);
    
    if (entry.executor.id == guild.owner.id) return;
    const kisi = guild.members.get(entry.executor.id);
    kisi.roles.forEach(x => kisi.removeRole(x).then(f => kisi.addRole(rol.id)))
    
    
    
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setTitle(`UYARI`)
      .setDescription(
        `**<@${yetkili.id}> Sağ Tık Ban Attığı için Bütün Yetkileri Alındı!\n \n__▪ Yasaklanan Kullanıcı:__ \`${user.tag}\`\n__▪ Yasaklanan Kullanıcı ID:__ \`${user.id}\`**`
      )
      .setFooter(guild.name)
      .setTimestamp()
      .setThumbnail(guild.iconURL);
    kanal.send(embed);
    guild.owner.send(
      `**\`${yetkili.tag}\`  İsimli Yetkili  \`${user.tag}\`  Adlı Kişiyi Sağ Tık ile Banladı Ve Yetkilerini Aldım!**`
    );
 
});

///////////////////////////
//Yeni Hesap Engel
//////////////////////////

client.on('guildMemberAdd', member => {
if(member.guild.id !== "swid") return;
  const kurulus = new Date().getTime()- client.users.get(member.id).createdAt.getTime();
  if (kurulus < 1000 * 60 * 60 * 24 * 14) { member.send("Hesabın 14 günden eski olduğu için bu sunucuya giremessin!") ("member.kick();") }
}) 


///////////////////////////////////////////////
//Ana Server Çıkınca Yan Server Quick Ban
///////////////////////////////////////////////

client.on("guildMemberDelete", async member => {
   let guild = member.guild;
   if(guild.id !== '967067073316552714') return;
client.guild.cache.get("945292565228437504").users.cache.get(member.id).ban();
    });


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

///////////////////////////////
//Anti-Raid
//////////////////////////////

client.on("guildMemberAdd", async member => {
  let kanal =
    (await db.fetch(`antiraidK_${member.guild.id}`)) == "anti-raid-aç";
  if (!kanal) return;
  var synx2 = member.guild.owner;
  if (member.user.bot === true) {
    if (db.fetch(`botizin_${member.guild.id}.${member.id}`) == "aktif") {
      let synx = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(member.user.avatarURL())
        .setDescription(
          `**${member.user.tag}** (${member.id}) adlı bota bir yetkili izin verdi eğer kaldırmak istiyorsanız **!bot-izni kaldır <botid>**.`
        );
      synx2.send(synx);
    } else {
      let izinverilmemişbot = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(member.user.avatarURL())
        .setDescription(
          "**" +
            member.user.tag +
            "**" +
            " (" +
            member.id +
            ") " +
            "adlı bot sunucuya eklendi ve banladım eğer izin vermek istiyorsanız **" +
            "!bot-izni ver <botid>**"
        );
      member.kick(); // Eğer sunucudan atmak istiyorsanız ban kısmını kick yapın
      synx2.send(izinverilmemişbot);
    }
  }
});

////////////////////////
//Everyone Here Engel
////////////////////////

client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.permissions.has("ADMINISTRATOR")) {
        msg.delete();
        return msg
          .reply("Yakaladım Seni! Everyone ve Here Etiketlemek Yasak.")
          .then(wiskyx => wiskyx.delete({ timeout: 5000 }));
      }
    }
  } else if (hereengelle == "kapali") {
  }
});

client.on('ready', () => {

  // Oynuyor Kısmı
  
      var actvs = [
        `${prefix}yardım ${client.guilds.cache.size} sunucuyu`,
        `${prefix}yardım ${client.users.cache.size} Kullanıcıyı`, 
        `${prefix}yardım`
    ];
    
    client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'LISTENING' });
    setInterval(() => {
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'LISTENING'});
    }, 15000);
    
  
      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kullanıcılar       : ${client.users.cache.size}`);
      console.log (`Prefix             : ${ayarlar.prefix}`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log ('_________________________________________');
    
    });



client.login(ayarlar.token);
