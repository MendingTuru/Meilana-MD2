import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let json = await fetch(`https://api-xcoders.xyz/api/random/cersex?apikey=xcoders`)
        let jsons = await json.json()
        let x = jsons.result
        let images = x.thumbnail
        let buttons = [
                    {buttonId: `cersex`, buttonText: {displayText: '➡️➡️Next Image➡️➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Cersex 」━┉⎔*
🤠 *Query* : ${x.title}
 ${x.date}
 
 ${x.cerita}
`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['cersex']
handler.tags = ['fun']
handler.command = /^(cersex)$/i

export default handler