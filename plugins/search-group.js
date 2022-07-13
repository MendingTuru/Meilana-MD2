import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} mabar`
    let f = await fetch(`https://anabotofc.herokuapp.com/api/carigrup?apikey=AnaBot&query=${text}`)
let xx = await f.json()
let v = xx.result
let teks = v.map(v => {
return `
*Nama* : ${v.title}
*Link :* ${v.link}
*Desc :* ${v.desc}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m)
}
handler.help = ['carigrup <pencarian>']
handler.tags = ['tools']

handler.command = /^carig(ro?up|c)/i

export default handler
