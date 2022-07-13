let handler = async (m, { 
conn 
}) => {

    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastgrab)
    let _timers = (10800000 - __timers)
    let timers = clockString(_timers) 
    
    if (user.stamina < 20) return m.reply('Stamina anda tidak cukup untuk bekerja\nharap isi stamina anda dengan _#eat_')
    if (user.lastgrab > 10800000) throw m.reply('Kamu masih kelelahan untuk bekerja\nHarap tunggu ${timers} lagi untuk kerja taxy')

let rndm1 = `${Math.floor(Math.random() * 10)}`
let rndm2 = `${Math.floor(Math.random() * 10)}`
.trim()

let ran1 = (rndm1 * 1000)
let ran2 = (rndm2 * 10) 

hmsil1 = `${ran1}`
hmsil2 = `${ran2}`

jln = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🚕


✔️ Mendapatkan orderan....
`

jln2 = `
🚶🚕⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Mengantar ke tujuan....
`

jln3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🚕⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       


➕ Sampai di tujuan....
`

jln4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🚕⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️ 🚶  


➕ 💹Menerima gaji....
`

hsl = `
*—[ Hasil Taxy ]—*

 ➕ 💹 Uang = [ ${hmsil1} ]
 ➕ ✨ Exp = [ ${hmsil2} ] 		 
 ➕ 📦 Order Selesai = +1

Dan stamina anda berkurang -20
${wm}
`
user.money += ran1
user.exp += ran2
user.stamina -= 20
	
setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${jln4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${jln3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${jln2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${jln}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('🔍Mencari pelanggan 🚕.....')
                     }, 0) 
  user.lastgrab = new Date * 1
}
handler.help = ['taxy']
handler.tags = ['rpg']
handler.command = /^(taxy|taxi|taki|taksi)$/i

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
