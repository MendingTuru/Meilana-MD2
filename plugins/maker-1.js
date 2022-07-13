let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello`

	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "burnpaper", rowId: usedPrefix + 'oxy burnpaper ' + text},
{title: "butterfly", rowId: usedPrefix + 'oxy butterfly ' + text},
{title: "coffecup", rowId: usedPrefix + 'oxy coffecup ' + text},
{title: "coffee", rowId: usedPrefix + 'oxy coffee ' + text},
{title: "doubleheart", rowId: usedPrefix + 'oxy doubleheart ' + text},
{title: "flaming", rowId: usedPrefix + 'oxy flaming ' + text},
{title: "grass", rowId: usedPrefix + 'oxy grass ' + text},
{title: "gravity", rowId: usedPrefix + 'oxy gravity ' + text},
{title: "lovemessage", rowId: usedPrefix + 'oxy lovemessage ' + text},
{title: "lovetext", rowId: usedPrefix + 'oxy lovetext ' + text},
{title: "naruto", rowId: usedPrefix + 'oxy naruto ' + text},
{title: "oceansea", rowId: usedPrefix + 'oxy oceansea ' + text},
{title: "quotewood", rowId: usedPrefix + 'oxy quotewood ' + text},
{title: "rainbow", rowId: usedPrefix + 'oxy rainbow ' + text},
{title: "romantic", rowId: usedPrefix + 'oxy romantic ' + text},
{title: "shadow", rowId: usedPrefix + 'oxy shadow ' + text},
{title: "smoke", rowId: usedPrefix + 'oxy smoke ' + text}
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
handler.help = ['maker1 hello']
handler.tags = ['maker']
handler.command = /^(maker1)$/i
export default handler