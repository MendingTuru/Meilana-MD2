import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    try {
    let stiker = await sticker(null, global.API('xteam', '/ttp', { file: '', text: teks }), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    } catch {
    let stimker = await sticker(null, global.API(`https://anabotofc.herokuapp.com/api/maker/ttp?apikey=AnaBot&text=${teks}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stimker, 'sticker.webp', '', m)
    throw stiker.toString()
    }
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

export default handler