/*
By : Aine
*/
export async function before(m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let isSticker = m.mtype
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        } else {
          m.reply('*Sticker detected*\nKamu akan bot keluar kan!') // ganti text terserah kamu 
          await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }return true
      }
    }
  }
  return true
}
