import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fs from "fs"

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'exchange') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} IDR USD 50000`

let f = await fetch(`https://v6.exchangerate-api.com/v6/0dd0737285141eb9fa078319/pair/${args[0]}/${args[1]}/${args[2]}`)
let x = await f.json()
let caption = `*Last Up:* ${x.time_last_update_utc}
*Next Up:* ${x.time_next_update_utc}
*Dari:* ${x.base_code}
*Ke:* ${x.target_code}

*Rate:* ${x.conversion_rate}
*Result:* ${x.conversion_result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, fdoc)
}

if (command == 'ipcountry') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} 8.8.8.8`

let f = await fetch(`https://api.country.is/${args[0]}`)
let x = await f.json()
let caption = `*Title:* ${x.country}
*Ip:* ${x.ip}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, fdoc)
}

if (command == 'mediafiredl') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://www.mediafire.com/file/pwxob70rpgma9lz/GBWhatsApp_v8.75%2528Tutorial_Yud%2529.apk/file`

let f = await fetch(`https://kannxapi.herokuapp.com/api/mediafire?url=${args[0]}`)
let c = await f.json()
let x = c.result
let caption = `*Title:* ${x.title}
*Url:* ${x.url}
*Size:* ${x.size}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Get', `${usedPrefix}get ${x.link}`]
            ], m, fdoc)
}

if (command == 'emojimix3') {
if (!args[0]) throw `Ex: ${usedPrefix+command} ${decodeURI('%F0%9F%92%80')}`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(args[0])}`)
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
}

if (command == 'emojimix4') {
if (!args[0]) throw `Ex: ${usedPrefix+command} emot + emot`
let anu = await fetchJson(`https://levanter.up.railway.app/emix?q=${encodeURIComponent(args[0])}`)
let stiker = await sticker(false, anu.result, global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}

if (command == 'calc2') {
let f = await fetch(`https://levanter.up.railway.app/calc?q=${args[0]}${args[1]}${args[2]}`)
let x = await f.json()
let caption = `*Hasil:* ${x.result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'gqr') {
let img = `https://levanter.up.railway.app/gqr?text==${text}`
let caption = `*Hasil:*`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'jamdunia') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} id`
let res = await fetch(`https://levanter.up.railway.app/time?code=${text}`)
let xx = await res.json()
let v = xx.result
  let teks = v.map(v => {
  `
*Result:*\n
*time:* ${v.time}
*name:* ${v.name}
*timeZone:* ${v.timeZone}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Menu!', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'mvsearch') {
let f = await fetch(`https://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
let x = await f.json()
let caption = `*Title:* ${x.Title}
*Year:* ${x.Year}
*Rated:* ${x.Rated}
*Released:* ${x.Released}
*Runtime:* ${x.Runtime}
*Genre:* ${x.Genre}
*Director:* ${x.Director}
*Writer:* ${x.Writer}
*Actors:* ${x.Actors}
*Plot:* ${x.Plot}
*Language:* ${x.Language}
*Country:* ${x.Country}
*Awards:* ${x.Awards}
`
await conn.sendButton(m.chat, caption, wm, x.Poster, [
                ['Next', `${usedPrefix}mvsearch2 ${x.Title}`]
            ], m, fdoc)
}

if (command == 'mvsearch2') {
let f = await fetch(`https://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
let x = await f.json()
let caption = `*Title:* ${x.results[0].original_title}
*overview:* ${x.results[0].overview}
*popularity:* ${x.results[0].popularity}
*vote:* ${x.results[0].vote_average}
*rilis:* ${x.results[0].release_date}
`
await conn.sendButton(m.chat, caption, wm, 'https://image.tmdb.org/t/p/w500/' + x.poster_path, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'lmaker') {
if (!args[0]) return m.reply(`Logo Maker List
Usage: .lmaker master|3|Haloo
1 - 11 : calligraphy
1 - 2 : beast
1 - 6 : pubg
1 - 6 : rrr
1 - 2 : free fire
1 - 2 : india
1 - 3 : avengers
1 - 2 : pushpa
1 - 3 : master
1 - 7 : ipl
1      : dhoni
1      : vijay
1 - 6 : kgf`)
  
  let urut = text.split`|`
  let thm = urut[0]
  let text1 = urut[1]
  let text2 = urut[2]
  
        let images = `https://raganork-network.vercel.app/api/logo/${thm}?style=${text1}&text=${text2}`
  let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}
          
if (command == 'truth2') {
let f = await fetch(`https://botstyle-api.herokuapp.com/api/truth?apikey=OrM2HzZl`)
let x = await f.json()
let caption = `🤠 ${x.result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'dare2') {
let f = await fetch(`https://botstyle-api.herokuapp.com/api/dare?apikey=OrM2HzZl`)
let x = await f.json()
let caption = `🤠 ${x.result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'quotes') {
let f = await fetch(`https://botstyle-api.herokuapp.com/api/quotes?apikey=OrM2HzZl`)
let x = await f.json()
let caption = `${x.quotes}

🤠 ${x.author}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fakta') {
let f = await fetch(`https://botstyle-api.herokuapp.com/api/fakta?apikey=OrM2HzZl`)
let x = await f.json()
let caption = `*Fakta:* ${x.result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'bijak') {
let f = await fetch(`https://botstyle-api.herokuapp.com/api/bijak?apikey=OrM2HzZl`)
let x = await f.json()
let caption = `${x.result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'ptl') {
let f = await fetch(`https://botstyle-api.herokuapp.com/api/ptl?apikey=OrM2HzZl`)
let x = await f.json()
let caption = `Nih ${command}`
await conn.sendMessage(m.chat, { video: { url: x.result }, mimetype: 'video/mp4', fileName: 'ptl.mp4' })
}

if (command == 'wallhaven') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} naru`
let f = await fetch(`https://wallhaven.cc/api/v1/search?q=${text}`)
let x = await f.json()
let caption = `ID: ${x.data[0].id}
Views: ${x.data[0].views}
Category: ${x.data[0].category}
Upload: ${x.data[0].created_at}`
await conn.sendButton(m.chat, caption, wm, x.data[0].path, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'motivasi') {
let f = await fetch(`https://botstyle-api.herokuapp.com/api/motivasi?apikey=OrM2HzZl`)
let x = await f.json()
let caption = `${x.result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'iplookup') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} 8.8.8.8`

let f = await fetch(`https://hadi-api.herokuapp.com/api/iplookup?ip=${text}`)
let c = await f.json()
let x = c.result
let caption = `country: ${x.country}
countryCode: ${x.countryCode}
region: ${x.region}
regionName: ${x.regionName}
city: ${x.city}
zip: ${x.zip}
lat: ${x.lat}
lon: ${x.lon}
timezone: ${x.timezone}
isp: ${x.isp}
org: ${x.org}
as: ${x.as}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'ssweb2') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://s.id desktop on
*Teks 1:*
desktop
tablet
phone

*Teks 2:*
on
off
`
let caption = `Result: ${args[0]}`
let img = `https://hadi-api.herokuapp.com/api/ssweb?url=${args[0]}&device=${args[1]}&full=${args[2]}`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'tinyurl') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`
let f = await fetch(`https://hadi-api.herokuapp.com/api/tinyurl?url=${args[0]}`)
let x = await f.json()
let caption = `${x.result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'bitly') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://google.com`
let f = await fetch(`https://hadi-api.herokuapp.com/api/bitly?url=${args[0]}`)
let x = await f.json()
let caption = `${x.result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'imgs') {
let er = `contoh:\n\n${usedPrefix + command} ecchi

Opsi Tersedia:
• ecchi
• lewdanimegirls
• hentai
• hentaifemdom
• hentaiparadise
• hentai4everyone
• animearmpits
• animefeets
• animethighss
• animebooty
• biganimetiddies
• animebellybutton
• sideoppai
• ahegao
• hentaianal
• anal
• pussy
• animepussy
• yaoi
• yuri
• hentaiblowjob
• blowjob
• futanari
• kitsunehentai
• midriffhentai
• erohentai
• cumhentai
• paizuri
• wholesomeanimemes
• dankmemes
• terriblefacebookmemes
• memes
• AdviceAnimals
• MemeEconomy
• nukedmemes
• okbuddyretard
• historymemes
• teenagers
`
    if (!args[0]) throw er
    switch (args[0].toLowerCase()) {
        case 'ecchi':
        case 'lewdanimegirls':
        case 'hentai':
        case 'hentaifemdom':
        case 'hentaiparadise':
        case 'hentai4everyone':
        case 'animearmpits':
        case 'animefeets':
        case 'animethighss':
        case 'animebooty':
        case 'biganimetiddies':
        case 'animebellybutton':
        case 'sideoppai':
        case 'ahegao':
        case 'hentaianal':
        case 'anal':
        case 'pussy':
        case 'animepussy':
        case 'yaoi':
        case 'yuri':
        case 'hentaiblowjob':
        case 'blowjob':
        case 'futanari':
        case 'kitsunehentai':
        case 'midriffhentai':
        case 'erohentai':
        case 'cumhentai':
        case 'paizuri':
        case 'wholesomeanimemes':
        case 'dankmemes':
        case 'terriblefacebookmemes':
        case 'memes':
        case 'AdviceAnimals':
        case 'MemeEconomy':
        case 'nukedmemes':
        case 'okbuddyretard':
        case 'historymemes':
        case 'teenagers':
                let pe = await fetch(`https://meme-api.herokuapp.com/gimme/${args[0]}`)
let x = await pe.json()
  await conn.sendButton(m.chat, `*Nih*`, wm, x.url, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
            break
        default:
            throw er
    }
}

}
handler.command = handler.help = ['exchange', 'ipcountry', 'mediafiredl', 'emojimix3', 'emojimix4', 'calc2', 'mvsearch', 'mvsearch2', 'lmaker', 'truth2', 'dare2', 'quotes', 'fakta', 'bijak', 'ptl', 'motivasi', 'iplookup', 'ssweb2', 'imgs', 'wallhaven', 'tinyurl', 'bitly', 'jamdunia', 'gqr']
handler.tags = ['tools']

export default handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})
