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
	{title: "3d-wood2", rowId: usedPrefix + 'ephotox2 3d-wood2|' + teksnya + '|' + teksnya2},
{title: "3dgalaxy-metal", rowId: usedPrefix + 'ephotox2 3dgalaxy-metal|' + teksnya + '|' + teksnya2},
{title: "3dgold", rowId: usedPrefix + 'ephotox2 3dgold|' + teksnya + '|' + teksnya2},
{title: "3drose-gold", rowId: usedPrefix + 'ephotox2 3drose-gold|' + teksnya + '|' + teksnya2},
{title: "3dsilver", rowId: usedPrefix + 'ephotox2 3dsilver|' + teksnya + '|' + teksnya2},
{title: "3dspace", rowId: usedPrefix + 'ephotox2 3dspace|' + teksnya + '|' + teksnya2},
{title: "3dstone", rowId: usedPrefix + 'ephotox2 3dstone|' + teksnya + '|' + teksnya2},
{title: "3dvintage-light-bulb", rowId: usedPrefix + 'ephotox2 3dvintage-light-bulb|' + teksnya + '|' + teksnya2},
{title: "avengers", rowId: usedPrefix + 'ephotox2 avengers|' + teksnya + '|' + teksnya2},
{title: "balloon-text", rowId: usedPrefix + 'ephotox2 balloon-text|' + teksnya + '|' + teksnya2},
{title: "balloons-cards", rowId: usedPrefix + 'ephotox2 balloons-cards|' + teksnya + '|' + teksnya2},
{title: "balloons-love", rowId: usedPrefix + 'ephotox2 balloons-love|' + teksnya + '|' + teksnya2},
{title: "bear", rowId: usedPrefix + 'ephotox2 bear|' + teksnya + '|' + teksnya2},
{title: "blueglass-effect", rowId: usedPrefix + 'ephotox2 blueglass-effect|' + teksnya + '|' + teksnya2},
{title: "buffalo", rowId: usedPrefix + 'ephotox2 buffalo|' + teksnya + '|' + teksnya2},
{title: "bull", rowId: usedPrefix + 'ephotox2 bull|' + teksnya + '|' + teksnya2},
{title: "captain-america", rowId: usedPrefix + 'ephotox2 captain-america|' + teksnya + '|' + teksnya2},
{title: "chicken", rowId: usedPrefix + 'ephotox2 chicken|' + teksnya + '|' + teksnya2},
{title: "cutegirl-graffiti", rowId: usedPrefix + 'ephotox2 cutegirl-graffiti|' + teksnya + '|' + teksnya2},
{title: "cyanglass-effect", rowId: usedPrefix + 'ephotox2 cyanglass-effect|' + teksnya + '|' + teksnya2},
{title: "dragon", rowId: usedPrefix + 'ephotox2 dragon|' + teksnya + '|' + teksnya2},
{title: "eagle", rowId: usedPrefix + 'ephotox2 eagle|' + teksnya + '|' + teksnya2},
{title: "floral-ornamental", rowId: usedPrefix + 'ephotox2 floral-ornamental|' + teksnya + '|' + teksnya2},
{title: "football-club", rowId: usedPrefix + 'ephotox2 football-club|' + teksnya + '|' + teksnya2},
{title: "graffiti-text6", rowId: usedPrefix + 'ephotox2 graffiti-text6|' + teksnya + '|' + teksnya2},
{title: "greenglass-effect", rowId: usedPrefix + 'ephotox2 greenglass-effect|' + teksnya + '|' + teksnya2},
{title: "griffin", rowId: usedPrefix + 'ephotox2 griffin|' + teksnya + '|' + teksnya2},
{title: "gun", rowId: usedPrefix + 'ephotox2 gun|' + teksnya + '|' + teksnya2},
{title: "heated-steel", rowId: usedPrefix + 'ephotox2 heated-steel|' + teksnya + '|' + teksnya2},
{title: "hornet", rowId: usedPrefix + 'ephotox2 hornet|' + teksnya + '|' + teksnya2},
{title: "horse", rowId: usedPrefix + 'ephotox2 horse|' + teksnya + '|' + teksnya2},
{title: "jaguar", rowId: usedPrefix + 'ephotox2 jaguar|' + teksnya + '|' + teksnya2},
{title: "juventus", rowId: usedPrefix + 'ephotox2 juventus|' + teksnya + '|' + teksnya2},
{title: "life-buoys", rowId: usedPrefix + 'ephotox2 life-buoys|' + teksnya + '|' + teksnya2},
{title: "lion", rowId: usedPrefix + 'ephotox2 lion|' + teksnya + '|' + teksnya2},
{title: "lion2", rowId: usedPrefix + 'ephotox2 lion2|' + teksnya + '|' + teksnya2},
{title: "marvel", rowId: usedPrefix + 'ephotox2 marvel|' + teksnya + '|' + teksnya2},
{title: "messi", rowId: usedPrefix + 'ephotox2 messi|' + teksnya + '|' + teksnya2},
{title: "metal-marvel", rowId: usedPrefix + 'ephotox2 metal-marvel|' + teksnya + '|' + teksnya2},
{title: "metal-molding", rowId: usedPrefix + 'ephotox2 metal-molding|' + teksnya + '|' + teksnya2},
{title: "monkey", rowId: usedPrefix + 'ephotox2 monkey|' + teksnya + '|' + teksnya2},
{title: "ninja-black&white", rowId: usedPrefix + 'ephotox2 ninja-black&white|' + teksnya + '|' + teksnya2},
{title: "orangeglass-effect", rowId: usedPrefix + 'ephotox2 orangeglass-effect|' + teksnya + '|' + teksnya2},
{title: "phoenix", rowId: usedPrefix + 'ephotox2 phoenix|' + teksnya + '|' + teksnya2},
{title: "pinkglass-effect", rowId: usedPrefix + 'ephotox2 pinkglass-effect|' + teksnya + '|' + teksnya2},
{title: "pornhub", rowId: usedPrefix + 'ephotox2 pornhub|' + teksnya + '|' + teksnya2},
{title: "premier-leaguecup", rowId: usedPrefix + 'ephotox2 premier-leaguecup|' + teksnya + '|' + teksnya2},
{title: "pubg-black&white", rowId: usedPrefix + 'ephotox2 pubg-black&white|' + teksnya + '|' + teksnya2},
{title: "purpleglass-effect", rowId: usedPrefix + 'ephotox2 purpleglass-effect|' + teksnya + '|' + teksnya2},
{title: "real-madrid", rowId: usedPrefix + 'ephotox2 real-madrid|' + teksnya + '|' + teksnya2},
{title: "redglass-effect", rowId: usedPrefix + 'ephotox2 redglass-effect|' + teksnya + '|' + teksnya2},
{title: "rhino", rowId: usedPrefix + 'ephotox2 rhino|' + teksnya + '|' + teksnya2},
{title: "sabertooth", rowId: usedPrefix + 'ephotox2 sabertooth|' + teksnya + '|' + teksnya2},
{title: "shark", rowId: usedPrefix + 'ephotox2 shark|' + teksnya + '|' + teksnya2},
{title: "spider-man", rowId: usedPrefix + 'ephotox2 spider-man|' + teksnya + '|' + teksnya2},
{title: "tattoo-hand", rowId: usedPrefix + 'ephotox2 tattoo-hand|' + teksnya + '|' + teksnya2},
{title: "text-logo", rowId: usedPrefix + 'ephotox2 text-logo|' + teksnya + '|' + teksnya2},
{title: "tiger-logo", rowId: usedPrefix + 'ephotox2 tiger-logo|' + teksnya + '|' + teksnya2},
{title: "tiktok", rowId: usedPrefix + 'ephotox2 tiktok|' + teksnya + '|' + teksnya2},
{title: "typography-greenleaf", rowId: usedPrefix + 'ephotox2 typography-greenleaf|' + teksnya + '|' + teksnya2},
{title: "wolf-black&white", rowId: usedPrefix + 'ephotox2 wolf-black&white|' + teksnya + '|' + teksnya2},
{title: "wolf-galaxy", rowId: usedPrefix + 'ephotox2 wolf-galaxy|' + teksnya + '|' + teksnya2},
{title: "wolf-logo", rowId: usedPrefix + 'ephotox2 wolf-logo|' + teksnya + '|' + teksnya2},
{title: "wolver", rowId: usedPrefix + 'ephotox2 wolver|' + teksnya + '|' + teksnya2},
{title: "yellowglass-effect", rowId: usedPrefix + 'ephotox2 yellowglass-effect|' + teksnya + '|' + teksnya2}
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
handler.help = ['maker14 hello|helo']
handler.tags = ['maker']
handler.command = /^(maker14)$/i
export default handler