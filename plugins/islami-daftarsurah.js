import fetch from 'node-fetch'
let handler = async (m, { usedPrefix, command }) => {
        let res = await fetch('https://api.lolhuman.xyz/api/quran?apikey=9b817532fadff8fc7cb86862')
        let json = await res.json()
        let list_id = json.result.map((v, i) => `${i + 1}. ${json.result}`).join('\n')

        contoh = `contoh:\n*${usedPrefix}surah An-Nisaa 1*\n*${usedPrefix}ayta An-Nisaa 1*\n*${usedPrefix}tafsir An-Nisaa 1*\n*${usedPrefix}alquran 1 1*\n\nharus sesuai yang ada pada daftar surah dibawah ini, dan 1 aja ayatnya\n\n`
        m.reply(contoh + '\n\n' + list_id)

}
handler.help = ['daftarsurah']
handler.tags = ['islam']
handler.command = /^((list|daftar)sura(t|h))$/i
export default handler