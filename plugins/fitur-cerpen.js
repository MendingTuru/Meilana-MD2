import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return m.reply(`Contoh penggunaan ${usedPrefix}${command} cinta\nList:\ncinta\nhoror\njawa\nlucu\nperjuangan\nsahabat`)
  let json = await fetch(`https://api-xcoders.xyz/api/random/cerpen/${text}?apikey=xcoders`)
  let jsons = await json.json()
        let x = jsons.result
  m.reply(`
Judul *${x.title}*
_Author:_ ${x.author_name}
_Url:_ ${x.author_url}
${x.story}
`.trim())
}
handler.help = ['cerpen'].map(v => v + ' <apa>')
handler.tags = ['edukasi']
handler.command = /^(cerpen|cerita)$/i

export default handler