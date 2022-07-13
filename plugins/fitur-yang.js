let handler = async (m, { conn, command, usedPrefix, text, groupMetadata }) => {

if (!text) throw `Contoh:
${usedPrefix + command} Yang terserah`
let em = ['😀','😂','😃','🗿','🤤','😁','😐','🙂','☹️']

    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let am = em.getRandom()
    conn.sendButton(m.chat, `Yang Paling *${text}* Adalah ${toM(a)} ${am}`, author, null, [['Cari lagi', '.yang ' + text]], m,{mentions: [a]})
    
}

handler.command = handler.help = ['yang']
handler.tags = ['fun']

handler.group = true

export default handler