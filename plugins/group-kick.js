import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let kickedUser = []
    for (let user of users)
        if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
            const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
            kickedUser.concat(res)
            await delay(1 * 1000)
        }
    m.reply(`Succes kick ${kickedUser.map(v => '@' + v.split('@')[0])}`, null, { mentions: kickedUser })

}
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = /^(kic?k|remove|tendang|\-)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true

module.exports = handler
