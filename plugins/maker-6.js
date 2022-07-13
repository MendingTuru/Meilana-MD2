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
	{title: "arrow-signs", rowId: usedPrefix + 'pfunia2 arrow-signs|' + teksnya + '|' + teksnya2},
{title: "birthday-cake", rowId: usedPrefix + 'pfunia2 birthday-cake|' + teksnya + '|' + teksnya2},
{title: "cinema-ticket", rowId: usedPrefix + 'pfunia2 cinema-ticket|' + teksnya + '|' + teksnya2},
{title: "lifebuoy", rowId: usedPrefix + 'pfunia2 lifebuoy|' + teksnya + '|' + teksnya2},
{title: "movie_marquee", rowId: usedPrefix + 'pfunia2 movie_marquee|' + teksnya + '|' + teksnya2},
{title: "neon", rowId: usedPrefix + 'pfunia2 neon|' + teksnya + '|' + teksnya2},
{title: "snow_writing", rowId: usedPrefix + 'pfunia2 snow_writing|' + teksnya + '|' + teksnya2}
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
handler.help = ['maker6 hello|helo']
handler.tags = ['maker']
handler.command = /^(maker6)$/i
export default handler