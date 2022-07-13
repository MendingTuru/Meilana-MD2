let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello|helo`
let urut = text.split`|`
  let teksnya = urut[0]
  let teksnya2 = urut[1]
	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "aglitch", rowId: usedPrefix + 'textpro2 aglitch|' + teksnya + '|' + teksnya2},
{title: "captainamerica", rowId: usedPrefix + 'textpro2 captainamerica|' + teksnya + '|' + teksnya2},
{title: "choror", rowId: usedPrefix + 'textpro2 choror|' + teksnya + '|' + teksnya2},
{title: "layered", rowId: usedPrefix + 'textpro2 layered|' + teksnya + '|' + teksnya2},
{title: "pornhub", rowId: usedPrefix + 'textpro2 pornhub|' + teksnya + '|' + teksnya2},
{title: "spooky", rowId: usedPrefix + 'textpro2 spooky|' + teksnya + '|' + teksnya2}
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
handler.help = ['maker8 hello|helo']
handler.tags = ['maker']
handler.command = /^(maker8)$/i
export default handler