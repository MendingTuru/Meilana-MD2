import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (!text) throw `Contoh penggunaan ${usedPrefix}${command} query`
conn.sendButton(m.chat, `Random *${command}*`, author, `https://api.lolhuman.xyz/api/random2/${text}?apikey=9b817532fadff8fc7cb86862`, [['🔄 Next 🔄', `/${command}`]], m)

}
handler.command = /^(dlrandom2)$/i

export default handler