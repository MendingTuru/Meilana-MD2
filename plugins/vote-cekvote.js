
let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `Tidak ada voting digrup ini!`, author, null, [
    ['vote', `${usedPrefix}+vote`],
    ['menu', `${usedPrefix}menu`]
], m)

    let [reason, upvote, devote] = conn.vote[id]
    let caption = `「 *Vote* 」
*Alasan:* ${reason}
*Upvote*
_Total: ${upvote.length}_
${upvote.map((v, i) => `• ${i + 1}.  @${v.split`@`[0]}`).join('\n')}

*Devote*
_Total: ${devote.length}_
${devote.map((v, i) => `• ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
wm
    `.trim()
await conn.sendButton(m.chat, caption, author, null, [
        ['upvote', `${usedPrefix}upvote`],
        ['devote', `${usedPrefix}devote`],
        ['hapusvote', `${usedPrefix}-vote`]
    ], m, { mentions: conn.parseMention(caption) })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i

export default handler
