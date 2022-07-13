import fetch from 'node-fetch'

let handler = async (m, { args, text, usedPrefix, command }) => {
if (!text) throw `Contoh:
${usedPrefix + command} gustixa`

if (command == 'cnn') {
    let src = await (await fetch(`https://anabotofc.herokuapp.com/api/info/cnn?apikey=AnaBot`)).json()
    let xxx = src.result
    let xs = xxx.judul
    let xa = xxx.link
    let xt = xxx.thumb
    
    let caption = `
Judul : *${xs}*
Link : ${xa}
Img : ${xt}
`.trim()
 let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix}gempa`, buttonText: {displayText: 'Gempa'}, type: 1},
                    {buttonId: `${usedPrefix}covidworld`, buttonText: {displayText: 'COVID'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: xt },
                    caption: caption,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
if (command == 'covidindo') {
    let src = await (await fetch(`https://anabotofc.herokuapp.com/api/info/covidindo?apikey=AnaBot`)).json()
    let xxx = src.result
    let xs = xxx.update
    let xa = xxx.kasus
    let xt = xxx.kematian
    let xm = xxx.sembuh
    
    let caption = `*COVID INDO*
Tanggal : *${xs}*
Kasus : ${xa}
Meninggoy : ${xt}
Sembuh : ${xm}
`.trim()
 await conn.sendButton(m.chat, caption, wm, '🔙 Menu', '.menu', m)
}
if (command == 'covidworld') {
    let src = await (await fetch(`https://anabotofc.herokuapp.com/api/info/covidworld?apikey=AnaBot`)).json()
    let xxx = src.result
    let xs = xxx.lastUpdate
    let xa = xxx.totalCases
    let pa = xxx.activeCases
    let xt = xxx.deaths
    let xm = xxx.recovered
    
    let caption = `*COVID WORLD*
Tanggal : *${xs}*
Kasus : ${xa}
Kasus aktif : ${pa}
Meninggoy : ${xt}
Sembuh : ${xm}
`.trim()
 await conn.sendButton(m.chat, caption, wm, '🔙 Menu', '.menu', m)
}
if (command == 'gempa') {
    let src = await (await fetch(`https://anabotofc.herokuapp.com/api/info/gempa?apikey=AnaBot`)).json()
    let xxx = src.result
    let xs = xxx.waktu
    let xa = xxx.mag
    let pa = xxx.kedal
    let xt = xxx.lok
    let xm = xxx.pus
    let im = xxx.desc
    let thumb = xxx.thumb
    
    let caption = `*COVID WORLD*
Tanggal : *${xs}*
Kasus : ${xa}
Kasus aktif : ${pa}
Meninggoy : ${xt}
Sembuh : ${xm}
`.trim()
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix}cnn`, buttonText: {displayText: 'CNN'}, type: 1},
                    {buttonId: `${usedPrefix}covidindo`, buttonText: {displayText: 'COVID'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: thumb },
                    caption: caption,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
if (command == 'hoax') {
    let src = await (await fetch(`https://anabotofc.herokuapp.com/api/info/hoax?apikey=AnaBot`)).json()
    let xxx = src.result
    let xs = xxx.judul
    let xa = xxx.link
    let pa = xxx.desc
    let xt = xxx.aut
    let thumb = xxx.thumb
    
    let caption = `*HOWAK*
Judul : *${xs}*
Link : ${xa}
Desc : ${pa}
Aut : ${xt}
`.trim()
        let buttons = [
                    {buttonId: `.menu`, buttonText: {displayText: '🔙 Menu'}, type: 1},
                    {buttonId: `${usedPrefix}cnn`, buttonText: {displayText: 'CNN'}, type: 1},
                    {buttonId: `${usedPrefix}gempa`, buttonText: {displayText: 'Gempa'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: thumb },
                    caption: caption,
                    footer: conn.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
if (command == 'randomcerpen') {
    let src = await (await fetch(`https://anabotofc.herokuapp.com/api/info/randomcerpen?apikey=AnaBot`)).json()
    let xxx = src.result
    let xs = xxx.judul
    let xa = xxx.kar
    let pa = xxx.kat
    let xt = xxx.text
    
    let caption = `*CERPEN*
Judul : *${xs}*
Karangan : ${xa}
Jenis : ${pa}
Cerpen : ${xt}
`.trim()
        await conn.sendButton(m.chat, caption, wm, '🔙 Menu', '.menu', m)
}
if (command == 'renungan') {
    let src = await (await fetch(`https://anabotofc.herokuapp.com/api/info/renungan?apikey=AnaBot`)).json()
    let xxx = src.result
    let xs = xxx.judul
    let xa = xxx.rilis
    let pa = xxx.penulis
    let lo = xxx.link
    let xt = xxx.isi
    
    let caption = `*Renungan*
Judul : *${xs}*
Rilis : ${xa}
Penulis : ${pa}
Url : ${lo}
Isi : ${xt}
`.trim()
await conn.sendButton(m.chat, caption, wm, '🔙 Menu', '.menu', m)
}
}
handler.command = handler.help = ['cnn', 'covidindo', 'covidworld', 'gempa', 'hoax', 'randomcerpen', 'renungan']
handler.tags = ['edukasi']
export default handler

export default handler