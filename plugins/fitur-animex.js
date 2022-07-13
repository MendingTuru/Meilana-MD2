let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`Example : ${usedPrefix + command} neon helo \n*List Efek:*\nhusbu\nlatestnekopoi\nloli\nneko\nrandomnhentai\nwaifu`)
        let images = `https://api-xcoders.xyz/api/anime/${text}?apikey=xcoders`
        let buttons = [
                    {buttonId: `.animex ${text}`, buttonText: {displayText: '➡️➡️Next Image➡️➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*⎔┉━「 Animex 」━┉⎔*
🤠 *Query* : ${text}`,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['animex <text>']
handler.tags = ['maker']
handler.command = /^(animex|animeimg)$/i

export default handler