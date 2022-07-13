import fetch from 'node-fetch'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) return m.reply(`Example : ${usedPrefix + command} query`)

if (command == 'walls') {
    let res = await fetch(global.API('https://wall.alphacoders.com/api2.0', '/get.php', {
      auth: '3e7756c85df54b78f934a284c11abe4e',
      method: 'search',
      term: text
    }))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if(json.total_match == 0) return m.reply(`Tidak dapat menemukan \"${text}\"!`)
    let img = json.wallpapers[Math.floor(Math.random() * json.wallpapers.length)]
    await conn.sendFile(m.chat, img.url_image, "walp.jpg", `Nih kak, Wallpapernya udah terkirim`, m, 0, { thumbnail: Buffer.alloc(0) })
}

if (command == 'unsplash') {
     let res = await fetch(`https://api.lolhuman.xyz/api/unsplash?apikey=9b817532fadff8fc7cb86862&query=${text}`)
    let json = await res.json()
    let img = json.result
    let im = img.getRandom()
    await conn.sendFile(m.chat, im, "walp.jpg", `Nih kak, Wallpapernya udah terkirim`, m, 0, { thumbnail: Buffer.alloc(0) })
}

if (command == 'wall3') {
     let res = await fetch(`https://api.lolhuman.xyz/api/wallpaper3?apikey=9b817532fadff8fc7cb86862&query=${text}`)
    let json = await res.json()
    let img = json.result
    let im = img.getRandom()
    await conn.sendFile(m.chat, im, "walp.jpg", `Nih kak, Wallpapernya udah terkirim`, m, 0, { thumbnail: Buffer.alloc(0) })
}

if (command == 'wall2') {
     let res = await fetch(`https://api.lolhuman.xyz/api/wallpaper2?apikey=9b817532fadff8fc7cb86862&query=${text}`)
    let json = await res.json()
    let img = json.result
    await conn.sendFile(m.chat, img, "walp.jpg", `Nih kak, Wallpapernya udah terkirim`, m, 0, { thumbnail: Buffer.alloc(0) })
}

if (command == 'wall') {
     let res = await fetch(`https://api.lolhuman.xyz/api/wallpaper?apikey=9b817532fadff8fc7cb86862&query=${text}`)
    let json = await res.json()
    let img = json.result
    await conn.sendFile(m.chat, img, "walp.jpg", `Nih kak, Wallpapernya udah terkirim`, m, 0, { thumbnail: Buffer.alloc(0) })
}


  }
handler.command = handler.help = ['wall', 'wall2', 'wall3', 'unsplash', 'walls']
handler.tags = ['Wallpaper']

export default handler
