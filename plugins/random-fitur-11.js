import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'umma') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/downloader/umma?url=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.title}
*Name:* ${x.result.author.name}
*Caption:* ${x.result.caption}
*Type:* ${x.result.type}
*Like.:* ${x.result.like}
*Link.:* ${Array.from(x.result.media)}
`, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'dlanoboy') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://62.182.83.93/2021/03/black-clover-episode-170`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/downloader/anoboy?url=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.judul}
*uptime:* ${x.result.uptime}

*Mp4 Upload:*
1. ${x.result.mforu.SD}
2. ${x.result.mforu.HD}

*Zippyshare:*
1. ${x.result.zippy.SD}
2. ${x.result.zippy.HD}

*Mirrored:*
1. ${x.result.mirror.SD}
2. ${x.result.mirror.HD}
`, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'animesearch') {
if (!text) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/anime?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result[0].judul}
*Link:* ${x.result[0].link}
`, wm, `${x.result[0].thumbnail}`, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'animesearchv2') {
if (!text) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/animev2?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result[0].title}
*Link:* ${x.result[0].url}
*Title:* ${x.result[0].mal_id}
*Synopsis:* ${x.result[0].synopsis}
`, wm, `${x.result[0].image_url}`, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'mangasearch') {
if (!text) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/manga?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result[0].judul}
*Link:* ${x.result[0].link}
`, wm, `${x.result[0].thumbnail}`, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'mangasearchv2') {
if (!text) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/animev2?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result[0].title}
*Link:* ${x.result[0].url}
*Title:* ${x.result[0].mal_id}
*Synopsis:* ${x.result[0].synopsis}
`, wm, `${x.result[0].image_url}`, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'kusonime2') {
if (!text) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/kusonime?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.judul}
*Genre:* ${x.result.genre}
*status:* ${x.result.status}
*produser:* ${x.result.produser}
*rate:* ${x.result.rate}
*link:* ${x.result.link}
*durasi:* ${x.result.durasi}
*desk:* ${x.result.desk}
`, wm, `${x.result.thumb}`, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'anoboy') {
if (!text) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://fatiharridho.herokuapp.com/api/anime/anoboy?query=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result[0].judul}
*Link:* ${x.result[0].link}
`, wm, `${x.result[0].thumb}`, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'storyanime') {
let res = `https://fatiharridho.herokuapp.com/api/anime/storyanime`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'sfilesearch') {
if (!text) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://bx-hunter.herokuapp.com/api/sfilesearch?apikey=dno8pZJW&text=${text}`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result[0].nama}
*Size:* ${x.result[0].size}
*Link:* ${x.result[0].link}
`, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'stikwa') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/search/sticker?q=${text}&apikey=BetaBotz`)
let x = await f.json()
let url = x.result
await conn.sendFile(m.chat, url.getRandom(), 'sticker.webp', '', m, { asSticker: true })

await conn.sendButton(m.chat, `*Mau Lagi Gak?*
Pencet di bawah bang ☺️`, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m)
}

if (command == 'apk') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/search/apk?query=${text}&apikey=BetaBotz`)
let jsons = await f.json()
let caption = `\n*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `*Result:*
*Title:* ${x.name}
*Desc:* ${x.desc}
*Down:* ${x.dl_url}
*Link:* ${x.url}
`}
        return m.reply(caption)
}

if (command == 'gbwa') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/search/grupwa?grup=${text}&apikey=BetaBotz`)
let jsons = await f.json()
let caption = `\n*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `*Result:*
*Title:* ${x.nama}
*Link:* ${x.link}
`}
        return m.reply(caption)
}

if (command == 'stiktele') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} https://t.me/addstickers/geestickerpack`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/telesticker?url=${text}&apikey=BetaBotz`)
let x = await f.json()
let url = x.result
await conn.sendFile(m.chat, url.getRandom(), 'sticker.webp', '', m)

await conn.sendButton(m.chat, `*Mau Lagi Gak?*
Pencet di bawah bang ☺️`, author, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m)
}

if (command == 'ytmp4dl') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://youtu.be/6l5V3BWDcMw`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/ytmp4?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.title}
*channel:* ${x.result.channel}
*published:* ${x.result.published}
*views:* ${x.result.views}
`, wm, `${x.result.thumb}`, [
                ['Next', `${usedPrefix}get ${x.result.url}`]
            ], m, fdoc)
}

if (command == 'ytmp3dl') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://youtu.be/6l5V3BWDcMw`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/ytmp3?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.title}
*channel:* ${x.result.channel}
*published:* ${x.result.published}
*views:* ${x.result.views}
`, wm, `${x.result.thumb}`, [
                ['Next', `${usedPrefix}get ${x.result.url}`]
            ], m, fdoc)
}

if (command == 'playmp4') {
if (!text) throw `Contoh:\n${usedPrefix + command} Hello`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/yt/playmp4?query=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.title}
*channel:* ${x.channel}
*published:* ${x.published}
*views:* ${x.views}
`, wm, `${x.thumb}`, [
                ['Next', `${usedPrefix}get ${x.url}`]
            ], m, fdoc)
}

if (command == 'tiktok3') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSeJ7P56G`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/tiktok?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
`, wm, `${imgr + command}`, [
                ['Get Wm', `${usedPrefix}get ${x.result.watermark}`],
                ['Get NoWm', `${usedPrefix}get ${x.result.nowatermark}`],
                ['Get Audio', `${usedPrefix}get ${x.result.audio}`]
            ], m, fdoc)
}

if (command == 'mediafire3') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://www.mediafire.com/file/v035jsup2d2wp1n/textprome.js/file`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/download/mediafire?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Title:* ${x.result.nama}
*Mime:* ${x.result.mime}
*Size:* ${x.result.size}
*Link:* ${x.result.link}
`, wm, `${imgr + command}`, [
                ['Get', `${usedPrefix}get ${x.result.link}`]
            ], m, fdoc)
}

if (command == 'twitterimg') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://twitter.com/renaldypjs/status/1343516524934438912`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/downloader/twitterimg?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Link:* ${x.result}
`, wm, `${x.result}`, [
                ['Get', `${usedPrefix}get ${x.result}`]
            ], m, fdoc)
}

if (command == 'twittervid') {
if (!text) throw `Contoh:\n${usedPrefix + command} https://twitter.com/weareoneEXO/status/1344811074864914433`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/downloader/twittervid?url=${text}&apikey=BetaBotz`)
let x = await f.json()
await conn.sendButton(m.chat, `*Result:*
*Link:* ${x.result}
`, wm, `${imgr + command}`, [
                ['Get', `${usedPrefix}get ${x.result}`]
            ], m, fdoc)
}

if (command == 'asupan') {
if (!args[0]) {
	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "asupan", rowId: usedPrefix + 'asupan asupan'},
	{title: "bocil", rowId: usedPrefix + 'asupan bocil'},
	{title: "cecan", rowId: usedPrefix + 'asupan cecan'},
	{title: "euni", rowId: usedPrefix + 'asupan euni'},
	{title: "gheayubi", rowId: usedPrefix + 'asupan gheayubi'},
	{title: "hijaber", rowId: usedPrefix + 'asupan hijaber'},
	{title: "rikagusriani", rowId: usedPrefix + 'asupan rikagusriani'},
	{title: "santuy", rowId: usedPrefix + 'asupan santuy'},
	{title: "ukhty", rowId: usedPrefix + 'asupan ukhty'}
	]
    }
]

const listMessage = {
  text: `⚡ Silakan pilih tema di tombol di bawah...\n*Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ Tema Disini ☂️`,
  sections
}
conn.sendMessage(m.chat, listMessage, fdoc)
}

if (args[0] == 'asupan') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/asupan?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            }
if (args[0] == 'bocil') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/bocil?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            }
if (args[0] == 'cecan') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/cecan?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            }
if (args[0] == 'euni') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/euni?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            }
if (args[0] == 'gheayubi') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/gheayubi?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            }
if (args[0] == 'hijaber') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/hijaber?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            }
if (args[0] == 'rikagusriani') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/rikagusriani?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            }
if (args[0] == 'santuy') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/santuy?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            }
if (args[0] == 'ukhty') {
let res = `https://betabotz-api.herokuapp.com/api/asupan/ukhty?apikey=BetaBotz`
await conn.sendButton(m.chat, `*Result:* ${command}
`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            }
}

}
handler.command = handler.help = ['umma', 'dlanoboy', 'animesearch', 'animesearchv2', 'mangasearch', 'mangasearchv2', 'kusonime2', 'anoboy', 'storyanime', 'sfilesearch', 'stikwa', 'apk', 'gbwa', 'stiktele', 'ytmp4dl', 'ytmp3dl', 'playmp4', 'tiktok3', 'mediafire3', 'twittervid', 'twitterimg', 'asupan']
handler.tags = ['random']

export default handler