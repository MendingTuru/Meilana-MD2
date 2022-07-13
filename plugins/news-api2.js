import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (!text) throw `Contoh:
${usedPrefix + command} category
*List:*
antara
bbc
cnbc
cnn
daily
detik
fajar
idn
indozone
inews
kompas
kontan
kumparan
merdeka
metro
okezone
republika
sindo
tempo
tribun
viva`

let f = await fetch(`https://dhn-api.herokuapp.com/api/news/${text}?apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
*Source :* ${v.berita_url}
Berita : ${v.berita}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m)
}

handler.command = handler.help = ['news']
handler.tags = ['random']

export default handler
