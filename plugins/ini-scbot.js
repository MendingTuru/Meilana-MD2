import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `*π€SAYA NYARI ESCE CUMA DI GITHUB BANH*\n\n_Silahkan Follow Github Saya Di Bawah ,Terimakasih_`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://github.com/MendingTuru/', 'πΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π', '/menu']
], m)
}
handler.command = ['sc']

export default handler
