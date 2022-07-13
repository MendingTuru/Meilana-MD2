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
  
  
if (command == 'amazon') {
if (!text) throw `Contoh:\n${usedPrefix + command} Teks`
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/amazon-search?q=${text}&apikey=MIMINGANZ`)
let xx = await res.json()
let v = xx.result
let caption = `*Result:*
*item:* ${x.item}
*review:* ${x.review}
*rating:* ${x.rating}
*price:* ${x.price}
*score:* ${x.score}
*diskon:* ${x.diskon}
*rating:* ${x.rating}
*url:* ${x.url}
*sponsor:* ${x.sponsor}
*best_seller:* ${x.best_seller}
*amazon_prime:* ${x.amazon_prime}
`
await conn.sendButton(m.chat, caption, wm, x.thumb, [
                ['Get Picture', `${usedPrefix}get ${x.thumb}`]
            ], m, fdoc)
}

if (command == 'animanga') {
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/animanga?apikey=MIMINGANZ`)
let xx = await res.json()
let v = xx.result
  let teks = v.map(v => {
  `
📌 *${v.title}*
Url: ${v.url}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, `${v.result.img}`, [
                ['Search!', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'leys') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} baka

*List:*
• antaranews
• artikata
• artimimpi
• artinama
• beritanews
• byte
• cekip
• ceritahoror
• cerpen
• cersex
• count
• cuaca
• cuttly
• darkjoke
• drakoron
• epep
• fakta
• gempa
• hoax
• hujan
• igphoto
• imgbb
• jbioskop
• jbola
• jotakudesu
• katabijak
• katabucin
• katailham
• kompas
• kuadrat
• kubik
• lirik
• loker
• loli
• mediafire
• memeindo
• moddroid
• nabi
• nik
• okezone
• otakunews
• otakuon
• pakboy
• persegi
• pin
• playmp3
• playmp4
• ppcouple
• quotemaker
• randomquran
• randomwaifu
• rexdldetail
• rexdlsearch
• sfile
• shopee
• shrturl
• sindoin
• sindonas
• sshp
• ttimg
• ytdl
• ytmp3
• ytmp4
• yts
`

if (args[0] == 'artikata') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'artimimpi') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/artimimpi?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'artinama') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/artinama?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'kuadrat') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/bdr/kuadrat?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'kubik') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/bdr/kubik?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'beritanews') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/berita-news?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
${x.title}
${x.url}
`.trim()
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${x.img}`]
            ], m, fdoc)
}
if (args[0] == 'antaranews') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/antara-news?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
${x.title}
${x.url}
`.trim()
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${x.img}`]
            ], m, fdoc)
}
if (args[0] == 'byte') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/byte-converter?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'cekip') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cekip?ip=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
${x.code_country}
${x.country}
${x.region_code}
${x.region_name}
${x.city}
${x.isp}
${x.zip_code}
${x.timezone}
${x.latitude}
${x.longitude}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'ceritahoror') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cerita-horor?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
${x.title}
${x.desc}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'cerpen') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cerpen?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
${x.title}
${x.pengarang}
${x.kategori}
${x.story}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'cersex') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, x.gambar, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'count') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/count-date?tgl=${args[1]}&bln=${args[2]}&thn=${args[3]}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'hujan') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cuaca/hujan?apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, x.result, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'cuaca') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cuaca?q=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
*Daerah:* ${x.Daerah}
*Latitude:* ${x.Latitude}
*Longitude:* ${x.Longitude}
*TimeZone:* ${x.TimeZone}
*Temperature:* ${x.Temperature}
*Tanggal:* ${x.Tanggal}
*Waktu:* ${x.Waktu}
*Hari:* ${x.Hari}
*Cuaca:* ${x.Cuaca}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'cuttly') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
${x.title}
${x.full_link}
${x.create_at}
${x.hasil}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'darkjoke') {
let img = `https://leyscoders-api.herokuapp.com/api/darkjoke?apikey=MIMINGANZ`
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'drakoron') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/drakor-ongoing?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
${x.title}
${x.genre}
${x.url}
`.trim()
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${x.img}`]
            ], m, fdoc)
}
if (args[0] == 'fakta') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/fakta?apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'imgbb') {
let q = m.quoted ? m.quoted : m
  let img = await q.download?.()
  let url = await uploadImage(img)
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/imgbb?url=${url}&title=${args[1]}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
Custom-Url: ${x.url}
Temp-Url: ${x.delete_url}
`
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${x.img}`]
            ], m, fdoc)
}
if (args[0] == 'loker') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/info-loker?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
📌 *${v.title}*
Url: ${v.url}
perusahaan: ${v.perusahaan}
locate: ${v.locate}
gaji: ${v.gaji}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, v.img, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'gempa') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/infogempa?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
Waktu: ${x.Waktu}
Lintang: ${x.Lintang}
Bujur: ${x.Bujur}
Magnitudo: ${x.Magnitudo}
Kedalaman: ${x.Kedalaman}
Wilayah: ${x.Wilayah}
`
await conn.sendButton(m.chat, caption, wm, x.Map, [
                ['Get Picture', `${usedPrefix}get ${x.Map}`]
            ], m, fdoc)
}
if (args[0] == 'hoax') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/infohoax?apikey=MIMINGANZ`)
let xx = await f.json()
let ra = xx.result
let x = ra.getRandom()
let caption = `*Result:*
url: ${x.url}
title: ${x.title}
desc: ${x.desc}
tanggal: ${x.tanggal}
`
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${x.img}`]
            ], m, fdoc)
}
if (args[0] == 'igphoto') {
let img = `https://leyscoders-api.herokuapp.com/api/instagram/photo?url=${args[1]}&apikey=MIMINGANZ`
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Get Picture', `${usedPrefix}get ${img}`]
            ], m, fdoc)
}
if (args[0] == 'jbioskop') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/jadwal-bioskop?apikey=MIMINGANZ`)
let xx = await f.json()
let ra = xx.result
let x = ra.getRandom()
let caption = `*Result:*
url: ${x.url}
title: ${x.title}
`
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${x.img}`]
            ], m, fdoc)
}
if (args[0] == 'jotakudesu') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/jadwal-otakudesu?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.animeList
let teks = v.map(v => {
return `
📌 *${v.anime_name}*
id: ${v.id}
link: ${v.link}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n' + xx.day)
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, v.img, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'jbola') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/jadwalbola?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
📌 *${v.waktu}*
kickoff: ${v.kickoff}
channel: ${v.channel}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'katabijak') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/kata-bijak?q=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let ra = xx.result
let x = ra.getRandom()
let caption = `*Result:*
author: ${x.author}
katabijak: ${x.katabijak}
voteCount: ${x.voteCount}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Get Picture', `${usedPrefix}get ${one}`]
            ], m, fdoc)
}
if (args[0] == 'katabucin') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/katabucin?apikey=MIMINGANZ`)
let xx = await f.json()
let ra = xx.result
let x = ra.getRandom()
let caption = `*Result:*
author: ${x.author}
katabijak: ${x.katabijak}
voteCount: ${x.voteCount}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Get Picture', `${usedPrefix}get ${one}`]
            ], m, fdoc)
}
if (args[0] == 'katailham') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
Hasil: ${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'kompas') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/kompas?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
📌 *${v.url}*
title: ${v.title}
waktu: ${v.waktu}
jenis: ${v.jenis}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, v.img, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'lirik') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/lirik?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
Hasil: ${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Get Picture', `${usedPrefix}get ${one}`]
            ], m, fdoc)
}
if (args[0] == 'loli') {
let img = `https://leyscoders-api.herokuapp.com/api/loli?apikey=MIMINGANZ`
let caption = `*Result:*
Hasil: ${args[0]}
`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'mediafire') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/mediafire?url=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
judul: ${x.judul}
size: ${x.size}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Get', `${usedPrefix}get ${x.download}`]
            ], m, fdoc)
}
if (args[0] == 'memeindo') {
let img = `https://leyscoders-api.herokuapp.com/api/memeindo?apikey=MIMINGANZ`
let caption = `*Result:*
Hasil: ${args[0]}
`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'moddroid') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/moddroid?q=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
📌 *${v.url}*
title: ${v.title}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, v.img, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'nabi') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/nabi?q=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let ra = xx.result
let x = ra.getRandom()
let caption = `*Result:*
nabi: ${x.nabi}
lahir: ${x.lahir}
umur: ${x.umur}
tempat: ${x.tempat}
kisah: ${x.kisah}
`
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get Picture', `${usedPrefix}get ${one}`]
            ], m, fdoc)
}
if (args[0] == 'nekonime') {
let img = `https://leyscoders-api.herokuapp.com/api/nekonime?apikey=MIMINGANZ`
let caption = `*Result:*
Hasil: ${args[0]}
`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'epep') {
let ff = await fetch(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=MIMINGANZ`)
let x = await ff.json()
let caption = `*Result:*
Hasil: ${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'nik') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |12345678`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/nik-checker?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
nik: ${x.result.nik}
pesan: ${x.result.pesan}
kelamin: ${x.result.kelamin}
tgl_lahir: ${x.result.tgl_lahir}
provinsi: ${x.result.provinsi}
kotakab: ${x.result.kotakab}
kecamatan: ${x.result.kecamatan}
uniqcode: ${x.result.uniqcode}

tambahan
pos: ${x.result.tambahan.kodepos}
pasaran: ${x.result.tambahan.pasaran}
usia: ${x.result.tambahan.usia}
ultah: ${x.result.tambahan.ultah}
zodiak: ${x.result.tambahan.zodiak}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
}
if (args[0] == 'okezone') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/okezone?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
📌 *${v.title}*
kickoff: ${v.url}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'otakuon') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/otakudesu-ongoing?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
📌 *${v.judul}*
eps: ${v.eps}
hri: ${v.hri}
tgl: ${v.tgl}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, v.thumb, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'otakunews') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/otakunews?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
📌 *${v.url}*
title: ${v.title}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, v.img, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'pakboy') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/pantun-pakboy?apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'persegi') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/persegi?sisi=${args[1]}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
rumus_keliling: ${x.rumus_keliling}
hasil_keliling: ${x.hasil_keliling}
rumus_luas: ${x.rumus_luas}
hasil_luas: ${x.hasil_luas}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'pin') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let img = `https://leyscoders-api.herokuapp.com/api/pinsearch?q=${one}&apikey=MIMINGANZ`
let caption = `*Result:*
`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}
if (args[0] == 'playmp3') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/playmp3?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
title: ${x.result.title}
duration: ${x.result.duration}
view: ${x.result.view}
published: ${x.result.published}
`
await conn.sendButton(m.chat, caption, wm, x.result.thumb, [
                ['Next', `${usedPrefix}get ${x.result.audio}`]
            ], m, fdoc)
}
if (args[0] == 'playmp4') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/playmp4?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
title: ${x.result.title}
duration: ${x.result.duration}
view: ${x.result.view}
published: ${x.result.published}
`
await conn.sendButton(m.chat, caption, wm, x.result.thumb, [
                ['Next', `${usedPrefix}get ${x.result.audio}`]
            ], m, fdoc)
}
if (args[0] == 'ppcouple') {
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=MIMINGANZ`)
let json = await res.json()
await conn.sendButton(m.chat, wm, wm, x.result.male, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
await conn.sendButton(m.chat, wm, wm, x.result.female, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'quotemaker') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let img = `https://leyscoders-api.herokuapp.com/api/quote-maker?text=${one}&apikey=MIMINGANZ`
await conn.sendButton(m.chat, wm, wm, img, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'randomwaifu') {
let img = `https://leyscoders-api.herokuapp.com/api/random-waifu?apikey=MIMINGANZ`
await conn.sendButton(m.chat, wm, wm, img, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'randomquran') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/randomquran?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
nama: ${x.nama}
arti: ${x.arti}
ayat: ${x.ayat}
type: ${x.type}
rukuk: ${x.rukuk}
nomor: ${x.nomor}
urut: ${x.urut}
ket: ${x.ket}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Get', `${usedPrefix}get ${x.audio}`]
            ], m, fdoc)
}
if (args[0] == 'rexdlsearch') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/rexdl-search?q=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
title: ${x.title}
url: ${x.url}
update_on: ${x.update_on}
desc: ${x.desc}
`
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get', `${usedPrefix}rexdldetail ${x.url}`]
            ], m, fdoc)
}
if (args[0] == 'rexdldetail') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/rexdl-detail?url=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
title: ${x.title}
poster: ${x.poster}
create: ${x.create}
version: ${x.version}
size: ${x.size}
desc: ${x.desc}
`
await conn.sendButton(m.chat, caption, wm, x.img, [
                ['Get', `${usedPrefix}get ${args[1]}`]
            ], m, fdoc)
}
if (args[0] == 'sfile') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/sfile?q=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
📌 *${v.title}*
size: ${v.size}
url: ${v.url}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command} ${args[0]} ${one}`]
            ], m, fdoc)
}
if (args[0] == 'shopee') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/shopee?q=${one}&apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let caption = `*Result:*
judul: ${x.judul}
harga: ${x.harga}
merk: ${x.merk}
stock: ${x.stock}
like: ${x.like}
terjual: ${x.terjual}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Get', `${usedPrefix}shopee ${args[1]}`]
            ], m, fdoc)
}
if (args[0] == 'shrturl') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
judul: ${x.result}
`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix}shrturl ${one}`]
            ], m, fdoc)
}
if (args[0] == 'sindoin') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/sindo/international?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
📌 *${v.judul}*
link: ${v.link}
waktu: ${v.waktu}
tipe: ${v.tipe}
kutipan: ${v.kutipan}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Menu!', `${usedPrefix}menu`]
            ], m, fdoc)
}
if (args[0] == 'sindonas') {
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/sindo/nasional?apikey=MIMINGANZ`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
📌 *${v.judul}*
link: ${v.link}
waktu: ${v.waktu}
tipe: ${v.tipe}
kutipan: ${v.kutipan}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Menu!', `${usedPrefix}menu`]
            ], m, fdoc)
}
if (args[0] == 'sshp') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let img = `https://leyscoders-api.herokuapp.com/api/ssweb-hp?url=${one}&apikey=MIMINGANZ`
await conn.sendButton(m.chat, wm, wm, img, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
}
if (args[0] == 'ttimg') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let img = `https://leyscoders-api.herokuapp.com/api/textto-image?text=${one}`
await conn.sendButton(m.chat, wm, wm, img, [
                ['Sticker', `${usedPrefix}sticker`]
            ], m, fdoc)
}
if (args[0] == 'yts') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/yt-search?q=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
id: ${x.result[0].id}
type: ${x.result[0].type}
author: ${x.result[0].author}
title: ${x.result[0].title}
ago: ${x.result[0].ago}
views: ${x.result[0].views}
desc: ${x.result[0].desc}
duration: ${x.result[0].duration}
timestamp: ${x.result[0].timestamp}
`
await conn.sendButton(m.chat, caption, wm, `${x.result[0].thumb}`, [
                ['Get', `${usedPrefix}ytmp4 ${x.result[0].url}`]
            ], m, fdoc)
}
if (args[0] == 'ytdl') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/ytdl?url=${one}&apikey=MIMINGANZ`)
let x = await f.json()
let caption = `*Result:*
title: ${x.result[0].title}
duration: ${x.result[0].duration}
view: ${x.result[0].view}
published: ${x.result[0].published}
keyword: ${Array.from(x.result[0].keyword)}
like: ${x.result[0].like}
dislike: ${x.result[0].dislike}
source: ${x.result[0].source}
`
await conn.sendButton(m.chat, caption, wm, `${x.result[0].thumb}`, [
                ['Aud', `${usedPrefix}get ${x.result[0].url_audio}`],
                ['Vid', `${usedPrefix}get ${x.result[0].url_video}`]
            ], m, fdoc)
}
if (args[0] == 'ytmp3') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/ytmp3?url=${one}`)
let x = await f.json()
let caption = `*Result:*
title: ${x.result[0].title}
desc: ${x.result[0].desc}
view: ${x.result[0].view}
published: ${x.result[0].published}
keyword: ${Array.from(x.result[0].keyword)}
like: ${x.result[0].like}
dislike: ${x.result[0].dislike}
duration: ${x.result[0].duration}
source: ${x.result[0].source}
`
await conn.sendButton(m.chat, caption, wm, `${x.result[0].thumb}`, [
                ['Get', `${usedPrefix}ytmp4 ${x.result[0].url}`]
            ], m, fdoc)
}
if (args[0] == 'ytmp4') {
if (!one) return m.reply(`Example: ${usedPrefix + command} ${args[0]} |query`)

let f = await fetch(`https://leyscoders-api.herokuapp.com/api/ytmp4?url=${one}`)
let x = await f.json()
let caption = `*Result:*
title: ${x.result[0].title}
desc: ${x.result[0].desc}
view: ${x.result[0].view}
published: ${x.result[0].published}
keyword: ${Array.from(x.result[0].keyword)}
like: ${x.result[0].like}
dislike: ${x.result[0].dislike}
duration: ${x.result[0].duration}
source: ${x.result[0].source}
`
await conn.sendButton(m.chat, caption, wm, `${x.result[0].thumb}`, [
                ['Get', `${usedPrefix}ytmp4 ${x.result[0].url_video}`]
            ], m, fdoc)
}

}

if (command == 'getaud') {
  let q = '128kbps'
  let v = args[0]
// Kocak
const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
const dl_url = await yt.audio[q].download()
  const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
  
 await m.reply(`▢ Tɪᴛᴛʟᴇ: ${ttl}
▢  Sɪᴢᴇ: ${size}

▢ Ｌｏａｄｉｎｇ. . .`)
  await conn.sendFile(m.chat, dl_url, ttl + '.mp3', wm, m, null, {
    asDocument: false
  })
  }
  
  if (command == 'getvid') {
  let qu = args[1] || '360'
  let q = qu + 'p'
  let v = args[0]

  let _thumb = {}
    try { _thumb = { jpegThumbnail: thumb2 } }
    catch (e) { }

// Kocak
const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
const dl_url = await yt.video[q].download()
  const ttl = await yt.title
const size = await yt.video[q].fileSizeH
  
 await m.reply(`▢ Tɪᴛᴛʟᴇ: ${ttl}
▢  Sɪᴢᴇ: ${size}

▢ Ｌｏａｄｉｎｇ. . .`)
  await conn.sendMessage(m.chat, { [/^(?:-|--)doc$/i.test(args[1]) || null ? 'document' : 'video']: { url: dl_url }, fileName: `${wm}.mp4`, mimetype: 'video/mp4', ..._thumb }, { quoted: m })
}

}
handler.command = handler.help = ['amazon', 'animanga', 'leys', 'getvid', 'getaud']
handler.tags = ['random']

export default handler
