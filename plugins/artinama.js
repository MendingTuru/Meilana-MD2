import fetch from 'node-fetch'

const artinama_api = [
  ['xteam', '/primbon/artinama', 'q', 'APIKEY', json => {
    if (!json.status) throw json
    return `
*Nama:* ${json.result.nama}
*Arti:* ${json.result.arti}

*Makna:* ${json.result.maksud}
`.trim()
  }],
  ['http://nzcha-apii.herokuapp.com', '/artinama', 'nama', null, json => {
    if (!json.status) throw json
    return `
*Arti:* ${json.result}
`.trim()
  }],
  ['https://scrap.terhambar.com', '/nama', 'n', null, json => {
    if (!json.status) throw json
    return `
*Arti:* ${json.result.arti}
`.trim()
  }]
]

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
  if (!text) throw 'Namanya siapa?'
  let result = ''
  for (let [origin, pathname, query, apikey, fn] of artinama_api) {
    try {
      let res = await fetch(global.API(origin, pathname, { [query]: text }, apikey))
      if (!res.ok) throw res.text()
      let json = await res.json()
      result = await fn(json)
      break
    } catch (e) {
      m.reply('Load..')
    }
  }
  await conn.sendButton(m.chat, result, wm, null, [
                ['Next', `${usedPrefix + command}`],
                ['Translate', `${usedPrefix}tr id ${result}`]
            ], m)
}
handler.help = ['artinama2'].map(v => v + ' [nama]')
handler.tags = ['kerang']
handler.command = ['artinama2']

export default handler
