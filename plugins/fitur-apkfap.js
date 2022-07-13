import fetch from 'node-fetch'
import fs from "fs"

let handler = async (m, {text, usedPrefix, command, conn}) => {
let frep = `{ contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}}`
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  
  if (command == 'apkdone') {
  let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
🤠 *Name* : *${v.apps_name}*
Link : ${v.apps_linkdl}
Version : ${v.apps_version}
Rate : ${v.apps_rate}
Tag : ${v.apps_tag}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'apkgoogle') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
🤠 *Name* : *${v.apps_name}*
Link : ${v.apps_linkdl}
Tag : ${v.apps_tag}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'apkmody') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
🤠 *Name* : *${v.apps_name}*
Link : ${v.apps_linkdl}
Desc : ${v.desc}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'apkshub') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
🤠 *Name* : *${v.apps_name}*
Link : ${v.apps_linkdl}
View : ${v.apps_views}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'happymod') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/happymod?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
🤠 *Name* : *${v.apps_name}*
Link : ${v.apps_linkdl}
Rate : ${v.apps_rate}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'hostapk') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
🤠 *Name* : *${v.apps_name}*
Link : ${v.apps_linkdl}
Rilis : ${v.apps_released}
Athor : ${v.apps_author}
Desc : ${v.apps_desc}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'revdl') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
🤠 *Name* : *${v.apps_name}*
Link : ${v.apps_linkdl}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'toraccino') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
🤠 *Name* : *${v.apps_name}*
Link : ${v.apps_linkdl}
Tag : ${v.apps_tag}
Rilis : ${v.apps_upload}
Athor : ${v.apps_author}
Desc : ${v.apps_desc}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'uapkpro') {
let f = await fetch(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${text}&apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
🤠 *Name* : *${v.apps_name}*
Link : ${v.apps_linkdl}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m, fdoc)
}

}
handler.command = handler.help = ['apkdone', 'apkgoogle', 'apkmody', 'apkshub', 'happymod', 'hostapk', 'revdl', 'toraccino', 'uapkpro']
handler.tags = ['random']

export default handler