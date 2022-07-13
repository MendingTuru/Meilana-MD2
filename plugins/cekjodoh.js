import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {

let urut = text.split`|`
  let nama = urut[0]
  let pasangan = urut[1]

if (!text) throw `Contoh penggunaan ${usedPrefix}${command} gw|ayang`

let f = await fetch(`https://bx-hunter.herokuapp.com/api/primbon/jodoh?nama1=${nama}&nama2=${pasangan}&apikey=FuckBitch`)
let x = await f.json()
let caption = `
*Nama:* ${x.namaKamu} & ${x.namaPasangan}
*Positif:* ${x.positif}
*Negatif:* ${x.negatif}
`
await conn.sendHydrated(m.chat, caption, wm, x.thumbnail, null, null, null, null, [
      ['Ceksifat', usedPrefix + 'ceksifat ' + nama + '|' + pasangan],
      ['Menu', usedPrefix + 'menu']
    ], m)

}
handler.help = ['cekjodoh <gw>|<lo>']
handler.tags = ['kerang', 'fun']
handler.command = /^cekjodoh/i

handler.limit = true

export default handler
