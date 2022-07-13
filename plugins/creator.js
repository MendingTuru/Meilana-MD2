function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  let town = await this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  this.reply(m.chat, "_*Itu Nomor Ownerku Tante, Jangan Di Jadikan Pelampiasanmu Ya😌*_", town)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
