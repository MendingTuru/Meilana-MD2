import { mediafiredl } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${filesizeH}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${aploud}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
    } catch {
    let res = await fetch(`https://api.lolhuman.xyz/api/mediafire?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`)
    let x = await res.json()
    conn.sendButton(m.chat, `*${htki} mediafire ${htka}*
*title:* ${x.result.filename}
*filetype:* ${x.result.filetype}
*filesize:* ${x.result.filesize}
*uploaded:* ${x.result.uploaded}
    `, wm, null, [['Get', `.get ${x.result.link}`]],m)
    
    let res = await fetch(`https://api.lolhuman.xyz/api/zippyshare?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`)
    let x = await res.json()
    conn.sendButton(m.chat, `*${htki} zippyshare ${htka}*
*title:* ${x.result.name_file}
*size:* ${x.result.size}
*date_upload:* ${x.result.date_upload}
    `, wm, null, [['Get', `.get ${x.result.download_url}`]],m)
    }
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i

handler.limit = true

export default handler
