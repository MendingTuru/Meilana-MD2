
import fetch from 'node-fetch'
import hx from 'hxz-api'

let handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
if (!args[1]) return conn.sendButton(m.chat, `*${htki} ғᴀᴄᴇʙᴏᴏᴋ ${htka}*`, null, null, [['sᴅ', `.fb ${args[0]} sd`],['ʜᴅ', `.fb ${args[0]} hd`]],m)



/* Fb */
await hx.fbdown(`${args[0]}`)
            .then(G => {
            let ten = `${G.HD}`
            conn.sendHydrated(m.chat, ' ', `*Link video_normal* : ${G.Normal_video}
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, await (await fetch(ten)).buffer(), args[0], '🌎 ᴜ ʀ ʟ', null,null, [[null,null],[null,null],[null,null]],m)
            })

/* Fb */
  let llh = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=9b817532fadff8fc7cb86862&url=${args[0]}`)
    let hm = await llh.json()
    let ann = "sd"
  if (args[1] == 'sd') {
    ann = hm.result
  }
  if (args[1] == 'hd') {
    ann = hm.result
  }
  let { uman } = ann
    conn.sendHydrated(m.chat, ' ', `
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, await (await fetch(uman)).buffer(), args[0], '🌎 ᴜ ʀ ʟ', null,null, [[null,null],[null,null],[null,null]],m)
       
 /* Fb */
 let nex = await fetch(`https://api.neoxr.my.id/api/fb?url=${args[0]}&apikey=JeJU827J`)
    let ne = await nex.json()
    let ox = "sd"
  if (args[1] == 'sd') {
    ox = ne.data[0].url
  }
  if (args[1] == 'hd') {
    ox = ne.data[1].url
  }
  let { uxr } = ox
    conn.sendHydrated(m.chat, ' ', `
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, await (await fetch(uxr)).buffer(), args[0], '🌎 ᴜ ʀ ʟ', null,null, [[null,null],[null,null],[null,null]],m)
  
  /* Fb */
  let xtm = await fetch(`https://api.xteam.xyz/dl/fbv2?url=${args[0]}&APIKEY=NezukoTachibana281207`)
    let ex = await xtm.json()
    let te = "sd"
  if (args[1] == 'sd') {
    te = ex.result.sd.url
  }
  if (args[1] == 'hd') {
    te = ex.result.hd.url
  }
  let { am } = te
    conn.sendHydrated(m.chat, ' ', `
━━━━━•─────────────── 
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, await (await fetch(am)).buffer(), args[0], '🌎 ᴜ ʀ ʟ', null,null, [[null,null],[null,null],[null,null]],m)
       
       
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i

export default handler
