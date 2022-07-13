import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.smule.com/recording/lewis-capaldi-someone-you-loved/2027750707_2937753991`
        let res = await fetch(`https://api.lolhuman.xyz/api/smule?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`)
    let x = await res.json()
    conn.sendButton(m.chat, `*${htki} SMULE ${htka}*
*title:* ${x.result.title}
    `, wm, null, [['Mp3', `.get ${x.result.audio}`],['Mp4', `.get ${x.result.video}`]],m)
}
handler.help = ['smule'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((smule)(downloder|dl)?)$/i

export default handler
