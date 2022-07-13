import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://sharechat.com/video/pDExqga`
        let res = await fetch(`https://api.lolhuman.xyz/api/sharechat?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`)
    let x = await res.json()
    conn.sendButton(m.chat, `*${htki} ShareChat ${htka}*
*title:* ${x.result.title}
    `, wm, x.result.thumbnail, [['Mp4', `.get ${x.result.link_dl}`]],m)
}
handler.help = ['sharechat'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((sharechat)(downloder|dl)?)$/i

export default handler
