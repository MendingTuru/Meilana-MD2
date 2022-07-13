import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import fs from "fs"
import jimp from 'jimp'

let toM = a => '@' + a.split('@')[0]
let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (command == 'twittdl') {
if (!args[0]) throw `Contoh penggunaan ${usedPrefix + command} https://twitter.com/PassengersMovie/status/821025484150423557`
let f = await fetch(`https://api-xfar05.herokuapp.com/api/twitter?url=${args[0]}`)
let x = await f.json()
let caption = `*TWITTER:* ${x.result.desc}`
await conn.sendButton(m.chat, caption, wm, x.result.thumb, [
                ['Get SD', `${usedPrefix}get ${x.result.SD}`],
                ['Get HD', `${usedPrefix}get ${x.result.HD}`],
                ['Mp3', `${usedPrefix}get ${x.result.audio}`]
            ], m, fdoc)
}

if (command == 'otaku') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} Naruto`
let f = await fetch(`https://yuzzu-api.herokuapp.com/api/otaku?judul=${text}`)
let p = await f.json()
let x = p.result.result
let caption = `*judul:* ${x.judul}
*japan:* ${x.japan}
*rating:* ${x.rating}
*produser:* ${x.produser}
*type:* ${x.type}
*status:* ${x.status}
*episode:* ${x.episode}
*durasi:* ${x.durasi}
*rilis:* ${x.rilis}
*studio:* ${x.studio}
*genre:* ${x.genre}
*link:* ${x.link}
*sinopsis:* ${x.sinopsis}`
await conn.sendButton(m.chat, caption, wm, x.thumb, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'darkjokes') {
let f = await fetch(`https://yuzzu-api.herokuapp.com/api/darkjokes`)
let c = await f.json()
let x = c.result
let caption = `Nihh banh ${command} nya`
await conn.sendHydrated(m.chat, caption, wm, x.result, null, null, null, null, [
      ['Meme', usedPrefix + 'randommeme'],
      ['Meme ID', usedPrefix + 'memeindo'],
      ['Darkjoke', usedPrefix + 'darkjoke']
    ], m, fdoc)
}

if (command == 'artikbbi') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} Aku`
let f = await fetch(`https://yuzzu-api.herokuapp.com/api/kbbi?kata=${text}`)
let x = await f.json()
let caption = `Lema: ${x.result.lema}
Arti: ${Array.from(x.result.arti)}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'cewekracing') {
let pe = await fetch(`https://mysakura.herokuapp.com/api/cewek/racing?apikey=sakura404`)
let x = await pe.json()
  await conn.sendButton(m.chat, `*Nih*`, wm, x.url, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'mainslot') {
let f = await fetch(`https://mysakura.herokuapp.com/api/slot?apikey=sakura404`)
let x = await f.json()
let rep = x.score
let skor = rep.repeat(3)
global.db.data.users[m.sender].limit += skor
let caption = `${x.slot}

*Hasil:* ${x.hasil}
*+ Limit:* ${skor}`
await conn.sendButton(m.chat, caption, wm, null, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'imdb') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} iron man`
let f = await fetch(`https://api.popcat.xyz/imdb?q=${text}`)
let x = await f.json()

let caption = `*Title:* ${x.title}
*year:* ${x.year}
*rated:* ${x.rated}
*released:* ${x.released}
*runtime:* ${x.runtime}
*genres:* ${x.genres}
*director:* ${x.director}
*writer:* ${x.writer}
*actors:* ${x.actors}
*plot:* ${x.plot}
*languages:* ${x.languages}
*country:* ${x.country}
*awards:* ${x.awards}
*metascore:* ${x.metascore}
*rating:* ${x.rating}
*votes:* ${x.votes}
*imdbid:* ${x.imdbid}
*type:* ${x.type}
*dvd:* ${x.dvd}
*boxoffice:* ${x.boxoffice}
*name:* ${x.name}
*imdburl:* ${x.imdburl}`
await conn.sendButton(m.chat, caption, wm, x.poster, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'popss') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} iron man`
let img = `https://api.popcat.xyz/screenshot?url=${text}`
let caption = `*Result:* ${text}`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'popcolor') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} ffcc99`
let f = await fetch(`https://api.popcat.xyz/color/${text}`)
let x = await f.json()

let caption = `*hex:* ${x.hex}
*name:* ${x.name}
*rgb:* ${x.rgb}
*brightened:* ${x.brightened}

`
await conn.sendButton(m.chat, caption, wm, x.color_image, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'popcolor2') {
let f = await fetch(`https://api.popcat.xyz/randomcolor`)
let x = await f.json()
let caption = `*hex:* ${x.hex}
*name:* ${x.name}`
await conn.sendButton(m.chat, caption, wm, x.image, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'popsong') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} ffcc99`
let f = await fetch(`https://api.popcat.xyz/lyrics?song=${text}`)
let x = await f.json()

let caption = `*title:* ${x.title}
*artist:* ${x.artist}

*lyrics:* ${x.lyrics}`
await conn.sendButton(m.chat, caption, wm, x.image, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'popsteam') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} minecraft`
let f = await fetch(`https://api.popcat.xyz/steam?q=${text}`)
let x = await f.json()

let caption = `*type:* ${x.type}
*name:* ${x.name}
*description:* ${x.description}
*website:* ${x.website}
*developers:* ${Array.from(x.developers)}
*publishers:* ${Array.from(x.publishers)}
*price:* ${x.price}
*controller_support:* ${x.controller_support}`
await conn.sendButton(m.chat, caption, wm, x.thumbnail, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'sadcat') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} Your`
let img = `https://api.popcat.xyz/sadcat?text=${text}`
let caption = `*Result:* ${text}`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'oogway') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} Your`
let img = `https://api.popcat.xyz/oogway?text=${text}`
let caption = `*Result:* ${text}`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'popcar') {
let f = await fetch(`https://api.popcat.xyz/car`)
let x = await f.json()

let caption = `*title:* ${x.title}`
await conn.sendButton(m.chat, caption, wm, x.image, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'popgit') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} minecraft`
let f = await fetch(`https://api.popcat.xyz/github/${text}`)
let x = await f.json()

let caption = `*url:* ${x.url}
*account_type:* ${x.account_type}
*name:* ${x.name}
*company:* ${x.company}
*blog:* ${x.blog}
*location:* ${x.location}
*email:* ${x.email}
*bio:* ${x.bio}
*twitter:* ${x.twitter}
*public_repos:* ${x.public_repos}
*public_gists:* ${x.public_gists}
*followers:* ${x.followers}
*following:* ${x.following}
*created_at:* ${x.created_at}
*updated_at:* ${x.updated_at}`
await conn.sendButton(m.chat, caption, wm, x.avatar, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'popship') {

let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    let ia = `${toM(a)}`
    let ib = `${toM(b)}`
    
    let sia = await conn.profilePictureUrl(ia).catch(_ => './src/avatar_contact.png')
    let sib = await conn.profilePictureUrl(ib).catch(_ => './src/avatar_contact.png')

    let urla = await uploadImage(sia)
    let urlb = await uploadImage(sib)
    
let img = `https://api.popcat.xyz/ship?user1=${urla}&user2=${urlb}`
let caption = `*Ciee...* ${toM(a)} ❤️ ${toM(b)}`
    await conn.sendButton(m.chat, caption, wm, img, [['jodohnya', `${usedPrefix}jodohnya`],['jodohku', `${usedPrefix}jodohku`]], m, { mentions: conn.parseMention(caption) })
}

if (command == 'popbiden') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} Your`
let img = `https://api.popcat.xyz/biden?text=${text}`
let caption = `*Result:* ${text}`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'poppika') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} Your`
let img = `https://api.popcat.xyz/pikachu?text=${text}`
let caption = `*Result:* ${text}`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'popmeme') {
let f = await fetch(`https://api.popcat.xyz/meme`)
let x = await f.json()
let caption = `*title:* ${x.title}
*url:* ${x.url}
*upvotes:* ${x.upvotes}
*comments:* ${x.comments}`
await conn.sendButton(m.chat, caption, wm, x.image, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'popdrip') {
let q = m.quoted ? m.quoted : m
    let img = await q.download?.()
    let url = await uploadImage(img)

let drip = `https://api.popcat.xyz/drip?image=${url}`
let caption = `*Result:*`
await conn.sendButton(m.chat, caption, wm, drip, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, { mentions: conn.parseMention(caption) })
}

if (command == 'popclown') {
let q = m.quoted ? m.quoted : m
    let img = await q.download?.()
    let url = await uploadImage(img)
    
let drip = `https://api.popcat.xyz/clown?image=${url}`
let caption = `*Result:*`
await conn.sendButton(m.chat, caption, wm, drip, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, { mentions: conn.parseMention(caption) })
}

if (command == 'popuncover') {
let q = m.quoted ? m.quoted : m
    let img = await q.download?.()
    let url = await uploadImage(img)
    
let drip = `https://api.popcat.xyz/uncover?image=${url}`
let caption = `*Result:*`
await conn.sendButton(m.chat, caption, wm, drip, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, { mentions: conn.parseMention(caption) })
}

if (command == 'popad') {
let q = m.quoted ? m.quoted : m
    let img = await q.download?.()
    let url = await uploadImage(img)
    
let drip = `https://api.popcat.xyz/ad?image=${url}`
let caption = `*Result:*`
await conn.sendButton(m.chat, caption, wm, drip, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, { mentions: conn.parseMention(caption) })
}

if (command == 'popblur') {
let q = m.quoted ? m.quoted : m
    let img = await q.download?.()
    let url = await uploadImage(img)
    
let drip = `https://api.popcat.xyz/blur?image=${url}`
let caption = `*Result:*`
await conn.sendButton(m.chat, caption, wm, drip, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, { mentions: conn.parseMention(caption) })
}

if (command == 'popinvert') {
let q = m.quoted ? m.quoted : m
    let img = await q.download?.()
    let url = await uploadImage(img)
    
let drip = `https://api.popcat.xyz/invert?image=${url}`
let caption = `*Result:*`
await conn.sendButton(m.chat, caption, wm, drip, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, { mentions: conn.parseMention(caption) })
}

if (command == 'poptunes') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} @Your`
let f = await fetch(`https://api.popcat.xyz/itunes?q=${text}`)
let x = await f.json()
let caption = `*url:* ${x.url}
*name:* ${x.name}
*artist:* ${x.artist}
*album:* ${x.album}
*release_date:* ${x.release_date}
*price:* ${x.price}
*length:* ${x.length}
*genre:* ${x.genre}`
await conn.sendButton(m.chat, caption, wm, x.thumbnail, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'poptext') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} @Your`
let f = await fetch(`https://api.popcat.xyz/reverse?text=${text}`)
let x = await f.json()
let caption = `*Result:* ${x.text}`
return m.reply(caption)
}

if (command == 'poppet') {
let q = m.quoted ? m.quoted : m
    let img = await q.download?.()
    let url = await uploadImage(img)
    
let drip = `https://api.popcat.xyz/pet?image=${url}`
conn.sendMessage(m.chat, { image: drip }, { quoted: m })
}

if (command == 'popalert') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} Your`
let img = `https://api.popcat.xyz/alert?text=${text}`
let caption = `*Result:* ${text}`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

if (command == 'popcaution') {
if (!text) throw `Contoh penggunaan ${usedPrefix + command} Your`
let img = `https://api.popcat.xyz/caution?text=${text}`
let caption = `*Result:* ${text}`
await conn.sendButton(m.chat, caption, wm, img, [
                ['Next', `${usedPrefix + command} ${text}`]
            ], m, fdoc)
}

}
handler.command = handler.help = ['twittdl', 'otaku', 'darkjokes', 'artikbbi', 'cewekracing', 'mainslot', 'imdb', 'popss', 'popcolor', 'popcolor2', 'popsong', 'popsteam', 'sadcat', 'oogway', 'popcar', 'popgit', 'popship', 'popbiden', 'poppika', 'popmeme', 'popdrip', 'popclown', 'popuncover', 'popad', 'popblur', 'popinvert', 'poptunes', 'poptext', 'poppet', 'popalert', 'popcaution']
handler.tags = ['tools']

export default handler