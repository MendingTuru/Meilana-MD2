let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Masukkan teks*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] Erorr*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
export default handler
