import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (command == 'cdnjs') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix}${command} angular`

let f = await fetch(`https://api.cdnjs.com/libraries/${text}`)
let x = await f.json()
let caption = `🤠 *Name:* ${x.name}
*Latest:* ${x.latest}

*Description:* ${x.description}
*Homepage:* ${x.homepage}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix}${command} ${text}`]
            ], m)
}

if (command == 'readqr') {
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana? Reply gambar yg gk ada button aja'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
    let img = await q.download?.()
    let url = await uploadImage(img)

let f = await fetch(`https://api.lolhuman.xyz/api/read-qr?apikey=9b817532fadff8fc7cb86862&img=${url}`)
let x = await f.json()
let caption = `🤠 *Hasil:* ${x.result}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['To Qr', `${usedPrefix}qr ${x.result}`]
            ], m)
}

if (command == 'animechan') {
let f = await fetch(`https://animechan.vercel.app/api/random`)
let x = await f.json()
let caption = `*Quotes:* ${x.quote}

*Anime:* ${x.anime}
*Character:* ${x.character}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'whatanime') {
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
    let img = await q.download?.()
    let url = await uploadImage(img)

let f = await fetch(`https://api.trace.moe/search?url=${url}`)
let xc = await f.json()
let r = xc.result
let x = r.getRandom()
let caption = `🤠 *Anilist:* ${x.anilist}
*Name:* ${x.filename}
*Episode:* ${x.episode}
*Dari:* ${x.from}
*Ke:* ${x.to}
*Kecocokan:* ${x.similarity}
`
await conn.sendButton(m.chat, caption, wm, x.image, [
                ['Get Video', `${usedPrefix}get ${x.video}`]
            ], m)
}

if (command == 'isgd') {
if (!text) throw `Teks Mana?
Contoh: ${usedPrefix + command} https://google.com`
let f = await fetch(`https://is.gd/create.php?format=json&url=${text}`)
let x = await f.json()
let caption = `*Shorturl:* ${x.shorturl}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'resmush') {
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
    let img = await q.download?.()
    let url = await uploadImage(img)

let f = await fetch(`http://api.resmush.it/ws.php/?img=${url}`)
let x = await f.json()
let caption = `*Src:* ${x.src}
*Size:* ${x.src_size}

*Dest:* ${x.dest}
*Size:* ${x.dest_size}

*Percent:* ${x.percent}
*Expires:* ${x.expires}`
await conn.sendButton(m.chat, caption, wm, x.dest, [
                ['Get Img', `${usedPrefix}get ${x.dest}`]
            ], m)
}

if (command == 'toascii') {
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Fotonya Mana?'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`
    let img = await q.download?.()
    let url = await uploadImage(img)

let f = await fetch(`https://process.filestackapi.com/A7lMmfpoSTu3i5i7yBXeQz/ascii=colored:true/${url}`)
let xc = await f.text()
let caption = `*Jadikan File HTML*

${xc}`
m.reply(caption)
}

if (command == 'calc') {
let id = m.chat
  conn.math = conn.math ? conn.math : {}
  if (id in conn.math) {
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    m.reply('Hmmm...ngecheat?')
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`*${format}* = ${result}`)
  } catch (e) {
    if (e == undefined) throw 'Isinya?'
    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  }

if (command == 'dlytmp3') {
  if (!text) throw 'Url Mana?'
let f = await fetch(`https://api.webraku.xyz/api/ytmp3?url=${text}&apikey=Nathan`)
let xc = await f.json()
let r = xc.result
let caption = `*Title:* ${r.title}
*Size:* ${r.size}
*View:* ${r.views}
*Like:* ${r.likes}
*Dislike:* ${r.dislike}
*Channel:* ${r.channel}
*Upload:* ${r.uploadDate}
*Desc:* ${r.desc}`
await conn.sendButton(m.chat, caption, wm, r.thumb, [
                ['Get', `${usedPrefix}get ${r.result}`]
            ], m)
}

if (command == 'dlytmp4') {
  if (!text) throw 'Url Mana?'
let f = await fetch(`https://api.webraku.xyz/api/ytmp4?url=${text}&apikey=Nathan`)
let xc = await f.json()
let r = xc.result
let caption = `*Title:* ${r.title}
*Size:* ${r.size}
*Quality:* ${r.quality}
*View:* ${r.views}
*Like:* ${r.likes}
*Dislike:* ${r.dislike}
*Channel:* ${r.channel}
*Upload:* ${r.uploadDate}
*Desc:* ${r.desc}`
await conn.sendButton(m.chat, caption, wm, r.thumb, [
                ['Get', `${usedPrefix}get ${r.result}`]
            ], m)
}

if (command == 'lirikjoox') {
  if (!text) throw 'Text Mana?'
let f = await fetch(`https://yog-apikey.herokuapp.com/api/music/joox?apikey=YogGanz&query=${text}`)
let r = await f.json()

let caption = `*Title:* ${r.result.lagu}
*Size:* ${r.result.album}
*Quality:* ${r.result.penyanyi}
*View:* ${r.result.publish}
*Like:* ${r.lirik.result}`
await conn.sendButton(m.chat, caption, wm, r.img, [
                ['Get', `${usedPrefix}get ${r.lirik.result}`]
            ], m)
}

if (command == 'chordlagu') {
  if (!text) throw 'Text Mana?'
let f = await fetch(`https://yog-apikey.herokuapp.com/api/music/chordlagu?lagu=${text}&apikey=YogGanz`)
let xc = await f.json()
let r = xc.result
let caption = `*Result:* ${r.result}`
await conn.sendButton(m.chat, caption, wm, r.img, [
                ['Menu', `${usedPrefix}menu`]
            ], m)
}

if (command == 'hadits') {
  if (!text) throw `Text Mana? ${command} bukhari|59`
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]

let f = await fetch(`https://yog-apikey.herokuapp.com/api/muslim/hadits?kitab=${text1}&nomor=${text2}&apikey=YogGanz`)
let xc = await f.json()
let r = xc.data
let caption = `*Name:* ${r.name}
*ID:* ${r.id}
*Tersedia:* ${r.available}
*No:* ${r.contents.number}
*Arab:* ${r.contents.arab}
*Indo:* ${r.contents.id}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m)
}


}
handler.command = handler.help = ['cdnjs', 'readqr', 'animechan', 'whatanime', 'isgd', 'resmush', 'toascii', 'calc', 'dlytmp3', 'dlytmp4', 'lirikjoox', 'chordlagu', 'hadits']
handler.tags = ['tools']

export default handler

	
    
