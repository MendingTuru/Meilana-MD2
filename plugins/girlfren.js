let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorbf.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *BOYS FRIENDS OWNER* ${htka}
• @${nomorbf.split`@`[0]} •
------- ${namebf} -------
📮 *Note:*
• Tidak menerima save contact, Takut Pangeran Marah
• Saya Cewe Pangeran berhak blockir tanpa alasan
• Berbicaralah yang sopan & jangan chat gw pangeran cemburuan
• Hanya merespon yang berkaitan dengan BOT, Kalo bukan bahas bot gw blokir!
• No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorbf + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA BOYS FRIENDS* ${htka}
*ɴᴀᴍᴇ:* ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×
*ᴀɢᴇ:* 20ᵗʰ
*sᴛᴀᴛᴜs:* single 
*ʙɪʀᴛʜᴅᴀʏ:* 21 Feb 2002
*ᴀᴅᴅʀᴇss:* Indonesia, Jawa Barat, Jakarta
*- - sᴋɪʟʟs: - -* 
> JavaScript [89.7%]
> Python [13.4%]
> CSS [5.1%]
> Html [1.2%]
📷 *Instagram:* ${sig2}
🐈 *Github:* ${sgh2}
🥏 *Whatsapp* wa.me/${nomorbf}
`
  let teks = ' '
const sections = [
   {
	title: `${htjava} BOYS FRIENDS OWNER –––––––––·•`,
	rows: [
	    {title: "📱 • Nomor", rowId: ".bfowner nomor"},
	{title: "🎨 • Biodata", rowId: ".bfowner bio"},
	{title: "🌎 • Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".bfowner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewabot"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *BOYS FRIENDS OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(bfcreator|bfowner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorbf, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['bfowner', 'bfcreaor']
handler.tags = ['main', 'info']
handler.command = /^(bfowner|bfcreator)/i

export default handler
