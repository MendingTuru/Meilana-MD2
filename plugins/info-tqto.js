const { makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*▸ - - - —「 BIG THANKS TO 」— - - - ◂*

*👤Adiwajshing:*
https://github.com/adiwajshing

*👤Nurutomo:*
https://github.com/Nurutomo

*Koko Pangeran:*
https://github.com/MendingTuru
`
conn.reply(m.chat, tqto, m, { contextInfo: { externalAdReply: {
            title: `${htjava} ${wm}`,
            body: botdate,
            description: bottime,
            mediaType: 2,
          thumbnail: await(await fetch(hwaifu.getRandom())).buffer(),
         mediaUrl: sgh
        }
     }
    })
}
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler
