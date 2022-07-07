/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['6281946945315','6285646606905','447533021061']
global.premium = ['6281946945315']
global.packname = 'Sticker by'
global.author = 'Raf Botz\n\nwa.me/447533021061'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '*Gagal Tolol, Canda Aoakowka Kontol*',
    admin: '*Lu Cuman Member Kontol, Jan Sok Nguasai Gc*‼️',
    botAdmin: '*Bot Bkn Admin Tolol Buta*',
    owner: '*Lu Cuman User Kontol*',
    group: '*Fitur Khusus Grup Tolol!*',
    private: '*Fitur Khusus Chat Pribadi Tolol*',
    bot: '*Fitur Khusus Bot Tolol*',
    wait: '*Tunggu Sebentar Ya Sayang...*',
    endLimit: '*Limit Lu Habis Tolol*',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/20220625_223313.png')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
