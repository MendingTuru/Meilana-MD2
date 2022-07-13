import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (command == 'ppcp') {
        let res = await fetch(`https://api-xcoders.xyz/api/random/ppcouple?apikey=xcoders`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'Cewe', wm, json.result.ppcwe, [['🔄 Next 🔄', `/${command}`]], m, fdoc)
conn.sendButton(m.chat, 'Cowo', wm, json.result.ppcwo, [['🔄 Next 🔄', `/${command}`]], m, fdoc)
}

if (command == 'ppcp2') {
let res = await fetch(`https://yuzzu-api.herokuapp.com/api/couple`)
let json = await res.json()
let jh = json.result
let x = jh.getRandom()
conn.sendButton(m.chat, 'Cewe', wm, x.female, [['🔄 Next 🔄', `/${command}`]], m, fdoc)
conn.sendButton(m.chat, 'Cowo', wm, x.male, [['🔄 Next 🔄', `/${command}`]], m, fdoc)
}

}

handler.tags = ['fun']
handler.command = ['ppcp', 'ppcp2']

export default handler