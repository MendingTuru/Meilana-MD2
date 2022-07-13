import crypto from 'crypto'
export async function before(m, { isAdmin, isBotAdmin }) {
        let chat = global.db.data.chats[m.chat]
        if (chat.autodelvn && !m.fromMe && m.isBaileys && m.mtype === 'audioMessage' && m.msg.ptt && m.quoted) {
            let { key } = await m.reply('.delete', null, {
                messageId: '3EB0' + crypto.randomBytes(12).toString('hex')
            }).catch(_ => {})
            if (key) this.deleteMessage(m.chat, key)
        }
    }