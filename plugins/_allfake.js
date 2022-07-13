/*
 let ftroli = {quoted: { key: {participant : '0@s.whatsapp.net'}, message: { orderMessage: { itemCount: 2022, status: 1, surface: 1, message: wm, orderTitle: `✗ 𝐂𝐦𝐝: ${command}`, sellerJid: '0@s.whatsapp.net' } } }}
 let fkontak = {quoted: { key: {participant : '0@s.whatsapp.net'}, message: { 'contactMessage': { 'displayName': `✗ 𝐂𝐦𝐝: ${command}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}}
 let fvn = {quoted: { key: {participant : '0@s.whatsapp.net'},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "2022","ptt": "true"} } }}
 let floc = {quoted: { key: { participant : '0@s.whatsapp.net'}, message: { "liveLocationMessage": { "caption": `✗ 𝐂𝐦𝐝: ${command}`,"h": `${name}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}} }}
 let ftoko = {quoted: { key: { participant : '0@s.whatsapp.net'},message: { "productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./thumbnail.jpg')}, "title": `✗ 𝐂𝐦𝐝: ${command}`, "description": `${wm}`, "currencyCode": "USD", "priceAmount1000": "2022", "retailerId": "Ghost", "productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}}
 let fdocs = {quoted: { key : { participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `✗ 𝐂𝐦𝐝: ${command}`,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }}}}
 let fgclink = {quoted: {key: {participant : '0@s.whatsapp.net'},message: {groupInviteMessage: {groupJid: "17608914335-1625305606@g.us",inviteCode: null,groupName: `✗ 𝐂𝐦𝐝: ${command}`,  caption: wm,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }} }}
 let fgif = {quoted: {key: { participant : '0@s.whatsapp.net'}, message: {  "videoMessage": {  "title": `✗ 𝐂𝐦𝐝: ${command}`, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') } } } }
 let frnya = ['ftroli', 'fkontak', 'fvn', 'floc', 'ftoko', 'ftoko', 'fdocs', 'fgclink', 'fgif']
 */
 
 //By Hinata-Md

import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
	let pp = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
        //global.bg = await (await fetch(img)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
		
		// Module 
		global.fetch = import('node-fetch')
		global.bochil = import('@bochilteam/scraper')
		
		const _uptime = process.uptime() * 1000
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await this.getName(owner[0] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'mr.familia13@gmail.com', true],
         [owner[1], await this.getName(owner[1] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'FokusDotId13@gmail.com', true], // Kalo mau di tambah tinggal copy 1baris ini di tempel di bawahnya trs di edit dikit!
        ]
        
		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
		global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		
		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				//isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
                    showAdAttribution: true,
					title: global.ucapan,
					body: "Hallo " + name,
					mediaUrl: sgc,
					description: bottime,
					previewType: "PHOTO",
					thumbnail: await (await fetch(pp)).buffer(),
					sourceUrl: "https://github.com/AyGemuy",					
				}
			}
		}
		global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: "https://Instagram.com/wudysoft.2",
            mediaType: "VIDEO",
            description: "https://Instagram.com/wudysoft.2",
            title: wm,
            body: bottime,
            thumbnailUrl: pp,
            sourceUrl: sgc
    }
    } }
		// Fake 🤥
		global.ftroli = { key: {participant : '0@s.whatsapp.net'}, message: { orderMessage: { itemCount: 2022, status: 1, surface: 1, message: bottime, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: {participant : '0@s.whatsapp.net'}, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
        global.fvn = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
               "audioMessage": {
                        "mimetype":"audio/ogg; codecs=opus",
                        "seconds": "999999999999",
                        "ptt": "true"
                               }
                             } 
                            }
                            global.fvid = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { "videoMessage": { "title":wm, "h": `Hmm`,'seconds': '99999', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
                            }
                            
               
                global.ftextt = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
               "extendedTextMessage": {
                        "text":wm,
                        "title": bottime,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                             } 
                            }
               
                  global.fliveLoc = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "caption": wm,"h": `${bottime}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
               
                  global.fliveLoc2 = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": wm,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
               
                   global.ftoko = {
       key: {
                   participant : '0@s.whatsapp.net'},
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegThumbnail": fs.readFileSync('./thumbnail.jpg') //Gambarnye
                           },
                           "title": wm, //Kasih namalu 
                           "description": bottime, 
                           "currencyCode": "USD",
                           "priceAmount1000": "20000000",
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `0@s.whatsapp.net`
               }
           }
       }
               
                     global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'},
              message: {
                           documentMessage: {
                           title: wm, 
                           jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                                 }
                               }
                             }
               
                    global.fgclink = {
           key: {
               participant : '0@s.whatsapp.net'},
           message: {
               groupInviteMessage: {
                   groupJid: "17608914335-1625305606@g.us",
                   inviteCode: null,
                   groupName: wm, 
                   caption: bottime, 
                   jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
               }
           }
       }
       
                    global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
	}
}

export default handler 

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
