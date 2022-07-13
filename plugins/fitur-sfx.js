import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}

if (command == 'sfx2') {
if (!text) throw `Contoh:
${usedPrefix + command} 10`
let f = await fetch(`http://www.myinstants.com/api/v1/instants/?format=json&page=${text}`)
let xx = await f.json()
let v = xx.results
let teks = v.map(v => {
return `
*Name :* ${v.name}
*Sound :* ${v.sound}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, null, [
                ['Search!', `${usedPrefix + command}`]
            ], m)
            
}

if (command == 'sfx') {
if (!args[0] || !args[1]) throw `Contoh penggunaan ${usedPrefix}${command} 2 9
*ket:*
2 : page site
9 : urutan sound

_Batas page ± 500_
_Batas urutan 10_
`
try {
    let gas = await fetch(`http://www.myinstants.com/api/v1/instants/?format=json&page=${args[0]}`)
    let json = await gas.json()
    let hasil = json.results
    let ke = args[1]
    let sound = hasil[ke].sound
    await conn.sendFile(m.chat, sound, 'song.mp3', null, m, {
type: 'audioMessage', 
ptt: true 
})
} catch (e) {
return m.reply('Error kan')
}
}

}
handler.command = handler.help = ['sfx', 'sfx2']
handler.tags = ['audio']

export default handler
