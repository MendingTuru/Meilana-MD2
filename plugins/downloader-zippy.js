let limit = 20
import fetch from 'node-fetch'
import { zippydl} from '../lib/scrape.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
   const { hasil } = await zippydl(args[0])
   const done = hasil.link
   const limitedSize = (limit) * 1024
   var isLimit = limitedSize < hasil.fileSize
   m.reply(isLimit ? 'Size terlalu besar download sendiri' + done : wait)
   if (!done) throw 'cant download'
   if (!isLimit) await conn.sendFile(m.chat, done, hasil.title, `🔗 *Url:* ${done}`, m, null, { asDocument: true })
   } catch {
    let res = await fetch(`https://api.lolhuman.xyz/api/zippyshare?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`)
    let x = await res.json()
    conn.sendButton(m.chat, `*${htki} zippyshare ${htka}*
*title:* ${x.result.name_file}
*size:* ${x.result.size}
*date_upload:* ${x.result.date_upload}
    `, wm, null, [['Get', `.get ${x.result.download_url}`]],m)
    }
}
handler.help = ['zippyshare'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(zippy(share)?(ser)?(sher)?(sare)?)$/i

export default handler
