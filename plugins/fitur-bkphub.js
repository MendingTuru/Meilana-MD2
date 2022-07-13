import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

    if (command == 'caribokep') {
    try {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} japan`
let f = await fetch(`https://betabotz-api.herokuapp.com/api/search/xvideos?query=${text}&apikey=BetaBotz`)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
Info: ${v.info}
Link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Dlbokep!', `${usedPrefix}dlbokep ${xx.result[0].link}`]
            ], m, fdoc)
            } catch {
            let f = await fetch(`https://betabotz-api.herokuapp.com/api/search/xnxx?query=${text}&apikey=BetaBotz`)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
Info: ${v.info}
Link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Dlbokep!', `${usedPrefix}dlbokep ${xx.result[0].link}`]
            ], m, fdoc)
            }
    }
   
  if (command == 'caribokep2') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} japan`
try {
let f = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=9b817532fadff8fc7cb86862&query=${text}`)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
views: ${v.views}
duration: ${v.duration}
uploader: ${v.uploader}
link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Dlbokep!', `${usedPrefix}dlbokep ${xx.result[0].link}`]
            ], m, fdoc)
} catch {
let f = await fetch(`https://betabotz-api.herokuapp.com/api/search/pornhub?query=${text}&apikey=BetaBotz`)
let xx = await f.json()
let str = xx.result.map((v, index) => {
        return `${1 + index}. Judul *${v.title}*
views: ${v.views}
author: ${v.author}
link: ${v.link}`.trim()
    }).join('\n\n')
    await conn.sendButton(m.chat, str, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}
    }
    
    if (command == 'dlbokep') {
    if (!text) throw `Contoh penggunaan ${usedPrefix}${command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`
    try {
  let json = await fetch(`https://api.lolhuman.xyz/api/xnxx?apikey=9b817532fadff8fc7cb86862&url=${text}`)
  let x = await json.json()
  let caption = `*Title:* ${x.result.title}
  *duration:* ${x.result.duration}
  *view:* ${x.result.view}
  *rating:* ${x.result.rating}
  *like:* ${x.result.like}
  *dislike:* ${x.result.dislike}
  *comment:* ${x.result.comment}
  *tag:* ${Array.from(x.result.tag)}
  *description:* ${x.result.description}
  `
conn.sendFile(m.chat, x.result.link[1].link, 'asupan.mp4', caption, m)
} catch {
let json = await fetch(`https://bx-hunter.herokuapp.com/api/xnxxdl?url=${text}&apikey=dno8pZJW`)
  let x = await json.json()
  let caption = `*Title:* ${x.result.title}
  `
conn.sendFile(m.chat, x.result.files.high, 'asupan.mp4', caption, m)

}
}

}
handler.command = handler.help = ['caribokep', 'caribokep2', 'dlbokep']
handler.tags = ['nsfw']

export default handler
