const isSatir = /Banh|Gwejh|Mgak|Okgey|Bimsa|Ava|Siava|Kavan|Pedo|Tumlul|Amsu/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiSatir = isSatir.exec(m.text)

    if (chat.antiSatir && isAntiSatir) {
        await conn.sendButton(m.chat, `*Kata Satir Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antisatir', '/disable antisatir'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit += 10
    
    await conn.sendButton(m.chat, `*Limit anda bertambah 10*
    
    Karena Menggunakan Kata Satir
    
    Ketik *.limit* untuk cek limit`, wm, null, [
        ['Ngechit', `${usedPrefix}ngechit`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    return !0
}