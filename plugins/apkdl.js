import fetch from "node-fetch"
let handler = async(m, { conn, usedPrefix, command, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Command nya', m)

let f = await fetch(`https://nzcha-apii.herokuapp.com/apk-search?q=${text}`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
Nama App : ${v.name}
Link : ${v.url}
Download : ${v.dl_url}
Desc : ${v.desc}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, v.thumb, [
                ['Search!', `${usedPrefix + command}`]
            ], m)

}
handler.help = ['rexdl apk']
handler.tags = ['tools']
handler.command = /^(apkdl)$/i

export default handler
