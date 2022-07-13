import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fs from "fs"
import { googleImage } from '@bochilteam/scraper'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) return m.reply(`Example : ${usedPrefix + command} query`)
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (command == 'gimage') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Lolhuman`
let url = `https://api.lolhuman.xyz/api/gimage?apikey=9b817532fadff8fc7cb86862&query=${text}`
await conn.sendHydrated(m.chat, caption, wm, url, null, null, null, null, [
      ['Gimage1', usedPrefix + 'gimage1 ' + text],
      ['Gimage2', usedPrefix + 'gimage2 ' + text],
      ['Gimage3', usedPrefix + 'gimage3 ' + text]
    ], m, fdoc)
    }

if (command == 'gimage1') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Lolhuman`
let url = `https://api.lolhuman.xyz/api/gimage2?apikey=9b817532fadff8fc7cb86862&query=${text}`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.getRandom(), null, null, null, null, [
      ['Gimage2', usedPrefix + 'gimage2 ' + text],
      ['Gimage3', usedPrefix + 'gimage3 ' + text],
      ['Gimage4', usedPrefix + 'gimage4 ' + text]
    ], m, fdoc)
    }
    
if (command == 'gimage2') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Kann`
let url = `https://bx-hunter.herokuapp.com/api/googleimage?query=${text}&apikey=dno8pZJW`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.getRandom(), null, null, null, null, [
      ['Gimage3', usedPrefix + 'gimage1 ' + text],
      ['Gimage4', usedPrefix + 'gimage4 ' + text],
      ['Gimage5', usedPrefix + 'gimage5 ' + text]
    ], m, fdoc)
    }

if (command == 'gimage3') {
let url = `https://api-xcoders.xyz/api/search/image?query=${text}&apikey=xcoders`
let js = await fetch(url)
let jsons = await js.json()
let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.result) {
        caption += `*Hasil pencarian* ${text}\n${x.title}\n${x.size}\n${x.url}
`}
        await conn.reply(m.chat, caption, m, frep)
    }

if (command == 'gimage4') {
let caption = `*Hasil pencarian* ${text}\n${x.origin.title}\n${x.origin.source}\n*Note:* Beni`
let url = `https://api-xcoders.xyz/api/search/image2?query=${text}&apikey=xcoders`
let js = await fetch(url)
let jp = await js.json()
await conn.sendHydrated(m.chat, caption, wm, jp.result[0].url, null, null, null, null, [
      ['Gimage5', usedPrefix + 'gimage1 ' + text],
      ['Gimage6', usedPrefix + 'gimage6 ' + text],
      ['Gimage', usedPrefix + 'gimage ' + text]
    ], m, fdoc)
    }

if (command == 'gimage5') {
let caption = `*Hasil pencarian* ${text}\n\n*Note:* Melcanz Limit`
let url = `https://nzcha-apii.herokuapp.com/googleimage?q=${text}`
let js = await fetch(url)
let jp = await js.json()
let x = jp.result
await conn.sendHydrated(m.chat, caption, wm, x.getRandom(), null, null, null, null, [
      ['Gimage6', usedPrefix + 'gimage6 ' + text],
      ['Gimage', usedPrefix + 'gimage ' + text],
      ['Gimage1', usedPrefix + 'gimage1 ' + text]
    ], m, fdoc)
    }

if (command == 'gimage6') {
    const res = await googleImage(text)
    conn.sendFile(m.chat, res.getRandom(), 'gimage.jpg', `
*── 「 GOOGLE IMAGE 」 ──*

Result from *${text}*
`.trim(), m)
}

}
handler.command = handler.help = ['gimage', 'gimage1', 'gimage2', 'gimage3', 'gimage4', 'gimage5', 'gimage6']
handler.tags = ['random']

export default handler
