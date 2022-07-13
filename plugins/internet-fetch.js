let handler = async (m, { conn, text, usedPrefix, command }) => {
let url = `${text}`
await conn.sendFile(m.chat, url, 'sound.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true})
}

handler.command = /^(alquransound)$/i

export default handler