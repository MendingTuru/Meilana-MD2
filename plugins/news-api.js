import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:
${usedPrefix + command} id`
let f = await fetch(`https://newsapi.org/v2/top-headlines?country=${text}&apiKey=916be7f6341f4cd3991d4c3937707d30`)
let xx = await f.json()
let v = xx.articles
let teks = v.map(v => {
return `
Source : ${v.source.name}
Author : *${v.author}*
Judul : *${v.title}*
Desc : ${v.description}
Url : ${v.url}
Img : ${v.urlToImage}
Publish : *${v.publishedAt}*
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m)
}

handler.command = handler.help = ['news2']
handler.tags = ['random']

export default handler
