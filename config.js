gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/DcZLGtASDiQDDH1RGtmWvP', ''] // ganti jadi group lu
global.owner = ['6282268736623','6283897873987','6281298733743'] // Put your number here //owner eval
global.kontak = ['6282268736623','6283897873987','6281298733743'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['0'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  rey: 'https://server-api-rey.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'https://instagram.com/thelast_owl'
namagithub = 'https://github.com/Dedytobing'
kasihcaption = `Nih kak`
namakontak1 = 'Dedy 3gp'
namakontak2 = 'Kevin 3gp'
namakontak3 = 'Robert 3gp'

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = '3gp Bot' // ganti aja
global.author = 'Have nice day' // ganti aja

//yyy
bc = '3gp' //ZeusBotz Broadcast
footer = '\n© 3gp'
namabot = '3gp'
namalu = 'Ownerku'
watermark = '3gp' //ganti aja

// 
wait = '_*Tunggu Sebentar...*_'
global.botwm = '3gp'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/DcZLGtASDiQDDH1RGtmWvP'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Oleh karena itu sadarlah, dan bertobatlah, supaya dosa-dosamu dihapuskan, ketika saat penyegaran akan datang dari hadirat Tuhan.” \n(Kisah Para Rasul 3:19).'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

// Ubah saja SC dari AlyaaXzy
global.image = 'https://telegra.ph/file/d86f8e2e032fbac81b4f0.jpg'

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 50 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})