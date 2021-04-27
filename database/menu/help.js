const help = (pushname, prefix, botName, ownerName, reqXp, uangku) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 INFO 〉*
   ╽
   ┠≽ *Nombre* : ${pushname}
   ┠≽ *XP* : ${reqXp}
   ┠≽ *Dinero* : ${uangku}
   ┠≽ *Registrado : ✔️
   ╿
┯┷ *〈 BOT INFO 〉*
╽
┠≽ *Prefijo* : 「  ${prefix}  」
┠≽ *Creador* : ${ownerName}
┠≽ *Version* : 4
┠≽ *Canal* : https://www.instagram.com/p/CM-0IeqBfER/?igshid=13hed23zgua48
╿
┷┯ *〈 MENU 〉*
   ┠┯ *〈 18+ 〉*
   ╽
   ┠≽ *${prefix}randomhentai*
   ┃ *Desc* : Sending Random Hentai Image
   ┠──────────────╼
   ┠≽ *${prefix}nsfwtrap*
   ┃ *Desc* : Sending Random NSFW Trap Image (nsfw needed)
   ┠──────────────╼
   ┠≽ *${prefix}nsfwneko*
   ┃ *Desc* : Sending Random NSFW Neko Image (nsfw needed)
   ╿ *${ownerName}*
   
   ┷┯ *〈 DOWNLOADER 〉*
   ╽
   ┠≽ *${prefix}pinterest* <query>
   ┃ *Desc* : Download Image From Pinterest
   ┠──────────────╼
   ┠≽ *${prefix}ytmp3* <linkyt>
   ┃ *Desc* : Download Youtube Video to Mp3
   ┠──────────────╼
   ┠≽ *${prefix}ytmp4* <linkyt>
   ┃ *Desc* : Download Youtube Video
   ┠──────────────╼
   ┠≽ *${prefix}tiktok* <linktiktok>
   ┃ *Desc* : Download TikTok Video
   ╿ *${ownerName}*
   
   ┷┯ *〈 EDUCATION 〉*
   ╽
   ┠≽ *${prefix}wiki* <query>
   ┃ *Desc* : Search According to Wikipedia [indo]
   ┠──────────────╼
   ┠≽ *${prefix}wikien* <query>
   ┃ *Desc* : Search According to Wikipedia [english]
   ┠──────────────╼
   ┠≽ *${prefix}nulis* <text>
   ┃ *Desc* : Write a Text on Book
   ┠──────────────╼
   ┠≽ *${prefix}quotes*
   ┃ *Desc* : Send a Random Quotes
   ┠──────────────╼
   ┠≽ *${prefix}quotes2*
   ┃ *Desc* : Send a Random Quotes2
   ┠──────────────╼
   ┠≽ *${prefix}tafsirmimpi* <dream>
   ┃ *Desc* : Send a Dream Interpretation
   ┠──────────────╼
   ┠≽ *${prefix}translate* <language_code>|<text>
   ┃ *Desc* : Translating a word
   ┠──────────────╼
   ┠≽ *${prefix}artinama* <name>
   ┃ *Desc* : Interpret Names
   ╿ *${ownerName}*
   ╿
┷┯ *〈 FUN 〉*
   ╽
   ┠≽ *${prefix}alay* <text>
   ┃ *Desc* : Changing Words Into Alay
   ┠──────────────╼
   ┠≽ *${prefix}bucin*
   ┃ *Desc* : Send a Random Slave of Love
   ┠──────────────╼
   ┠≽ *${prefix}trust*
   ┃ *Desc* : Send a Random Truth
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : Send a Random Dare
   ┠──────────────╼
   ┠≽ *${prefix}simi* <text>
   ┃ *Desc* : Talk to Simi
   ╿ *${ownerName}*
   ╿
┷┯ *〈 GROUP 〉*
   ╽
   ┠≽ *${prefix}opengc*
   ┃ *Desc* : Opening Group
   ┠──────────────╼
   ┠≽ *${prefix}closegc*
   ┃ *Desc* : Closing the Group
   ┠──────────────╼
   ┠≽ *${prefix}promote* <@tag>
   ┃ *Desc* : Promote People to be Admins Group
   ┠──────────────╼
   ┠≽ *${prefix}demote* <@tag>
   ┃ *Desc* : Demote People to be Members Group
   ┠──────────────╼
   ┠≽ *${prefix}tagall*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall2*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall3*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall4*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall5*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}add* <12542123926>
   ┃ *Desc* : Add Members
   ┠──────────────╼
   ┠≽ *${prefix}kick* <@tag>
   ┃ *Desc* : Kick Member Group
   ┠──────────────╼
   ┠≽ *${prefix}listadmins*
   ┃ *Desc* : Show List Group Admins
   ┠──────────────╼
   ┠≽ *${prefix}linkgroup*
   ┃ *Desc* : Show Group Link
   ┠──────────────╼
   ┠≽ *${prefix}leave*
   ┃ *Desc* : Tell the Bot to Leave the Group
   ┠──────────────╼
   ┠≽ *${prefix}welcome* <1/0>
   ┃ *Desc* : Activating / Deactivating the Welcome Feature
   ┠──────────────╼
   ┠≽ *${prefix}nsfw* <1/0>
   ┃ *Desc* : Activating / Deactivating the NSFW Feature
   ┠──────────────╼
   ┠≽ *${prefix}delete*
   ┃ *Desc* : Delete Bot Message
   ┠──────────────╼
   ┠≽ *${prefix}simih* <1/0>
   ┃ *Desc* : Activating / Deactivating the Simih Feature
   ┠──────────────╼
   ┠≽ *${prefix}tagme*
   ┃ *Desc* : Mention You
   ┠──────────────╼
   ┠≽ *${prefix}ownergroup*
   ┃ *Desc* : Shows who the Group Owner is
   ╿ *${ownerName}*,
   ╿
┷┯ *〈 IMAGE MAKER 〉*
   ╽
   ┠≽ *${prefix}bpink* <text>
   ┃ *Desc* : Make BlackPink Image
   ┠──────────────╼
   ┠≽ *${prefix}snowwrite* <text|text>
   ┃ *Desc* : Make Snowwrite Image
   ┠──────────────╼
   ┠≽ *${prefix}3dtext* <text>
   ┃ *Desc* : Make 3D Text Image
   ┠──────────────╼
   ┠≽ *${prefix}firetext* <text>
   ┃ *Desc* : Make Fire Text Image
   ┠──────────────╼
   ┠≽ *${prefix}glitch* <text|text>
   ┃ *Desc* : Make Glitch Image
   ┠──────────────╼
   ┠≽ *${prefix}shadow* <text>
   ┃ *Desc* : Make Shadow Image
   ┠──────────────╼
   ┠≽ *${prefix}burnpaper* <text>
   ┃ *Desc* : Make Burn Papper Image
   ┠──────────────╼
   ┠≽ *${prefix}coffee* <text>
   ┃ *Desc* : Make Coffee Image
   ┠──────────────╼
   ┠≽ *${prefix}lovepaper* <text>
   ┃ *Desc* : Make Love Papper Image
   ┠──────────────╼
   ┠≽ *${prefix}woodblock* <text>
   ┃ *Desc* : Make Wood Block Image
   ┠──────────────╼
   ┠≽ *${prefix}qowheart* <text>
   ┃ *Desc* : Make Quotes On Wood Hearts Image
   ┠──────────────╼
   ┠≽ *${prefix}mutgrass* <text>
   ┃ *Desc* : Make Message Under The Grass Image
   ┠──────────────╼
   ┠≽ *${prefix}undergocean* <text>
   ┃ *Desc* : Make Message Underground Ocean Image
   ┠──────────────╼
   ┠≽ *${prefix}woodenboards* <text>
   ┃ *Desc* : Make Wooden Boards Image
   ┠──────────────╼
   ┠≽ *${prefix}wolfmetal* <text>
   ┃ *Desc* : Make Wolf Metal Image
   ┠──────────────╼
   ┠≽ *${prefix}metalictglow* <text>
   ┃ *Desc* : Make Metalic Text Glow Image
   ┠──────────────╼
   ┠≽ *${prefix}8bit* <text|text>
   ┃ *Desc* : Make 8 Bit Image
   ┠──────────────╼
   ┠≽ *${prefix}herrypotter* <text>
   ┃ *Desc* : Make Herry Potter Image
   ╿ *${ownerName}*
   ╿
┷┯ *〈 INFORMATION 〉*
   ╽
   ┠≽ *${prefix}bahasa*
   ┃ *Desc* : Submit Language Code
   ┠──────────────╼
   ┠≽ *${prefix}kodenegara*
   ┃ *Desc* : Send Country Code
   ┠──────────────╼
   ┠≽ *${prefix}kbbi* <question>
   ┃ *Desc* : Asking KBBI
   ┠──────────────╼
   ┠≽ *${prefix}fakta*
   ┃ *Desc* : Send a Random Fact
   ┠──────────────╼
   ┠≽ *${prefix}infocuaca* <area>
   ┃ *Desc* : Send Weather Information
   ┠──────────────╼
   ┠≽ *${prefix}infogempa*
   ┃ *Desc* : Sending Earthquake Information
   ┠──────────────╼
   ┠≽ *${prefix}covidcountry* <country>
   ┃ *Desc* : Sending Covid-19 Information
   ╿ *${ownerName}*
   ╿
┷┯ *〈 ISLAM 〉*
   ╽
   ┠≽ *${prefix}quran*
   ┃ *Desc* : Sending Qur'anic Verses at Random
   ┠──────────────╼
   ┠≽ *${prefix}jsholat* <area>
   ┃ *Desc* : Sending Prayer Schedule Information
   ╿ *${ownerName}*
   ╿
┷┯ *〈 KERANG AJAIB 〉*
   ╽
   ┠≽ *${prefix}apakah* <optional>
   ┃ *Desc* : Asking Is
   ┠──────────────╼
   ┠≽ *${prefix}bisakah* <optional>
   ┃ *Desc* : Ask Can
   ┠──────────────╼
   ┠≽ *${prefix}kapankah* <optional>
   ┃ *Desc* : Ask When
   ┠──────────────╼
   ┠≽ *${prefix}watak*
   ┃ *Desc* : Transmitting Characters at Random
   ┠──────────────╼
   ┠≽ *${prefix}hobby*
   ┃ *Desc* : Randomly Sending Hobbies
   ┠──────────────╼
   ┠≽ *${prefix}gantengcek*
   ┃ *Desc* : How Handsome
   ┠──────────────╼
   ┠≽ *${prefix}cantikcek*
   ┃ *Desc* : How Beautiful
   ╿ *${ownerName}*
   ╿
┷┯ *〈 LIMIT 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Check Your Limit
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Check Your Money
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Buy Limit
   ╿ *${ownerName}*
   ╿
┷┯ *〈 LOGO MAKER 〉*
   ╽
   ┠≽ *${prefix}ninjalogo* <text|text>
   ┃ *Desc* : Make Ninja Logo
   ┠──────────────╼
   ┠≽ *${prefix}logowolf* <text|text>
   ┃ *Desc* : Make Wolf Logo
   ┠──────────────╼
   ┠≽ *${prefix}logowolf2* <text|text>
   ┃ *Desc* : Make Wolf Logo2
   ┠──────────────╼
   ┠≽ *${prefix}phlogo* <text|text>
   ┃ *Desc* : Make PornHub Logo
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo* <text>
   ┃ *Desc* : Make Neon Logo
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo2* <text>
   ┃ *Desc* : Make Neon Logo2
   ┠──────────────╼
   ┠≽ *${prefix}lionlogo* <text|text>
   ┃ *Desc* : Make Lion Logo
   ┠──────────────╼
   ┠≽ *${prefix}jokerlogo* <text>
   ┃ *Desc* : Make Joker Logo
   ┠──────────────╼
   ┠≽ *${prefix}pubglogo* <text|text>
   ┃ *Desc* : Make PUBG Logo
   ╿ *${ownerName}*
   ╿
┷┯ *〈 MEME 〉*
   ╽
   ┠≽ *${prefix}meme*
   ┃ *Desc* : Send Random Meme[eng]
   ┠≽ *${prefix}memeindo*
   ┃ *Desc* : Send Random Meme [indo]
   ╿ *${ownerName}*
   ╿
┷┯ *〈 MUSIC 〉*
   ╽
   ┠≽ *${prefix}play* <music_name>
   ┃ *Desc* : Play Music Audio
   ┠──────────────╼
   ┠≽ *${prefix}joox* <music_name>
   ┃ *Desc* : Play Music Joox
   ┠──────────────╼
   ┠≽ *${prefix}lirik* <music_name>
   ┃ *Desc* : Search Music Lyrics
   ┠──────────────╼
   ┠≽ *${prefix}chord* <music_name>
   ┃ *Desc* : Search Chord Music Lyrics
   ╿ *${ownerName}*
   ╿
┷┯ *〈 OTHER 〉*
   ╽
   ┠≽ *${prefix}send*
   ┠≽ *${prefix}wame*
   ┠≽ *${prefix}virtex*
   ┠≽ *${prefix}qrcode* <text>
   ┠≽ *${prefix}timer*
   ┠≽ *${prefix}fml*
   ┠≽ *${prefix}fml2*
   ╿ *${ownerName}*
   ╿
┷┯ *〈 OWNER 〉*
   ╽
   ┠≽ *${prefix}setprefix* <text/optional>
   ┃ *Desc* : Replace Prefix
   ┠──────────────╼
   ┠≽ *${prefix}block* <@tag>
   ┃ *Desc* : Block User
   ┠──────────────╼
   ┠≽ *${prefix}unblock* <@tag>
   ┃ *Desc* : Unblock User
   ┠──────────────╼
   ┠≽ *${prefix}bc* <text>
   ┃ *Desc* : Broadcast to All Contact & Group
   ┠──────────────╼
   ┠≽ *${prefix}clone* <@tag>
   ┃ *Desc* : Clone Profile From Other Members
   ┠──────────────╼
   ┠≽ *${prefix}clearall
   ┃ *Desc* : Clear All Chat
   ╿ *${ownerName}*
   ╿
┷┯ *〈 SEARCH 〉*
   ╽
   ┠≽ *${prefix}wait
   ┃ *Desc* : Send Name Anime & Short Scene
   ┠──────────────╼
   ┠≽ *${prefix}ytsearch <query>
   ┃ *Desc* : Search YouTube Video
   ┠──────────────╼
   ┠≽ *${prefix}trendtwit
   ┃ *Desc* : Search Trending Twitter Video
   ╿ *${ownerName}*
   ╿
┷┯ *〈 TEXT TO SPEACH 〉*
   ╽
   ┠≽ *${prefix}tts* <language code|text>
   ┃ *Desc* : Google Text To Speach
   ╿ *${ownerName}
   ╿
┷┯ *〈 STALK 〉*
   ╽
   ┠≽ *${prefix}tiktokstalk* <username>
   ┃ *Desc* : Get TikTok Information User
   ┠≽ *${prefix}igstalk* <username>
   ┃ *Desc* : Get Instagram Information User
   ╿ *${ownerName}*
   ╿
┷┯ *〈 STAY ON SCREEN 〉*
   ╽
   ┠≽ *${prefix}afk* <reason>
   ┃ *Desc* : AFK :V
   ╿ *${ownerName}*
   ╿
┷┯ *〈 STICKER MAKER 〉*
   ╽
   ┠≽ *${prefix}sticker*
   ┃ *Desc* : Faça um Sticker com imagem
   ┠──────────────╼
   ┠≽ *${prefix}stickergif*
   ┃ *Desc* : Faça um Sticker animado com Gif/Video
   ┠──────────────╼
   ┠≽ *${prefix}ttp*
   ┃ *Desc* : Texto para o sticker
   ╿ *${ownerName}*
   ╿
┷┯ *〈 TRUST OR DARE 〉*
   ╽
   ┠≽ *${prefix}trust*
   ┃ *Desc* : Random trust
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : Random Dare
   ╿ *${ownerName}*
   ╿
┷┯ *〈 WEEBOO 〉*
   ╽
   ┠≽ *${prefix}neonime*
   ┃ *Desc* : Search Neonime
   ┠──────────────╼
   ┠≽ *${prefix}pokemon*
   ┃ *Desc* : Random Pokemon Image
   ┠──────────────╼
   ┠≽ *${prefix}loli*
   ┃ *Desc* : Random Loli Image
   ┠──────────────╼
   ┠≽ *${prefix}waifu*
   ┃ *Desc* : Random Waifu Image
   ┠──────────────╼
   ┠≽ *${prefix}randomanime*
   ┃ *Desc* : Random Anime Image
   ┠──────────────╼
   ┠≽ *${prefix}husbu*
   ┃ *Desc* : Random Husbu Image
   ┠──────────────╼
   ┠≽ *${prefix}husbu2*
   ┃ *Desc* : Random Husbu2 Image
   ┠──────────────╼
   ┠≽ *${prefix}wait*
   ┃ *Desc* : Send Anime Name & Short Scene
   ┠──────────────╼
   ┠≽ *${prefix}nekonime*
   ┃ *Desc* : Random Nekonime Image
   ╿ *${ownerName}*
   ╿
┷┯ *〈 LEVEL 〉*
   ╽
   ┠≽ *${prefix}level*
   ┃ *Desc* : Check Your Level
   ┠──────────────╼
   ┠≽ *${prefix}leveling* <1/0>
   ┃ *Desc* : Enabling / Disabling Leveling Features
   ┠──────────────╼
   ┠≽ *${prefix}mining*
   ┃ *Desc* : Mining XP
   ┠──────────────╼
   ┠≽ *${prefix}event* <1/0>
   ┃ *Desc* : Enabling / Disabling Event Features
   ╿ *${ownerName}*
   
   
   `
}
exports.help = help
