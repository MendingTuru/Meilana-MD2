let handler = async (m, { command, text }) => m.reply(`
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${['Iya keknya', 'Y saja', 'Gtau', 'Gk', 'No', 'Ynkts', '...', 'Tanya yg lain', 'Bisajadi'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah2 <teks>?']
handler.tags = ['kerang', 'fun']
handler.command = /^apakah2$/i

export default handler
