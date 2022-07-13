import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let json = await fetch(`https://api-xcoders.xyz/api/random/gore?apikey=xcoders`)
        let jsons = await json.json()
        let x = jsons.result
        let images = x.thumbnail
        let buttons = [
                    {buttonId: `gore`, buttonText: {displayText: '➡️➡️Next Image➡️➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 gore 」━┉⎔*
🤠 *Query* : ${x.title}
 ${x.authorname}
 ${x.published}
 ${x.author_url}
 ${x.quality}
 ${x.duration}
 ${x.url}
`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['gore']
handler.tags = ['fun']
handler.command = /^(gore)$/i

export default handler