import hxz from 'hxz-api')
import fetch from 'node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .playstore coc'
  let f = await hxz.playstore(text)
let v = await f.json()
let teks = v.map(v => {
return `
*PLAY STORE*

NAMA: ${v.name}
DEVELOPER: ${v.developer}
LINK: ${v.link}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m)

}
handler.help = ['playstore <apk>']
handler.tags = ['internet']
handler.command = /^playstore$/i

export default handler
