const isLinkTik = /tiktok.com/i // tambahin sendiri
const isLinkYt = /youtube.com|youtu.be/i // tambahin sendiri
const isLinkTel = /t.me/i // tambahin sendiri
const isLinkFb = /facebook.com|fb.me/i // tambahin sendiri
const isLinkIg = /instagram.com/i // tambahin sendiri

export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiLinkTik = isLinkTik.exec(m.text)
    const isAntiLinkYt = isLinkYt.exec(m.text)
    const isAntiLinkTel = isLinkTel.exec(m.text)
    const isAntiLinkFb = isLinkFb.exec(m.text)
    const isAntiLinkIg = isLinkIg.exec(m.text)

    if (chat.antiLinkTik && isAntiLinkTik) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinktik', '/disable antilinktik'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    
    await conn.sendButton(m.chat, `*Limit anda di reset ke 0*
    
    Karena Mengirim Link Tiktok
    
    Ketik *.limit* untuk cek limit`, wm, null, [
        ['Ngechit', `${usedPrefix}ngechit`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkYt && isAntiLinkYt) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkyt', '/disable antilinkyt'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    
    await conn.sendButton(m.chat, `*Limit anda di reset ke 0*
    
    Karena Mengirim Link Youtube
    
    Ketik *.limit* untuk cek limit`, wm, null, [
        ['Ngechit', `${usedPrefix}ngechit`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkTel && isAntiLinkTel) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinktel', '/disable antilinktel'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    
    await conn.sendButton(m.chat, `*Limit anda di reset ke 0*
    
    Karena Mengirim Link Telegram
    
    Ketik *.limit* untuk cek limit`, wm, null, [
        ['Ngechit', `${usedPrefix}ngechit`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkFb && isAntiLinkFb) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkfb', '/disable antilinkfb'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    
    await conn.sendButton(m.chat, `*Limit anda di reset ke 0*
    
    Karena Mengirim Link Facebook
    
    Ketik *.limit* untuk cek limit`, wm, null, [
        ['Ngechit', `${usedPrefix}ngechit`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkIg && isAntiLinkIg) {
        await conn.sendButton(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkig', '/disable antilinkig'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    
    await conn.sendButton(m.chat, `*Limit anda di reset ke 0*
    
    Karena Mengirim Link Instagram
    
    Ketik *.limit* untuk cek limit`, wm, null, [
        ['Ngechit', `${usedPrefix}ngechit`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    return !0
}