import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${await conn.getName(m.sender)}`}}}}

    if (!(args[0] || args[1])) throw `Contoh:\n${usedPrefix + command} 1 2\n\nMaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
   // if (isNaN(args[0]) || isNaN(args[1])) throw `contoh:\n${usedPrefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`

    let json = await fetch(`https://api.quran.sutanlab.id/surah/${args[0]}/${args[1]}`)
        let jsons = await json.json()
        let caption = `*Name* : *${jsons.data.text.arab}*
Id : ${jsons.data.translation.id}
${jsons.data.surah.name.long}
${jsons.data.surah.name.transliteration.id}

${jsons.data.tafsir.id.long}
`
    await conn.sendButton(m.chat, caption, wm, null, [
                ['Get', `${usedPrefix}get ${jsons.data.audio.primary}`]
            ], m, fdoc)
}
handler.help = ['alquran <no surah> <no ayat>']
handler.tags = ['quran']
handler.command = /^(al)?quran$/i

export default handler
