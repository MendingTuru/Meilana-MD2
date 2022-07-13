import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fs from 'fs'
import jimp from 'jimp'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command, isPrems, isOwner }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

let imgr = flaaa.getRandom()
let urut = text.split`|`
  let one = urut[1]
  let two = urut[2]
  let three = urut[3]
  
if (command == 'manhwa') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} latest

*List:*
• latest
• all
• popular
• search
• detail
`
if (args[0] == 'latest') {
let res = await fetch(`https://manhwaindo-api.herokuapp.com/latest`)
let v = await res.json()
let caption = `*Result:*
*title:* ${v.manhwas[0].title}
*chapter:* ${v.manhwas[0].chapter}
*endpoint:* ${v.manhwas[0].endpoint}
`
await conn.sendButton(m.chat, caption, wm, `${v.manhwas[0].thumbnail}`, [
                ['Picture', `${usedPrefix}get ${v.manhwas[0].thumbnail}`],
                ['Detail', `${usedPrefix}manhwa detail |${v.manhwas[0].endpoint}`]
            ], m, fdoc)
}
if (args[0] == 'all') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |9`)
let res = await fetch(`https://manhwaindo-api.herokuapp.com/all/${text}`)
let v = await res.json()
let caption = `*Result:*
*title:* ${v.manhwas[0].title}
*latest_chapter:* ${v.manhwas[0].latest_chapter}
*endpoint:* ${v.manhwas[0].endpoint}
`
await conn.sendButton(m.chat, caption, wm, `${v.manhwas[0].thumbnail}`, [
                ['Picture', `${usedPrefix}get ${v.manhwas[0].thumbnail}`],
                ['Detail', `${usedPrefix}manhwa detail |${v.manhwas[0].endpoint}`]
            ], m, fdoc)
}
if (args[0] == 'popular') {
let res = await fetch(`https://manhwaindo-api.herokuapp.com/popular`)
let v = await res.json()
let caption = `*Result:*
*title:* ${v.manhwas[0].title}
*endpoint:* ${v.manhwas[0].endpoint}
`
await conn.sendButton(m.chat, caption, wm, `${v.manhwas[0].thumbnail}`, [
                ['Picture', `${usedPrefix}get ${v.manhwas[0].thumbnail}`],
                ['Detail', `${usedPrefix}manhwa detail |${v.manhwas[0].endpoint}`]
            ], m, fdoc)
}
if (args[0] == 'search') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let res = await fetch(`https://manhwaindo-api.herokuapp.com/search/${one}`)
let v = await res.json()
let caption = `*Result:*
*title:* ${v.manhwas[0].title}
*latest_chapter:* ${v.manhwas[0].latest_chapter}
*endpoint:* ${v.manhwas[0].endpoint}
`
await conn.sendButton(m.chat, caption, wm, `${v.manhwas[0].thumbnail}`, [
                ['Picture', `${usedPrefix}get ${v.manhwas[0].thumbnail}`],
                ['Detail', `${usedPrefix}manhwa detail |${v.manhwas[0].endpoint}`]
            ], m, fdoc)
}
if (args[0] == 'detail') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let res = await fetch(`https://manhwaindo-api.herokuapp.com/detail/${one}`)
let v = await res.json()
let caption = `*Result:*
*title:* ${v.manhwa[0].title}
*genres:* ${v.manhwa[0].genres[0].name}
*synopsis:* ${v.manhwa[0].synopsis}
*chapters:* ${v.manhwa[0].chapters[0].name}
`
await conn.sendButton(m.chat, caption, wm, `${v.manhwa[0].thumbnail}`, [
                ['Picture', `${usedPrefix}get ${v.manhwa[0].thumbnail}`],
                ['Detail', `${usedPrefix}manhwa detail |${v.manhwa[0].endpoint}`]
            ], m, fdoc)
}
}

if (command == 'sentence') {
if (text) {
		let ras = await fetch(`https://ramnaufal.herokuapp.com/sentiment/simple?sentence=${text}`)
let r = await ras.json()
		let caption = `*Result:*
*score:* ${r.score} / 100.0
*sentiment:* ${r.sentiment}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Ok', `${usedPrefix}tts id oke`]
            ], m, fdoc)
	} else if (m.quoted && m.quoted.text) {
		let ras = await fetch(`https://ramnaufal.herokuapp.com/sentiment/simple?sentence=${m.quoted.text}`)
let r = await ras.json()
		let caption = `*Result:*
*score:* ${r.score} / 100.0
*sentiment:* ${r.sentiment}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Ok', `${usedPrefix}tts id oke`]
            ], m, fdoc)
	} else throw `Ex: ${usedPrefix + command} id hello world`
}

if (command == 'brainfuck') {
if (!text) return m.reply(`Example: ${usedPrefix + command} blablabla`)

let res = await fetch(`https://tools.helixs.id//API/brainfuck.php?encode&text=${text}`)
let v = await res.json()
m.reply(`*Result:*
${v.result}
`)
}
if (command == 'htmlesc') {
if (!text) return m.reply(`Example: ${usedPrefix + command} blablabla`)

let res = await fetch(`https://tools.helixs.id//API/html-escape.php?text=${text}`)
let v = await res.json()
m.reply(`*Result:*
${v.text}
`)
}

if (command == 'imglink') {
if (!text) return m.reply(`Example: ${usedPrefix + command} https://google.com`)

let res = await fetch(`https://tools.helixs.id//API/images.php?url=${text}`)
let v = await res.json()
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, `https://www.google.com${Array.from(v.result)}`, [
                ['Picture', `${usedPrefix}get https://www.google.com${Array.from(v.result)}`]
            ], m, fdoc)
}

if (command == 'shortenlink') {
if (!text) return m.reply(`Example: ${usedPrefix + command} https://google.com`)

let res = await fetch(`https://tools.helixs.id//API/shorten-link.php?url=${text}`)
let v = await res.json()
let caption = `*Result:*
${v.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Ok', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'anonyzoom') {
let res = await fetch(`https://anonyzoom.herokuapp.com/`)
let v = await res.json()
let caption = `*Result:*
Join_URL: ${v.Join_URL}
Password: ${v.Password}
Start_Time: ${v.Start_Time}
Host_Key: ${v.Host_Key}
Duration: ${v.Duration}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Ok', `${usedPrefix}menu`]
            ], m, fdoc)
}


if (command == 'akuari') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} latest

*List:*
• alquran
• likeedl
• storysad
• textpro
• textpro2
• ephoto
• ephoto2
• asupan
• rimage
• alpha
• konachan
`
if (args[0] == 'alquran') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |9`)
let res = await fetch(`https://api.akuari.my.id/islami/alquran?query=${one}`)
let x = await res.json()
let v = x.result.verses
  let teks = v.map(v => {
  `${v.text}
  ${v.translation_en}
  ${v.translation_id}
  `.trim()
  }).filter(v => v).join(`\n\n▣═━–〈 *Verses ${x.number}* 〉–━═▣\n\n`)
  //m.reply(teks)
let caption = `*Result:*
*name:* ${x.result.name}
*ar:* ${x.result.name_translations.ar}
*en:* ${x.result.name_translations.en}
*id:* ${x.result.name_translations.id}
*number_of_ayah:* ${x.result.number_of_ayah}
*number_of_surah:* ${x.result.number_of_surah}
*place:* ${x.result.place}
*type:* ${x.result.type}
*verses:* ${teks}
`
await conn.sendButton(m.chat, caption, wm, null, [
                [`${x.recitations[0].name}`, `${usedPrefix}get ${x.recitations[0].audio_url}`],
                [`${x.recitations[1].name}`, `${usedPrefix}get ${x.recitations[1].audio_url}`],
                [`${x.recitations[2].name}`, `${usedPrefix}get ${x.recitations[2].audio_url}`]
            ], m, fdoc)
}
if (args[0] == 'likeedl') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |https://likee.video/@vicky_marpaung/video/7006676628722311449`)
let res = await fetch(`https://api.akuari.my.id/downloader/likeedl?link=${text}`)
let v = await res.json()
let caption = `*Result:*
*title:* ${v.url}
*title:* ${v.title}
*duration:* ${v.duration}
*source:* ${v.source}
*medias:* ${v.medias[0].url}
*quality:* ${v.medias[0].quality}
*extension:* ${v.medias[0].extension}
*size:* ${v.medias[0].size}
*formattedSize:* ${v.medias[0].formattedSize}
`
await conn.sendButton(m.chat, caption, wm, `${v.thumbnail}`, [
                ['Get', `${usedPrefix}get ${v.medias[0].url}`]
            ], m, fdoc)
}

if (args[0] == 'storysad') {
let res = `https://api.akuari.my.id/downloader/storysad`
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, res, [
                ['Menu', `${usedPrefix}menu`],
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'textpro') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |teks|link`)

let res = await fetch(`https://api.akuari.my.id/textpro/scraper-1?text=${one}&link=${two}`)
let v = await res.json()
let caption = `*Result:*
*respon:* ${v.respon}
`
await conn.sendButton(m.chat, caption, wm, v.respon, [
                ['Picture', `${usedPrefix}get ${v.respon}`]
            ], m, fdoc)
}
if (args[0] == 'textpro2') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |teks|teks|link`)

let res = await fetch(`https://api.akuari.my.id/textpro/scraper-2?text=${one}&text2=${two}&link=${three}`)
let v = await res.json()
let caption = `*Result:*
*respon:* ${v.respon}
`
await conn.sendButton(m.chat, caption, wm, v.respon, [
                ['Picture', `${usedPrefix}get ${v.respon}`]
            ], m, fdoc)
}
if (args[0] == 'ephoto') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |teks|link`)

let res = await fetch(`https://api.akuari.my.id/ephoto/scraper-1?text=${one}&link=${two}`)
let v = await res.json()
let caption = `*Result:*
*respon:* ${v.respon}
`
await conn.sendButton(m.chat, caption, wm, v.respon, [
                ['Picture', `${usedPrefix}get ${v.respon}`]
            ], m, fdoc)
}
if (args[0] == 'ephoto2') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |teks|teks|link`)

let res = await fetch(`https://api.akuari.my.id/ephoto/scraper-2?text=${one}&text2=${two}&link=${three}`)
let v = await res.json()
let caption = `*Result:*
*respon:* ${v.respon}
`
await conn.sendButton(m.chat, caption, wm, v.respon, [
                ['Picture', `${usedPrefix}get ${v.respon}`]
            ], m, fdoc)
}
if (args[0] == 'asupan') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |bocil

*List:*
• bocil
• cecan
• ghea
• hijab
• rika
• santuy
• ukhty
`)

let res = await fetch(`https://api.akuari.my.id/asupan/${one}`)
let v = await res.json()
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, v.respon, [
                ['Get', `${usedPrefix}get ${v.respon}`]
            ], m, fdoc)
}
if (args[0] == 'rimage') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |darkmeme17

*List:*
• darkmeme17
• darkjokes1
• harley
`)
let res = `https://api.akuari.my.id/randomimage/${one}`
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, res, [
                ['Menu', `${usedPrefix}menu`],
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'alpha') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |genshin`)
let res = `https://api.akuari.my.id/search/alphacoders?query=${one}`
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, res, [
                ['Menu', `${usedPrefix}menu`],
                ['Next', `${usedPrefix + command} ${args[0]} |${one}`]
            ], m, fdoc)
}
if (args[0] == 'konachan') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |azur_lane`)
let res = `https://api.akuari.my.id/search/konachan?query=${one}`
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, res, [
                ['Menu', `${usedPrefix}menu`],
                ['Next', `${usedPrefix + command} ${args[0]} |${one}`]
            ], m, fdoc)
}
}

if (command == 'impact') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} amber`

let f = await fetch(`https://impact.moe/api/characters/${text}`)
let x = await f.json()
let caption = `*birthday:* ${x.birthday}
*chineseVA:* ${x.chineseVA}
*constellation:* ${x.constellation}
*description:* ${x.description}
*element:* ${x.element}
*englishVA:* ${x.englishVA}
*faction:* ${x.faction}
*icon:* ${x.icon}
*id:* ${x.id}
*image:* ${x.image}
*japaneseVA:* ${x.japaneseVA}
*koreanVA:* ${x.koreanVA}
*name:* ${x.name}
*quote:* ${x.quote}
*rarity:* ${x.rarity}
*region:* ${x.region}
*squareCard:* ${x.squareCard}
*tier:* ${x.tier}
*title:* ${x.title}
*weapon:* ${x.weapon}
`
await conn.sendButton(m.chat, caption, wm, x.image, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m, fdoc)
}

if (command == 'ytreels') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} https://youtube.com/shorts/68dfq9ine1k`

let f = await fetch(`https://api.lolhuman.xyz/api/ytreels?apikey=327a6596e4c4baa20c756132&url=${text}`)
let x = await f.json()
let caption = `*title:* ${x.result.title}
*size:* ${x.result.size}
`
await conn.sendButton(m.chat, caption, wm, x.resukt.thumbnail, [
                ['Get', `${usedPrefix}get ${x.result.link}`]
            ], m, fdoc)
}

}
handler.command = handler.help = ['manhwa', 'akuari', 'sentence', 'anonyzoom', 'brainfuck', 'htmlesc', 'imglink', 'shortenlink', 'impact', 'ytreels']
handler.tags = ['info']

export default handler
