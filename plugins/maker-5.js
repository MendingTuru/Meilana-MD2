let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello`

	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "balloon", rowId: usedPrefix + 'pfunia balloon ' + text},
{title: "beach-sign", rowId: usedPrefix + 'pfunia beach-sign ' + text},
{title: "blood_writing", rowId: usedPrefix + 'pfunia blood_writing ' + text},
{title: "bracelet", rowId: usedPrefix + 'pfunia bracelet ' + text},
{title: "cemetery-gates", rowId: usedPrefix + 'pfunia cemetery-gates ' + text},
{title: "chalk_writing", rowId: usedPrefix + 'pfunia chalk_writing ' + text},
{title: "christmas-writing", rowId: usedPrefix + 'pfunia christmas-writing ' + text},
{title: "cookies_writing", rowId: usedPrefix + 'pfunia cookies_writing ' + text},
{title: "denim-emdroidery", rowId: usedPrefix + 'pfunia denim-emdroidery ' + text},
{title: "einstein", rowId: usedPrefix + 'pfunia einstein ' + text},
{title: "foggy_window_writing", rowId: usedPrefix + 'pfunia foggy_window_writing ' + text},
{title: "fortune-cookie", rowId: usedPrefix + 'pfunia fortune-cookie ' + text},
{title: "frosty-window-writing", rowId: usedPrefix + 'pfunia frosty-window-writing ' + text},
{title: "haunted-hotel", rowId: usedPrefix + 'pfunia haunted-hotel ' + text},
{title: "heart_tattoo", rowId: usedPrefix + 'pfunia heart_tattoo ' + text},
{title: "light-graffiti", rowId: usedPrefix + 'pfunia light-graffiti ' + text},
{title: "lipstick-writing", rowId: usedPrefix + 'pfunia lipstick-writing ' + text},
{title: "love-lock", rowId: usedPrefix + 'pfunia love-lock ' + text},
{title: "nightmare-writing", rowId: usedPrefix + 'pfunia nightmare-writing ' + text},
{title: "noir", rowId: usedPrefix + 'pfunia noir ' + text},
{title: "pendant", rowId: usedPrefix + 'pfunia pendant ' + text},
{title: "plane-banner", rowId: usedPrefix + 'pfunia plane-banner ' + text},
{title: "sand_writing", rowId: usedPrefix + 'pfunia sand_writing ' + text},
{title: "snow-sign", rowId: usedPrefix + 'pfunia snow-sign ' + text},
{title: "soup_letters", rowId: usedPrefix + 'pfunia soup_letters ' + text},
{title: "street-sign", rowId: usedPrefix + 'pfunia street-sign ' + text},
{title: "typewriter", rowId: usedPrefix + 'pfunia typewriter ' + text},
{title: "water-writing", rowId: usedPrefix + 'pfunia water-writing ' + text},
{title: "wooden_sign", rowId: usedPrefix + 'pfunia wooden_sign ' + text},
{title: "yacht", rowId: usedPrefix + 'pfunia yacht ' + text}
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
handler.help = ['maker5 hello']
handler.tags = ['maker']
handler.command = /^(maker5)$/i
export default handler