let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello`

	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "american", rowId: usedPrefix + 'epho american ' + text},
{title: "anonymous", rowId: usedPrefix + 'epho anonymous ' + text},
{title: "aov", rowId: usedPrefix + 'epho aov ' + text},
{title: "arrow", rowId: usedPrefix + 'epho arrow ' + text},
{title: "arrow2", rowId: usedPrefix + 'epho arrow2 ' + text},
{title: "blackpink", rowId: usedPrefix + 'epho blackpink ' + text},
{title: "cake", rowId: usedPrefix + 'epho cake ' + text},
{title: "caper", rowId: usedPrefix + 'epho caper ' + text},
{title: "cloth", rowId: usedPrefix + 'epho cloth ' + text},
{title: "cloud", rowId: usedPrefix + 'epho cloud ' + text},
{title: "coverpubg", rowId: usedPrefix + 'epho coverpubg ' + text},
{title: "crank", rowId: usedPrefix + 'epho crank ' + text},
{title: "dragonfire", rowId: usedPrefix + 'epho dragonfire ' + text},
{title: "eraser", rowId: usedPrefix + 'epho eraser ' + text},
{title: "foggy", rowId: usedPrefix + 'epho foggy ' + text},
{title: "glasses", rowId: usedPrefix + 'epho glasses ' + text},
{title: "graffiti", rowId: usedPrefix + 'epho graffiti ' + text},
{title: "greenbrush", rowId: usedPrefix + 'epho greenbrush ' + text},
{title: "hallowen", rowId: usedPrefix + 'epho hallowen ' + text},
{title: "horror", rowId: usedPrefix + 'epho horror ' + text},
{title: "incandescent", rowId: usedPrefix + 'epho incandescent ' + text},
{title: "leafgraphy", rowId: usedPrefix + 'epho leafgraphy ' + text},
{title: "letters", rowId: usedPrefix + 'epho letters ' + text},
{title: "metals", rowId: usedPrefix + 'epho metals ' + text},
{title: "ml", rowId: usedPrefix + 'epho ml ' + text},
{title: "neonblue", rowId: usedPrefix + 'epho neonblue ' + text},
{title: "neonbp", rowId: usedPrefix + 'epho neonbp ' + text},
{title: "nightstars", rowId: usedPrefix + 'epho nightstars ' + text},
{title: "pig", rowId: usedPrefix + 'epho pig ' + text},
{title: "pubgavatar", rowId: usedPrefix + 'epho pubgavatar ' + text},
{title: "puppy", rowId: usedPrefix + 'epho puppy ' + text},
{title: "sunlight", rowId: usedPrefix + 'epho sunlight ' + text},
{title: "television", rowId: usedPrefix + 'epho television ' + text},
{title: "tiger", rowId: usedPrefix + 'epho tiger ' + text},
{title: "typography", rowId: usedPrefix + 'epho typography ' + text},
{title: "typography2", rowId: usedPrefix + 'epho typography2 ' + text},
{title: "warface", rowId: usedPrefix + 'epho warface ' + text},
{title: "water", rowId: usedPrefix + 'epho water ' + text}
	]
    }
]

const listMessage = {
  text: `⚡ Silakan pilih tema di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ Tema Disini ☂️`,
  sections
}
conn.sendMessage(m.chat, listMessage, fdoc)
}
handler.help = ['maker11 hello']
handler.tags = ['maker']
handler.command = /^(maker11)$/i
export default handler