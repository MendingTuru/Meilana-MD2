import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    const results = await instagramdl(args[0])
        .catch(async _ => await instagramdlv2(args[0]))
        .catch(async _ => await instagramdlv3(args[0]))
        .catch(async _ => await instagramdlv4(args[0]))
    for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', `🔗 *Url:* ${url}`, m)
    } catch {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/CU0MhPjBZO2/`
        let res = await fetch(`https://api.lolhuman.xyz/api/instagram2?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`)
    let x = await res.json()
    conn.sendButton(m.chat, `*${htki} instagram ${htka}*
*username:* ${x.result.account.username}
*caption:* ${x.result.caption}
    `, wm, x.result.media[1], [['Mp4', `.get ${x.result.media[0]}`]],m)
    }
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(instagram|ig(dl)?)$/i
handler.premium = true
handler.limit = true

export default handler
