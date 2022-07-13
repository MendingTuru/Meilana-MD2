let handler = async (m, { conn, text, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    }
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) await conn.sendButton(m.chat, `*Masih ada vote di chat ini!*`, author, null, [
                ['hapus', `${usedPrefix}-vote`]
            ], m)
            let caption = `Vote dimulai!
*${usedPrefix}upvote* - untuk setuju
*${usedPrefix}devote* - untuk tidak setuju
*${usedPrefix}cekvote* - untuk mengecek vote
*${usedPrefix}hapusvote* - untuk menghapus vote`
            await conn.sendButton(m.chat, caption, author, null, [
                ['upvote', `${usedPrefix}upvote`],
                ['devote', `${usedPrefix}devote`]
            ], m)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai|\+)vote$/i

export default handler
