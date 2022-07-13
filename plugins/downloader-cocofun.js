import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} http://i.coco.fun/short/1513tui/`
        let res = await fetch(`https://api.lolhuman.xyz/api/cocofun?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`)
    let x = await res.json()
    conn.sendButton(m.chat, `*${htki} COCOFUN ${htka}*
*title:* ${x.result.title}
*tag:* ${x.result.tag}
*likes:* ${x.result.likes}
*dislike:* ${x.result.dislike}

*views:* ${x.result.views}
*uploader:* ${x.result.uploader}
*duration:* ${x.result.duration}
*dislike:* ${x.result.dislike}
    `, wm, x.result.thumbnail, [['Wm', `.get ${x.result.withwm}`],['Nowm', `.get ${x.result.nowm}`]],m)
}
handler.help = ['cocofun'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((cocofun)(downloder|dl)?)$/i

export default handler
