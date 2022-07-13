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
	{title: "buoys", rowId: usedPrefix + 'epho2 buoys|' + teksnya + '|' + teksnya2},
{title: "heated", rowId: usedPrefix + 'epho2 heated|' + teksnya + '|' + teksnya2},
{title: "pencil", rowId: usedPrefix + 'epho2 pencil|' + teksnya + '|' + teksnya2},
{title: "quotestatus", rowId: usedPrefix + 'epho2 quotestatus|' + teksnya + '|' + teksnya2},
{title: "wood", rowId: usedPrefix + 'epho2 wood|' + teksnya + '|' + teksnya2}
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
handler.help = ['maker12 hello|helo']
handler.tags = ['maker']
handler.command = /^(maker12)$/i
export default handler