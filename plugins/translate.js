import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, command }) => {
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let res = await fetch(`https://api.lolhuman.xyz/api/translate/auto/id?apikey=9b817532fadff8fc7cb86862&text=${text}`)
let xc = await res.json()
let x = xc.result
  await conn.sendButton(m.chat, `*Dari:* ${x.from}
*Ke:* ${x.to}

EN:
${x.original}

ID:
${x.translated}

_pronunciation_ : ${x.pronunciation} `, wm, null, [
                ['Menu', `${usedPrefix}menu`]
            ], m)
            

}
handler.help = ['translate2'].map(v => v + ' <lang> <teks>')
handler.tags = ['tools']
handler.command = /^(translate2)$/i

export default handler
