let handler = async(m, { conn, text, usedPrefix, command }) => {
        let images = `https://api-xcoders.xyz/api/random/darkjoke?apikey=xcoders`
        let buttons = [
                    {buttonId: `.darkjoke`, buttonText: {displayText: '➡️➡️Next Image➡️➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Random darkjoke 」━┉⎔*
🤠 *Query* : ${command}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['darkjoke']
handler.tags = ['fun']
handler.command = /^(darkjoke)$/i

export default handler