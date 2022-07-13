let handler = async(m, { conn, usedPrefix, command, text }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (!text) throw `Gunakan contoh ${usedPrefix + command} hello`

	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "3dglowing", rowId: usedPrefix + 'oxyx 3dglowing ' + text},
{title: "3dnature", rowId: usedPrefix + 'oxyx 3dnature ' + text},
{title: "3dwoodenblack", rowId: usedPrefix + 'oxyx 3dwoodenblack ' + text},
{title: "bevel", rowId: usedPrefix + 'oxyx bevel ' + text},
{title: "birthdaycake", rowId: usedPrefix + 'oxyx birthdaycake ' + text},
{title: "burnpaper", rowId: usedPrefix + 'oxyx burnpaper ' + text},
{title: "butterfly", rowId: usedPrefix + 'oxyx butterfly ' + text},
{title: "camuflage", rowId: usedPrefix + 'oxyx camuflage ' + text},
{title: "candy", rowId: usedPrefix + 'oxyx candy ' + text},
{title: "coffee", rowId: usedPrefix + 'oxyx coffee ' + text},
{title: "coffee-heartcup", rowId: usedPrefix + 'oxyx coffee-heartcup ' + text},
{title: "crispchrome", rowId: usedPrefix + 'oxyx crispchrome ' + text},
{title: "embroiderytext", rowId: usedPrefix + 'oxyx embroiderytext ' + text},
{title: "flaming", rowId: usedPrefix + 'oxyx flaming ' + text},
{title: "flowertext", rowId: usedPrefix + 'oxyx flowertext ' + text},
{title: "flowertypo", rowId: usedPrefix + 'oxyx flowertypo ' + text},
{title: "funnycup", rowId: usedPrefix + 'oxyx funnycup ' + text},
{title: "fur", rowId: usedPrefix + 'oxyx fur ' + text},
{title: "gerbang", rowId: usedPrefix + 'oxyx gerbang ' + text},
{title: "glowrainbow", rowId: usedPrefix + 'oxyx glowrainbow ' + text},
{title: "gradientavatar", rowId: usedPrefix + 'oxyx gradientavatar ' + text},
{title: "graffititext", rowId: usedPrefix + 'oxyx graffititext ' + text},
{title: "grenleaves", rowId: usedPrefix + 'oxyx grenleaves ' + text},
{title: "harrypotter", rowId: usedPrefix + 'oxyx harrypotter ' + text},
{title: "illuminated-metallic", rowId: usedPrefix + 'oxyx illuminated-metallic ' + text},
{title: "lovemessage", rowId: usedPrefix + 'oxyx lovemessage ' + text},
{title: "luxuryroyal", rowId: usedPrefix + 'oxyx luxuryroyal ' + text},
{title: "metalicglow", rowId: usedPrefix + 'oxyx metalicglow ' + text},
{title: "modernmetal", rowId: usedPrefix + 'oxyx modernmetal ' + text},
{title: "multimaterial", rowId: usedPrefix + 'oxyx multimaterial ' + text},
{title: "nature3d", rowId: usedPrefix + 'oxyx nature3d ' + text},
{title: "neonlight", rowId: usedPrefix + 'oxyx neonlight ' + text},
{title: "orchids-flower", rowId: usedPrefix + 'oxyx orchids-flower ' + text},
{title: "partyneon", rowId: usedPrefix + 'oxyx partyneon ' + text},
{title: "quotesgrass", rowId: usedPrefix + 'oxyx quotesgrass ' + text},
{title: "rainbowbg", rowId: usedPrefix + 'oxyx rainbowbg ' + text},
{title: "rainbowshine", rowId: usedPrefix + 'oxyx rainbowshine ' + text},
{title: "romance", rowId: usedPrefix + 'oxyx romance ' + text},
{title: "romantic-doubleheart", rowId: usedPrefix + 'oxyx romantic-doubleheart ' + text},
{title: "silk", rowId: usedPrefix + 'oxyx silk ' + text},
{title: "smoketype-effect", rowId: usedPrefix + 'oxyx smoketype-effect ' + text},
{title: "smoketypography", rowId: usedPrefix + 'oxyx smoketypography ' + text},
{title: "stars", rowId: usedPrefix + 'oxyx stars ' + text},
{title: "striking3d", rowId: usedPrefix + 'oxyx striking3d ' + text},
{title: "summertext", rowId: usedPrefix + 'oxyx summertext ' + text},
{title: "sweetcandy", rowId: usedPrefix + 'oxyx sweetcandy ' + text},
{title: "typography", rowId: usedPrefix + 'oxyx typography ' + text},
{title: "underquotes", rowId: usedPrefix + 'oxyx underquotes ' + text},
{title: "underwaterocean", rowId: usedPrefix + 'oxyx underwaterocean ' + text},
{title: "underwebmatrix", rowId: usedPrefix + 'oxyx underwebmatrix ' + text},
{title: "vintage", rowId: usedPrefix + 'oxyx vintage ' + text},
{title: "watermelon", rowId: usedPrefix + 'oxyx watermelon ' + text},
{title: "whitecube", rowId: usedPrefix + 'oxyx whitecube ' + text},
{title: "wolfmetal", rowId: usedPrefix + 'oxyx wolfmetal ' + text},
{title: "woodblock", rowId: usedPrefix + 'oxyx woodblock ' + text},
{title: "woodenboard", rowId: usedPrefix + 'oxyx woodenboard ' + text},
{title: "woodheart", rowId: usedPrefix + 'oxyx woodheart ' + text},
{title: "yellowroses", rowId: usedPrefix + 'oxyx yellowroses ' + text}
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
handler.help = ['maker3 hello']
handler.tags = ['maker']
handler.command = /^(maker3)$/i
export default handler