
import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    
  if (command == 'ramalnasib') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} 12|08|2000`)
  
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  let text3 = urut[2]
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/ramalnasib?tanggal=${text1}&bulan=${text2}&tahun=${text3}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Analisa:*\n${has.analisa}
  \n*Sifat:*\n${has.sifat}
  \n*Elemen:*\n${has.element}
  \n*Catatan:*\n${has.catatan}`, author, null, [
                ['ramaljadian', `${usedPrefix}ramaljadian ${text1}|${text2}|${text3}`]
            ], m)
          }
   if (command == 'ramaljadian') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} 12|08|2000`)
  
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  let text3 = urut[2]
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/ramalanjadian?tanggal=${text1}&bulan=${text2}&tahun=${text3}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Tanggal:*\n${has.tanggal}
  \n*Karakter:*\n${has.karakteristik}
  \n*Catatan:*\n${has.catatan}`, author, null, [
                ['ramalnasib', `${usedPrefix}ramalnasib ${text1}|${text2}|${text3}`]
            ], m)
          }
          if (command == 'ramaljodoh') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} Aku|12|08|2000|Ayang|12|08|2000`)
  
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  let text3 = urut[2]
  let text4 = urut[3]
  let text5 = urut[4]
  let text6 = urut[5]
  let text7 = urut[6]
  let text8 = urut[7]
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/ramalanjodoh?nama1=${text1}&tgl=${text2}&bln=${text3}&thn=${text4}&nama2=${text5}&tgl2=${text6}&bln2=${text7}&thn2=${text8}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Nama Aku:*\n${has.nama_anda.nama}
  \n*Tgl lahir:*\n${has.nama_anda.tgl_lahir}
  \n*Nama Ayang:*\n${has.nama_pasangan.nama}
  \n*Tgl lahir:*\n${has.nama_pasangan.tgl_lahir}
  \n*Hasil Ramalan:*\n${has.result}
  \n*Catatan:*\n${has.catatan}`, author, null, [
                ['ramaljodohbali', `${usedPrefix}ramaljodohbali ${text1}|${text2}|${text3}|${text4}|${text5}|${text6}|${text7}|${text8}`]
            ], m)
          }
          if (command == 'ramaljodohbali') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} Aku|12|08|2000|Ayang|12|08|2000`)
  
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  let text3 = urut[2]
  let text4 = urut[3]
  let text5 = urut[4]
  let text6 = urut[5]
  let text7 = urut[6]
  let text8 = urut[7]
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/ramalanjodohbali?nama1=${text1}&tgl=${text2}&bln=${text3}&thn=${text4}&nama2=${text5}&tgl2=${text6}&bln2=${text7}&thn2=${text8}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Nama Aku:*\n${has.nama_anda.nama}
  \n*Tgl lahir:*\n${has.nama_anda.tgl_lahir}
  \n*Nama Ayang:*\n${has.nama_pasangan.nama}
  \n*Tgl lahir:*\n${has.nama_pasangan.tgl_lahir}
  \n*Hasil Ramalan:*\n${has.result}
  \n*Catatan:*\n${has.catatan}`, author, null, [
                ['ramaljodoh', `${usedPrefix}ramaljodoh ${text1}|${text2}|${text3}|${text4}|${text5}|${text6}|${text7}|${text8}`]
            ], m)
          }
          if (command == 'suamistri') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} Aku|12|08|2000|Ayang|12|08|2000`)
  
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  let text3 = urut[2]
  let text4 = urut[3]
  let text5 = urut[4]
  let text6 = urut[5]
  let text7 = urut[6]
  let text8 = urut[7]
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/suamistri?nama1=${text1}&tgl=${text2}&bln=${text3}&thn=${text4}&nama2=${text5}&tgl2=${text6}&bln2=${text7}&thn2=${text8}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Nama Aku:*\n${has.suami.nama}
  \n*Tgl lahir:*\n${has.suami.tgl_lahir}
  \n*Nama Ayang:*\n${has.istri.nama}
  \n*Tgl lahir:*\n${has.istri.tgl_lahir}
  \n*Hasil Ramalan:*\n${has.result}
  \n*Catatan:*\n${has.catatan}`, author, null, [
                ['ramalcinta', `${usedPrefix}ramalcinta ${text1}|${text2}|${text3}|${text4}|${text5}|${text6}|${text7}|${text8}`]
            ], m)
          }
          if (command == 'ramalcinta') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} Aku|12|08|2000|Ayang|12|08|2000`)
  
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  let text3 = urut[2]
  let text4 = urut[3]
  let text5 = urut[4]
  let text6 = urut[5]
  let text7 = urut[6]
  let text8 = urut[7]
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/ramalancinta?nama1=${text1}&tgl=${text2}&bln=${text3}&thn=${text4}&nama2=${text5}&tgl2=${text6}&bln2=${text7}&thn2=${text8}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Nama Aku:*\n${has.nama_anda.nama}
  \n*Tgl lahir:*\n${has.nama_anda.tgl_lahir}
  \n*Nama Ayang:*\n${has.nama_pasangan.nama}
  \n*Tgl lahir:*\n${has.nama_pasangan.tgl_lahir}
  \n*Positif:*\n${has.sisi_positif}
  \n*Negatif:*\n${has.sisi_negatif}
  \n*Catatan:*\n${has.catatan}`, author, null, [
                ['suamistri', `${usedPrefix}suamistri ${text1}|${text2}|${text3}|${text4}|${text5}|${text6}|${text7}|${text8}`]
            ], m)
          }
          if (command == 'ceknama') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} Nama|12|08|2000`)
  
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  let text3 = urut[2]
  let text4 = urut[3]
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/kecocokannama?nama=${text1}&tanggal=${text2}&bulan=${text3}&tahun=${text4}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Nama:*\n${has.nama}
  \n*Tgl lahir:*\n${has.tgl_lahir}
  \n*Jalan hidup:*\n${has.life_path}
  \n*Takdir:*\n${has.destiny}
  \n*Keinginan takdir:*\n${has.destiny_desire}
  \n*Kepribadian:*\n${has.personality}
  \n*Persentase kecocokan:*\n${has.persentase_kecocokan}
  \n*Catatan:*\n${has.catatan}`, author, null, [
                ['ramalanjadian', `${usedPrefix}ramalanjadian ${text1}|${text2}|${text3}`]
            ], m)
          }
   if (command == 'penyakit') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} 12|08|2000`)
  
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  let text3 = urut[2]
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/potensipenyakit?tanggal=${text1}&bulan=${text2}&tahun=${text3}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Analisa:*\n${has.analisa}
  \n*Sifat:*\n${has.sektor}
  \n*Elemen:*\n${has.elemen}
  \n*Catatan:*\n${has.catatan}`, author, null, [
                ['harinaas', `${usedPrefix}harinaas ${text1}|${text2}|${text3}`]
            ], m)
            }
            if (command == 'harinaas') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} 12|08|2000`)
  
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  let text3 = urut[2]
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/harinaas?tanggal=${text1}&bulan=${text2}&tahun=${text3}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Hari Lahir:*\n${has.hari_lahir}
  \n*Tgl:*\n${has.tgl_lahir}
  \n*Hari:*\n${has.hari_naas}
  \n*Info:*\n${has.info}
  \n*Catatan:*\n${has.catatan}`, author, null, [
                ['arahrejeki', `${usedPrefix}arahrejeki ${text1}|${text2}|${text3}`]
            ], m)
            }
            if (command == 'arahrejeki') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} 12|08|2000`)
  
  let urut = text.split`|`
  let text1 = urut[0]
  let text2 = urut[1]
  let text3 = urut[2]
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/arahrejeki?tanggal=${text1}&bulan=${text2}&tahun=${text3}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Hari Lahir:*\n${has.hari_lahir}
  \n*Tgl:*\n${has.tgl_lahir}
  \n*Arah:*\n${has.arah_rejeki}
  \n*Catatan:*\n${has.catatan}`, author, null, [
                ['ramalnasib', `${usedPrefix}ramalnasib ${text1}|${text2}|${text3}`]
            ], m)
            }
            if (command == 'zodiak') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} leo`)
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/zodiac?zodiak=${text}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Hari Lahir:*\n${has.zodiak}
  \n*Nomor:*\n${has.nomor_keberuntungan}
  \n*Aroma:*\n${has.aroma_keberuntungan}
  \n*Planet:*\n${has.planet_yang_mengitari}
  \n*Bunga:*\n${has.bunga_keberuntungan}
  \n*Warna:*\n${has.warna_keberuntungan}
  \n*Batu:*\n${has.batu_keberuntungan}
  \n*Elemen:*\n${has.elemen_keberuntungan}
  \n*Pasangan:*\n${has.pasangan_zodiak}
  \n*Catatan:*\n${has.catatan}`, author, null, [
                ['menu', `${usedPrefix}menu`]
            ], m)
            }
            if (command == 'shio') {
  if (!text) return m.reply(`Example : ${usedPrefix + command} ayam`)
  
  let res = await fetch(`https://rest-beni.herokuapp.com/api/shio?shio=${text}`)
  let sul = await res.json()
  let has = sul.result.message
  
  await conn.sendButton(m.chat, `*Shio:*\n${has}`, author, null, [
                ['menu', `${usedPrefix}menu`]
            ], m)
            }
}
//lo mau apa??
handler.command = handler.help = ['arahrejeki', 'ceknama', 'harinaas', 'penyakit', 'ramalcinta', 'ramaljadian', 'ramaljodoh', 'ramaljodohbali', 'ramalnasib', 'shio', 'suamistri', 'zodiak']
handler.tags = ['primbon']
export default handler
