//UBAH OWNER, NAMA BOT WM DISINI
//UBAH PREMIUM DI FOLDER ALL/DATABASE
require("./all/module.js")
const version = require("@whiskeysockets/baileys/package.json").version
const { color } = require('./all/function')
global.owner = "6285601800364"
global.namaowner = "𝐃𝐢𝐤𝐳乂𝐥𝐚𝐧𝐳"
global.namaowner2 = "owner 👤☕"
global.namabot = "DeltaX5.1" 
global.version = "5.1"
global.foother = "WhatsApp"
global.packname = "deltaX"
global.author = "delta"
global.antibug = true
global.msg = {
"error": "\`bad connection\`",
"wait": "\`wait a minute\`", "group": "\`group only\`", 
"private": "\`private only\`", "admin": "\`admin only\`", 
"adminbot": "\`bot only\`", "owner": "\`owner only\`", 
"developer": "\`developer only\`"
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})