import fetch from 'node-fetch'

let handler = async (m, { args, text, usedPrefix, command }) => {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
    let src = await (await fetch(`https://anabotofc.herokuapp.com/api/download/mediafire?url=${args[0]}&apikey=AnaBot`)).json()
    let xxx = src.data
    let xs = xxx.nama
    let xa = xxx.mime
    let xt = xxx.size
    let lk = xxx.link
let caption = `
*Name:* ${xs}
*Size:* ${xt}
*Extension:* ${xa}
*Link:* ${lk}
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, lk, filename, '', m, null, { mimetype: xa, asDocument: true })
    }
handler.help = ['mediafire2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire2|mf2)$/i

handler.limit = true

export default handler