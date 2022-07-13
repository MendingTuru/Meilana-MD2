import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${await conn.getName(m.sender)}`}}}}

if (!args[0]) throw `Contoh:\n${usedPrefix + command} 1`
   // if (isNaN(args[0]) || isNaN(args[1])) throw `contoh:\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`

    let json = await fetch(`https://api.quran.sutanlab.id/surah/${args[0]}`)
        let jsons = await json.json()
        let caption = `*Name* : *${jsons.data.name.long}*
        
${jsons.data.name.transliteration.id}
${jsons.data.revelation.id}

${jsons.data.tafsir.id}
${jsons.data.verses[0].text.arab}
${jsons.data.verses[0].translation.id}
`
    await conn.sendButton(m.chat, caption, wm, null, [
                ['Get', `${usedPrefix}get ${jsons.data.verses[0].audio.primary}`]
            ], m, fdoc)
}
handler.help = ['alquran2 nomor']
handler.tags = ['quran']
handler.command = /^(al)?quran2$/i

export default handler
