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
	{title: "3dgalaxy-metal", rowId: usedPrefix + 'textprox2 3dgalaxy-metal|' + teksnya + '|' + teksnya2},
{title: "3dgold", rowId: usedPrefix + 'textprox2 3dgold|' + teksnya + '|' + teksnya2},
{title: "3drosegold", rowId: usedPrefix + 'textprox2 3drosegold|' + teksnya + '|' + teksnya2},
{title: "3dsilver", rowId: usedPrefix + 'textprox2 3dsilver|' + teksnya + '|' + teksnya2},
{title: "3dspace", rowId: usedPrefix + 'textprox2 3dspace|' + teksnya + '|' + teksnya2},
{title: "3dstone", rowId: usedPrefix + 'textprox2 3dstone|' + teksnya + '|' + teksnya2},
{title: "3dvintage", rowId: usedPrefix + 'textprox2 3dvintage|' + teksnya + '|' + teksnya2},
{title: "avengers", rowId: usedPrefix + 'textprox2 avengers|' + teksnya + '|' + teksnya2},
{title: "balloons-cards", rowId: usedPrefix + 'textprox2 balloons-cards|' + teksnya + '|' + teksnya2},
{title: "balloons-love", rowId: usedPrefix + 'textprox2 balloons-love|' + teksnya + '|' + teksnya2},
{title: "classic8bit", rowId: usedPrefix + 'textprox2 classic8bit|' + teksnya + '|' + teksnya2},
{title: "cutegirl", rowId: usedPrefix + 'textprox2 cutegirl|' + teksnya + '|' + teksnya2},
{title: "floraltext", rowId: usedPrefix + 'textprox2 floraltext|' + teksnya + '|' + teksnya2},
{title: "glitchtext", rowId: usedPrefix + 'textprox2 glitchtext|' + teksnya + '|' + teksnya2},
{title: "gradientlogo", rowId: usedPrefix + 'textprox2 gradientlogo|' + teksnya + '|' + teksnya2},
{title: "horrortext", rowId: usedPrefix + 'textprox2 horrortext|' + teksnya + '|' + teksnya2},
{title: "juventus", rowId: usedPrefix + 'textprox2 juventus|' + teksnya + '|' + teksnya2},
{title: "layeredtext", rowId: usedPrefix + 'textprox2 layeredtext|' + teksnya + '|' + teksnya2},
{title: "lion-mascot", rowId: usedPrefix + 'textprox2 lion-mascot|' + teksnya + '|' + teksnya2},
{title: "marvel", rowId: usedPrefix + 'textprox2 marvel|' + teksnya + '|' + teksnya2},
{title: "metal-marvel", rowId: usedPrefix + 'textprox2 metal-marvel|' + teksnya + '|' + teksnya2},
{title: "metal-molding", rowId: usedPrefix + 'textprox2 metal-molding|' + teksnya + '|' + teksnya2},
{title: "ninja-black&white", rowId: usedPrefix + 'textprox2 ninja-black&white|' + teksnya + '|' + teksnya2},
{title: "phtext", rowId: usedPrefix + 'textprox2 phtext|' + teksnya + '|' + teksnya2},
{title: "spider-man", rowId: usedPrefix + 'textprox2 spider-man|' + teksnya + '|' + teksnya2},
{title: "thortext", rowId: usedPrefix + 'textprox2 thortext|' + teksnya + '|' + teksnya2},
{title: "tiktok", rowId: usedPrefix + 'textprox2 tiktok|' + teksnya + '|' + teksnya2},
{title: "typography-greenleaf", rowId: usedPrefix + 'textprox2 typography-greenleaf|' + teksnya + '|' + teksnya2},
{title: "wolf-black&white", rowId: usedPrefix + 'textprox2 wolf-black&white|' + teksnya + '|' + teksnya2},
{title: "wolf-galaxy", rowId: usedPrefix + 'textprox2 wolf-galaxy|' + teksnya + '|' + teksnya2}
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
handler.help = ['maker10 hello|helo']
handler.tags = ['maker']
handler.command = /^(maker10)$/i
export default handler