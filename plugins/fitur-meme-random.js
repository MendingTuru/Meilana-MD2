import axios from "axios"
let handler = async (m, {command, conn}) => {
let res = await axios(`https://meme-api.herokuapp.com/gimme`)
let json = res.data
let url = json.url
conn.sendButton(m.chat, `*${command}*`.trim(), author, url, [['🔄 NEXT 🔄', `/${command}`]], m)
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i
export default handler
