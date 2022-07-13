let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello`

	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "bear", rowId: usedPrefix + 'textpro bear ' + text},
{title: "berry", rowId: usedPrefix + 'textpro berry ' + text},
{title: "blackpink", rowId: usedPrefix + 'textpro blackpink ' + text},
{title: "blood", rowId: usedPrefix + 'textpro blood ' + text},
{title: "broken", rowId: usedPrefix + 'textpro broken ' + text},
{title: "carbon", rowId: usedPrefix + 'textpro carbon ' + text},
{title: "christmas", rowId: usedPrefix + 'textpro christmas ' + text},
{title: "circuit", rowId: usedPrefix + 'textpro circuit ' + text},
{title: "devil", rowId: usedPrefix + 'textpro devil ' + text},
{title: "discovery", rowId: usedPrefix + 'textpro discovery ' + text},
{title: "dropwater", rowId: usedPrefix + 'textpro dropwater ' + text},
{title: "embossed", rowId: usedPrefix + 'textpro embossed ' + text},
{title: "fiction", rowId: usedPrefix + 'textpro fiction ' + text},
{title: "firework", rowId: usedPrefix + 'textpro firework ' + text},
{title: "glossy", rowId: usedPrefix + 'textpro glossy ' + text},
{title: "glue", rowId: usedPrefix + 'textpro glue ' + text},
{title: "gradient", rowId: usedPrefix + 'textpro gradient ' + text},
{title: "greenhorror", rowId: usedPrefix + 'textpro greenhorror ' + text},
{title: "harrypotter", rowId: usedPrefix + 'textpro harrypotter ' + text},
{title: "imglitch", rowId: usedPrefix + 'textpro imglitch ' + text},
{title: "light", rowId: usedPrefix + 'textpro light ' + text},
{title: "magma", rowId: usedPrefix + 'textpro magma ' + text},
{title: "metallic", rowId: usedPrefix + 'textpro metallic ' + text},
{title: "neon", rowId: usedPrefix + 'textpro neon ' + text},
{title: "paper", rowId: usedPrefix + 'textpro paper ' + text},
{title: "skeleton", rowId: usedPrefix + 'textpro skeleton ' + text},
{title: "sketch", rowId: usedPrefix + 'textpro sketch ' + text},
{title: "stone", rowId: usedPrefix + 'textpro stone ' + text},
{title: "transformer", rowId: usedPrefix + 'textpro transformer ' + text},
{title: "videogame", rowId: usedPrefix + 'textpro videogame ' + text}
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
handler.help = ['maker7 hello']
handler.tags = ['maker']
handler.command = /^(maker7)$/i
export default handler