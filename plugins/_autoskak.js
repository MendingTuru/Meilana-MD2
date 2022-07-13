import fetch from "node-fetch"
import { readFileSync } from "fs"

export async function all(m) {

  //Kalo mau menggokil pake ini
  let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
  let stc = readFileSync('./ynkts.webp')

if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return

    // ketika ditag 
    try {
    let MengSkak = /^(skak|halah|cih|cuih|yaha|erorr|kasian|dek|gajelas|bokep)$/i.test(m.text)
        if (MengSkak && m.isGroup) {
            //Teks Skak
let f = await fetch(`https://leyscoders-api.herokuapp.com/api/skak?apikey=MIMINGANZ`)
let x = await f.json()
return m.reply(x.result)
        }
    } catch (e) {
        return
    }

                                
}
