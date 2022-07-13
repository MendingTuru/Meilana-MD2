import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Want Support Bot?

*PAYMENT ↓*
_*Pulsa/pulse(MyXL):*_ ${pulsa}

_*Dana/ovo:*_ ${dana}
_*Paypal:*_ ${paypal}
_*Saweria:*_ ${saweria}
_*Trakteer:*_ ${trakteer}
Setelah Melakukan Donasi Kirim Bukti Pembayaran Ke Owner Tante💦
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/MendingTuru/', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
