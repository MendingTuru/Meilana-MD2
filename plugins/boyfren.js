let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorbf.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *BOYS FRIENDS OWNER* ${htka}
â¢ @${nomorbf.split`@`[0]} â¢
------- ${namebf} -------
ð® *Note:*
â¢ Owner tidak menerima save contact
â¢ Owner berhak blockir tanpa alasan
â¢ Berbicaralah yang sopan & tidak spam
â¢ Owner Hanya merespon yang berkaitan dengan BOT
â¢ No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorbf + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA BOYS FRIENDS* ${htka}
*É´á´á´á´:* áµÊ³á´á´á´á´ á´á´áÖáÖÉ´É¢á´Êá´É´ÃáÖÍÃ
*á´É¢á´:* 20áµÊ°
*sá´á´á´á´s:* single 
*ÊÉªÊá´Êá´á´Ê:* 21 Feb 2002
*á´á´á´Êá´ss:* Indonesia, Jawa Barat, Jakarta
*- - sá´ÉªÊÊs: - -* 
> JavaScript [89.7%]
> Python [13.4%]
> CSS [5.1%]
> Html [1.2%]
ð· *Instagram:* ${sig2}
ð *Github:* ${sgh2}
ð¥ *Whatsapp* wa.me/${nomorbf}
`
  let teks = ' '
const sections = [
   {
	title: `${htjava} BOYS FRIENDS OWNER âââââââââÂ·â¢`,
	rows: [
	    {title: "ð± â¢ Nomor", rowId: ".bfowner nomor"},
	{title: "ð¨ â¢ Biodata", rowId: ".bfowner bio"},
	{title: "ð â¢ Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME âââââââÂ·â¢`,
	rows: [
	    {title: "ð¹ â¢ Donasi", rowId: ".bfowner nomor"},
	{title: "ð â¢ Sewa", rowId: ".sewabot"},
	{title: "ð â¢ Buy Premium", rowId: ".premium"},
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
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorbf, "ð¬ á´Êá´á´s", null,null, [["á´á´É´á´sÉª", '.donasi'], [null, null],[null,null]], m)
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
          return conn.sendButton( m.chat, caption, wm, null, [`â®â° Menu`, `.menu`], m)
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
