let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorgf.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *GIRLS FRIENDS OWNER* ${htka}
• @${nomorgf.split`@`[0]} •
------- ${namegf} -------
📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorgf + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA GIRLS FRIENDS* ${htka}
*ɴᴀᴍᴇ:* Meilana×፝֟͜×
*ᴀɢᴇ:* 18ᵗʰ
*sᴛᴀᴛᴜs:* single 
*ʙɪʀᴛʜᴅᴀʏ:* 04 Mei 2004
*ᴀᴅᴅʀᴇss:* Indonesia, Jawa Barat, Tanggerang
*- - sᴋɪʟʟs: - -* 
> JavaScript [89.7%]
> Python [13.4%]
> CSS [5.1%]
> Html [1.2%]
📷 *Instagram:* ${sig2}
🐈 *Github:* ${sgh2}
🥏 *Whatsapp* wa.me/${nomorgf}
`
  let teks = ' '
const sections = [
   {
	title: `${htjava} GIRLS FRIENDS OWNER –––––––––·•`,
	rows: [
	    {title: "📱 • Nomor", rowId: ".gfowner nomor"},
	{title: "🎨 • Biodata", rowId: ".gfowner bio"},
	{title: "🌎 • Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".gfowner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewabot"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *GIRLS FRIENDS OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(gfcreator|gfowner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorgf, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
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

handler.help = ['gfowner', 'gfcreaor']
handler.tags = ['main', 'info']
handler.command = /^(gfowner|gfcreator)/i

export default handler
