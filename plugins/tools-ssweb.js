import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} https://s.id`

let caption = `Nihh banh ${command} nya`
let url = `https://violetics.pw/api/media/ssweb?apikey=beta&url=${text}`
await conn.sendHydrated(m.chat, caption, wm, url, null, null, null, null, [
      ['Menu', usedPrefix + 'menu']
    ], m)

}
handler.help = ['ssweb url']
handler.command = ['ss', 'ssweb', 'ssf']
handler.tags = ['tools']

export default handler
