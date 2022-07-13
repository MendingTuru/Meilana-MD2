import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let frep = { contextInfo: { externalAdReply: {title: global.wm, body: global.author, sourceUrl: snh, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}
let imgr = flaaa.getRandom()

if (command == 'urlscan') {
if (!text) throw `Masukkan link`
let json = await fetch(`https://urlscan.io/api/v1/search/?q=${text}`)
        let jsons = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        for (let x of jsons.results) {
        caption += `*Result:*\n
*visibility:* ${x.task.visibility}
*method:* ${x.task.method}
*domain:* ${x.task.domain}
*time:* ${x.task.time}
*uuid:* ${x.task.uuid}
*url:* ${x.task.url}
*uniqIPs:* ${x.stats.uniqIPs}
*uniqCountries:* ${x.stats.uniqCountries}
*dataLength:* ${x.stats.dataLength}
*encodedDataLength:* ${x.stats.encodedDataLength}
*country:* ${x.page.country}
*ip:* ${x.page.ip}
*url:* ${x.page.url}
*result:* ${x.result}
  `}
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'fotoduck') {
  let res = await fetch(`https://random-d.uk/api/random`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Duck:*
  ${x.message}`, wm, x.url, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fotobear') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} 600 600`
if (!args[1]) throw `Contoh:\n${usedPrefix + command} 600 600`
  let res = `https://placebear.com/${args[0]}/${args[1]}`
  await conn.sendButton(m.chat, `*Bear:*
  ${args[0]}`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fotodog') {
if (!args[0]) throw `Contoh:\n${usedPrefix + command} 600 600`
if (!args[1]) throw `Contoh:\n${usedPrefix + command} 600 600`
  let res = `https://place.dog/${args[0]}/${args[1]}`
  await conn.sendButton(m.chat, `*Dog:*
  ${args[0]}`, wm, res, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fotodog2') {
  let res = await fetch(`https://random.dog/woof.json`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Dog:*
  ${command}`, wm, x.url, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fotofox') {
  let res = await fetch(`https://randomfox.ca/floof/`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Fox:*
  ${x.link}`, wm, x.image, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'fotoshibe') {
  let res = await fetch(`https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*Shibe:*
  ${command}`, wm, x.getRandom(), [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'drinks') {
  let res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  let x = await res.json()
  await conn.sendButton(m.chat, `*drinks:*\n
  *idDrink:* ${x.drinks[0].idDrink}
  *Drink:* ${x.drinks[0].strDrink}
  *Category:* ${x.drinks[0].strCategory}
  *Glass:* ${x.drinks[0].strGlass}
  *Instructions:* ${x.drinks[0].strInstructions}`, wm, x.drinks[0].strDrinkThumb, [
                ['Next', `${usedPrefix + command}`]
            ], m, fdoc)
}

if (command == 'rules') {
let caption = `▣═━–〈 *RULES BOT* 〉–━═▣
│
┊ DILARANG TOXIC
┊ DILARANG SPAM
┊ DILARANG KIRIM VIRTEX
┊ DILARANG KIRIM 18+ APAPUN ITU
┊ DILARANG TELPON / VC
┊ DILARANG CULIK BOT
┊ DILARANG PROMOSI
┊ BOT TIDAK MENERIMA SAVE KONTAK
┊ KALO MELANGGAR AKAN LANGSUNG DIBAN DAN DI BLOKIR TANPA TOLERANSI SEDIKIT PUN
┊
│⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ 
▣═━–〈 *HINATA MD* 〉–━═▣`
await conn.sendButton(m.chat, caption, wm, `${imgr + command}`, [
                ['Ok!', `${usedPrefix}tts id Oke`]
            ], m, fdoc)
         }
         
if (command == 'repeat') {
if (!args[0]) throw `Cth. .repeat 7|Hai`
let urut = text.split`|`
let string = '\n' + urut[1]
let count = urut[0]
let caption = string.repeat(count);
await conn.reply(m.chat, caption, m, frep)
         }
         
if (command == 'repeat2') {
if (!args[0]) throw `Cth. .repeat2 7|Hai`
let urut = text.split`|`
let caption = '';
let i = 1;
while (i < `${urut[0]}`) {
  caption += '\n' + i + ' ' + `${urut[1]}`;
  i++;
}
await conn.reply(m.chat, caption, m, frep)
         }

if (command == 'dmpsearch') {
if (!text) throw `Masukkan Teks`
let res = await fetch(`https://psbdmp.ws/api/v3/search/${text}`)
let xx = await res.json()
let v = xx.data
  let teks = v.map(v => {
  `
*Result:*\n
*ID:* ${v.id}
*length:* ${v.length}
*time:* ${v.time}
*text:* ${v.text}
      `.trim()
  }).filter(v => v).join('\n\n▣═━–〈 *SEARCH* 〉–━═▣\n\n')
  //m.reply(teks)
  await conn.sendButton(m.chat, teks, wm, imgr + 'Dmp', [
                ['dmpdown!', `${usedPrefix}dmpdown`]
            ], m, fdoc)
}

if (command == 'dmpdown') {
if (!text) throw `Masukkan ID \n*Cth ID:* on0uMeNd`
let json = await fetch(`https://psbdmp.ws/api/v3/dump/${text}?key=6143730c1db586446444f0ec92799891`)
        let x = await json.json()
        let caption = `*⎔┉━「 ${command} 」━┉⎔*\n`
        caption += `*Result:*\n
*ID:* ${x.id}
*length:* ${x.length}
*time:* ${x.date}
*content:* ${x.content}
  `
        await conn.reply(m.chat, caption, m, frep)
}

if (command == 'gacha') {
if (!text) throw `Masukkan ID
${usedPrefix + command} indo

*List*
• ppc
• indo
• korea
• china
• malay
 `
            if (args[0] == 'ppc') {
let jsn = await fetch(`https://ziy.herokuapp.com/api/gacha/ppcouple?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'Cewe', wm, json.result.female, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
conn.sendButton(m.chat, 'Cowo', wm, json.result.male, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
            }
            if (args[0] == 'indo') {
            let json = `https://ziy.herokuapp.com/api/gacha/indonesia?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
            }
            if (args[0] == 'korea') {
            let json = `https://ziy.herokuapp.com/api/gacha/korea?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
            }
            if (args[0] == 'china') {
            let json = `https://ziy.herokuapp.com/api/gacha/china?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
            }
            if (args[0] == 'malay') {
            let json = `https://ziy.herokuapp.com/api/gacha/malaysia?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
            }
}

if (command == 'ziy') {
if (!text) throw `Masukkan ID
${usedPrefix + command} ghea

*List*
• asupan2k
• cecan2k
• ghea
• bocil
• ukty
• asupan
• rika

• girlneko teks|teks
• sadboy teks|teks
• kaneki teks
• rem teks
• lolimaker teks
 `
 
 // Asupan
            if (args[0] == 'asupan2k') {
            let json = `https://ziy.herokuapp.com/api/asupan2k?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
            }
            if (args[0] == 'cecan2k') {
            let json = `https://ziy.herokuapp.com/api/cecan2k?apikey=xZiyy`
        let caption = `*Result:*`
        await conn.sendButton(m.chat, caption, wm, json, [
                ['Next', `${usedPrefix + command} ${args[0]}`]
            ], m, fdoc)
            }
            if (args[0] == 'ghea') {
            let jsn = await fetch(`https://ziy.herokuapp.com/api/asupan/ghea?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'ghea', wm, json.result.url, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
            }
            if (args[0] == 'bocil') {
            let jsn = await fetch(`https://ziy.herokuapp.com/api/asupan/bocil?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'bocil', wm, json.result.url, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
            }
            if (args[0] == 'ukty') {
            let jsn = await fetch(`https://ziy.herokuapp.com/api/asupan/ukty?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'ukty', wm, json.result.url, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
            }
            if (args[0] == 'asupan') {
            let jsn = await fetch(`https://ziy.herokuapp.com/api/asupan?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'asupan', wm, json.result.result, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
            }
            if (args[0] == 'rika') {
            let jsn = await fetch(`https://ziy.herokuapp.com/api/asupan/rikagusriani?apikey=xZiyy`)
let json = await jsn.json()
conn.sendButton(m.chat, 'rikagusriani', wm, json.result.url, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
            }
            
            //Maker
            if (args[0] == 'girlneko') {
            let urut = text.split`|`
  let text1 = urut[1]
  let text2 = urut[2]
            let jsn = `https://ziy.herokuapp.com/api/maker/girlneko?text1=${text1}&text2=${text2}&apikey=xZiyy`
conn.sendButton(m.chat, 'girlneko', wm, jsn, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
            }
            if (args[0] == 'sadboy') {
            let urut = text.split`|`
  let text1 = urut[1]
  let text2 = urut[2]
            let jsn = `https://ziy.herokuapp.com/api/maker/sadboy?text1=${text1}&text2=${text2}&apikey=xZiyy`
conn.sendButton(m.chat, 'sadboy', wm, jsn, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
            }
            if (args[0] == 'kaneki') {
            let jsn = `https://ziy.herokuapp.com/api/maker/kaneki?nama=${text}&apikey=xZiyy`
conn.sendButton(m.chat, 'kaneki', wm, jsn, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
            }
            if (args[0] == 'rem') {
            let jsn = `https://ziy.herokuapp.com/api/maker/rem?nama=${text}&apikey=xZiyy`
conn.sendButton(m.chat, 'rem', wm, jsn, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
            }
            if (args[0] == 'lolimaker') {
            let jsn = `https://ziy.herokuapp.com/api/maker/lolimaker?nama=${text}&apikey=xZiyy`
conn.sendButton(m.chat, 'lolimaker', wm, jsn, [['🔄 Next 🔄', `${usedPrefix + command} ${args[0]}`]], m, fdoc)
            }
}


}
handler.command = handler.help = ['urlscan', 'fotoduck', 'fotobear', 'fotodog', 'fotodog2', 'fotofox', 'fotoshibe', 'drinks', 'rules', 'repeat', 'repeat2', 'dmpsearch', 'dmpdown', 'gacha', 'ziy']
handler.tags = ['random']

export default handler