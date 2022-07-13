import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (command == 'trengif') {
        let url = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=SdX60eTdyvdo0aAyJMQ5u87Qh7mTz7bG`)
        let res = await url.json()
        let img = res.data[0].images.original.url
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
  await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

if (command == 'searchgif') {
if (!text) throw `Masukkan teks`
let url = await fetch(`https://api.giphy.com/v1/gifs/search?q=${text}&api_key=SdX60eTdyvdo0aAyJMQ5u87Qh7mTz7bG`)
        let res = await url.json()
        let img = res.data[0].images.original.url
        let caption = `*⎔┉━「 ${command} 」━┉⎔*`
  await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}

}
handler.command = handler.help = ['trengif', 'searchgif']
handler.tags = ['tools']
export default handler