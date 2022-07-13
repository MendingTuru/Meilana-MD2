
export async function all(m) {
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup || db.data.settings[this.user.jid].group) return
   let user = global.db.data.users[m.sender]
    const cooldown = 86400000
    if (new Date - user.pc < cooldown) return // setiap 24 jam sekali
    // await this.sendButton(m.chat, `👋 Hai *${conn.getName(m.sender)}*, ${user.banned ? 'kamu dibanned' : `Ada yang bisa *${this.user.name}* bantu?\nKetik *.menu* untuk melihat list fitur bot\nKetik *.join* untuk memasukkan bot ke grup kamu`}`.trim(), author, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '.owner' : '/menu']], m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm}}}})    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)
    let caption = `👋 Hai *${name} @${who.split("@")[0]}*, ${user.banned ? 'kamu dibanned' : `Ada yang bisa *${this.user.name}* bantu?\nKetik *.menu* untuk melihat list fitur bot\nKetik *.join* untuk memasukkan bot ke grup kamu`}
`.trim()
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '.owner' : '/menu']], m, { mentions: this.parseMention(caption) })
    user.pc = new Date * 1
}
