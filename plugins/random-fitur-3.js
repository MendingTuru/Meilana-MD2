import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {

if (command == 'robohash') {
if (!text) throw `Gunakan contoh ${usedPrefix + command} Robot`
    let stiker = await sticker(null, global.API(`https://robohash.org/${text}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
}

if (command == 'mentahan') {
let res = await fetch(`https://api.imgflip.com/get_memes`)
  let sul = await res.json()
  let xx = sul.data.memes
  let x = xx.getRandom()
  await conn.sendButton(m.chat, `*Name:* ${x.name}
  *Id:* ${x.id}
  *Box:* ${x.box_count}
  *Height:* ${x.height}
  *Width:* ${x.width}`, author, x.url, [
                ['Next', `${usedPrefix + command}`]
            ], m)
}

if (command == 'mim') {
if (!text) throw `Gunakan contoh ${usedPrefix + command} hello|helo`
let urut = text.split`|`
  let teksnya = urut[0]
  let teksnya2 = urut[1]
	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "10 Guy", rowId: usedPrefix + 'memaker 101440|' + teksnya + '|' + teksnya2},
{title: "Aaaaand Its Gone", rowId: usedPrefix + 'memaker 766986|' + teksnya + '|' + teksnya2},
{title: "Always Has Been", rowId: usedPrefix + 'memaker 252600902|' + teksnya + '|' + teksnya2},
{title: "American Chopper Argument", rowId: usedPrefix + 'memaker 134797956|' + teksnya + '|' + teksnya2},
{title: "Am I The Only One Around Here", rowId: usedPrefix + 'memaker 259680|' + teksnya + '|' + teksnya2},
{title: "Ancient Aliens", rowId: usedPrefix + 'memaker 101470|' + teksnya + '|' + teksnya2},
{title: "Back In My Day", rowId: usedPrefix + 'memaker 718432|' + teksnya + '|' + teksnya2},
{title: "Bad Luck Brian", rowId: usedPrefix + 'memaker 61585|' + teksnya + '|' + teksnya2},
{title: "Bad Pun Dog", rowId: usedPrefix + 'memaker 12403754|' + teksnya + '|' + teksnya2},
{title: "Batman Slapping Robin", rowId: usedPrefix + 'memaker 438680|' + teksnya + '|' + teksnya2},
{title: "Be Like Bill", rowId: usedPrefix + 'memaker 56225174|' + teksnya + '|' + teksnya2},
{title: "Bernie I Am Once Again Asking For Your Support", rowId: usedPrefix + 'memaker 222403160|' + teksnya + '|' + teksnya2},
{title: "Bike Fall", rowId: usedPrefix + 'memaker 79132341|' + teksnya + '|' + teksnya2},
{title: "Black Girl Wat", rowId: usedPrefix + 'memaker 14230520|' + teksnya + '|' + teksnya2},
{title: "Blank Nut Button", rowId: usedPrefix + 'memaker 119139145|' + teksnya + '|' + teksnya2},
{title: "Boardroom Meeting Suggestion", rowId: usedPrefix + 'memaker 1035805|' + teksnya + '|' + teksnya2},
{title: "Brace Yourselves X is Coming", rowId: usedPrefix + 'memaker 61546|' + teksnya + '|' + teksnya2},
{title: "Buff Doge vs Cheems", rowId: usedPrefix + 'memaker 247375501|' + teksnya + '|' + teksnya2},
{title: "But Thats None Of My Business", rowId: usedPrefix + 'memaker 16464531|' + teksnya + '|' + teksnya2},
{title: "Captain Picard Facepalm", rowId: usedPrefix + 'memaker 1509839|' + teksnya + '|' + teksnya2},
{title: "Change My Mind", rowId: usedPrefix + 'memaker 129242436|' + teksnya + '|' + teksnya2},
{title: "Clown Applying Makeup", rowId: usedPrefix + 'memaker 195515965|' + teksnya + '|' + teksnya2},
{title: "Confession Bear", rowId: usedPrefix + 'memaker 100955|' + teksnya + '|' + teksnya2},
{title: "Creepy Condescending Wonka", rowId: usedPrefix + 'memaker 61582|' + teksnya + '|' + teksnya2},
{title: "Disaster Girl", rowId: usedPrefix + 'memaker 97984|' + teksnya + '|' + teksnya2},
{title: "Distracted Boyfriend", rowId: usedPrefix + 'memaker 112126428|' + teksnya + '|' + teksnya2},
{title: "Doge", rowId: usedPrefix + 'memaker 8072285|' + teksnya + '|' + teksnya2},
{title: "Dont You Squidward", rowId: usedPrefix + 'memaker 101511|' + teksnya + '|' + teksnya2},
{title: "Drake Hotline Bling", rowId: usedPrefix + 'memaker 181913649|' + teksnya + '|' + teksnya2},
{title: "Dr Evil Laser", rowId: usedPrefix + 'memaker 40945639|' + teksnya + '|' + teksnya2},
{title: "Epic Handshake", rowId: usedPrefix + 'memaker 135256802|' + teksnya + '|' + teksnya2},
{title: "Evil Kermit", rowId: usedPrefix + 'memaker 84341851|' + teksnya + '|' + teksnya2},
{title: "Evil Toddler", rowId: usedPrefix + 'memaker 235589|' + teksnya + '|' + teksnya2},
{title: "Expanding Brain", rowId: usedPrefix + 'memaker 93895088|' + teksnya + '|' + teksnya2},
{title: "Face You Make Robert Downey Jr", rowId: usedPrefix + 'memaker 9440985|' + teksnya + '|' + teksnya2},
{title: "Finding Neverland", rowId: usedPrefix + 'memaker 6235864|' + teksnya + '|' + teksnya2},
{title: "First World Problems", rowId: usedPrefix + 'memaker 61539|' + teksnya + '|' + teksnya2},
{title: "Futurama Fry", rowId: usedPrefix + 'memaker 61520|' + teksnya + '|' + teksnya2},
{title: "Grandma Finds The Internet", rowId: usedPrefix + 'memaker 61556|' + teksnya + '|' + teksnya2},
{title: "Grumpy Cat", rowId: usedPrefix + 'memaker 405658|' + teksnya + '|' + teksnya2},
{title: "Grus Plan", rowId: usedPrefix + 'memaker 131940431|' + teksnya + '|' + teksnya2},
{title: "Guy Holding Cardboard Sign", rowId: usedPrefix + 'memaker 216951317|' + teksnya + '|' + teksnya2},
{title: "Hard To Swallow Pills", rowId: usedPrefix + 'memaker 132769734|' + teksnya + '|' + teksnya2},
{title: "Hide the Pain Harold", rowId: usedPrefix + 'memaker 27813981|' + teksnya + '|' + teksnya2},
{title: "I Bet Hes Thinking About Other Women", rowId: usedPrefix + 'memaker 110163934|' + teksnya + '|' + teksnya2},
{title: "Ill Just Wait Here", rowId: usedPrefix + 'memaker 109765|' + teksnya + '|' + teksnya2},
{title: "Imagination Spongebob", rowId: usedPrefix + 'memaker 163573|' + teksnya + '|' + teksnya2},
{title: "Inhaling Seagull", rowId: usedPrefix + 'memaker 114585149|' + teksnya + '|' + teksnya2},
{title: "Is This A Pigeon", rowId: usedPrefix + 'memaker 100777631|' + teksnya + '|' + teksnya2},
{title: "Jack Sparrow Being Chased", rowId: usedPrefix + 'memaker 460541|' + teksnya + '|' + teksnya2},
{title: "Laughing Leo", rowId: usedPrefix + 'memaker 259237855|' + teksnya + '|' + teksnya2},
{title: "Laughing Men In Suits", rowId: usedPrefix + 'memaker 922147|' + teksnya + '|' + teksnya2},
{title: "Left Exit 12 Off Ramp", rowId: usedPrefix + 'memaker 124822590|' + teksnya + '|' + teksnya2},
{title: "Leonardo Dicaprio Cheers", rowId: usedPrefix + 'memaker 5496396|' + teksnya + '|' + teksnya2},
{title: "Marked Safe From", rowId: usedPrefix + 'memaker 161865971|' + teksnya + '|' + teksnya2},
{title: "Matrix Morpheus", rowId: usedPrefix + 'memaker 100947|' + teksnya + '|' + teksnya2},
{title: "Maury Lie Detector", rowId: usedPrefix + 'memaker 444501|' + teksnya + '|' + teksnya2},
{title: "Mocking Spongebob", rowId: usedPrefix + 'memaker 102156234|' + teksnya + '|' + teksnya2},
{title: "Monkey Puppet", rowId: usedPrefix + 'memaker 148909805|' + teksnya + '|' + teksnya2},
{title: "Mugatu So Hot Right Now", rowId: usedPrefix + 'memaker 21604248|' + teksnya + '|' + teksnya2},
{title: "One Does Not Simply", rowId: usedPrefix + 'memaker 61579|' + teksnya + '|' + teksnya2},
{title: "Oprah You Get A", rowId: usedPrefix + 'memaker 28251713|' + teksnya + '|' + teksnya2},
{title: "Panik Kalm Panik", rowId: usedPrefix + 'memaker 226297822|' + teksnya + '|' + teksnya2},
{title: "Philosoraptor", rowId: usedPrefix + 'memaker 61516|' + teksnya + '|' + teksnya2},
{title: "Picard Wtf", rowId: usedPrefix + 'memaker 245898|' + teksnya + '|' + teksnya2},
{title: "Put It Somewhere Else Patrick", rowId: usedPrefix + 'memaker 61581|' + teksnya + '|' + teksnya2},
{title: "Roll Safe Think About It", rowId: usedPrefix + 'memaker 89370399|' + teksnya + '|' + teksnya2},
{title: "Running Away Balloon", rowId: usedPrefix + 'memaker 131087935|' + teksnya + '|' + teksnya2},
{title: "Sad Pablo Escobar", rowId: usedPrefix + 'memaker 80707627|' + teksnya + '|' + teksnya2},
{title: "See Nobody Cares", rowId: usedPrefix + 'memaker 6531067|' + teksnya + '|' + teksnya2},
{title: "Sleeping Shaq", rowId: usedPrefix + 'memaker 99683372|' + teksnya + '|' + teksnya2},
{title: "Sparta Leonidas", rowId: usedPrefix + 'memaker 195389|' + teksnya + '|' + teksnya2},
{title: "Spongebob Ight Imma Head Out", rowId: usedPrefix + 'memaker 196652226|' + teksnya + '|' + teksnya2},
{title: "Star Wars Yoda", rowId: usedPrefix + 'memaker 14371066|' + teksnya + '|' + teksnya2},
{title: "Success Kid", rowId: usedPrefix + 'memaker 61544|' + teksnya + '|' + teksnya2},
{title: "Surprised Pikachu", rowId: usedPrefix + 'memaker 155067746|' + teksnya + '|' + teksnya2},
{title: "That Would Be Great", rowId: usedPrefix + 'memaker 563423|' + teksnya + '|' + teksnya2},
{title: "The Most Interesting Man In The World", rowId: usedPrefix + 'memaker 61532|' + teksnya + '|' + teksnya2},
{title: "The Rock Driving", rowId: usedPrefix + 'memaker 21735|' + teksnya + '|' + teksnya2},
{title: "The Scroll Of Truth", rowId: usedPrefix + 'memaker 123999232|' + teksnya + '|' + teksnya2},
{title: "Theyre The Same Picture", rowId: usedPrefix + 'memaker 180190441|' + teksnya + '|' + teksnya2},
{title: "Third World Skeptical Kid", rowId: usedPrefix + 'memaker 101288|' + teksnya + '|' + teksnya2},
{title: "Third World Success Kid", rowId: usedPrefix + 'memaker 101287|' + teksnya + '|' + teksnya2},
{title: "This Is Fine", rowId: usedPrefix + 'memaker 55311130|' + teksnya + '|' + teksnya2},
{title: "This Is Where Id Put My Trophy If I Had One", rowId: usedPrefix + 'memaker 3218037|' + teksnya + '|' + teksnya2},
{title: "Too Damn High", rowId: usedPrefix + 'memaker 61580|' + teksnya + '|' + teksnya2},
{title: "Trump Bill Signing", rowId: usedPrefix + 'memaker 91545132|' + teksnya + '|' + teksnya2},
{title: "Tuxedo Winnie The Pooh", rowId: usedPrefix + 'memaker 178591752|' + teksnya + '|' + teksnya2},
{title: "Two Buttons", rowId: usedPrefix + 'memaker 87743020|' + teksnya + '|' + teksnya2},
{title: "UNO Draw 25 Cards", rowId: usedPrefix + 'memaker 217743513|' + teksnya + '|' + teksnya2},
{title: "Unsettled Tom", rowId: usedPrefix + 'memaker 175540452|' + teksnya + '|' + teksnya2},
{title: "Waiting Skeleton", rowId: usedPrefix + 'memaker 4087833|' + teksnya + '|' + teksnya2},
{title: "Who Killed Hannibal", rowId: usedPrefix + 'memaker 135678846|' + teksnya + '|' + teksnya2},
{title: "Who Would Win?", rowId: usedPrefix + 'memaker 101910402|' + teksnya + '|' + teksnya2},
{title: "Woman Yelling At Cat", rowId: usedPrefix + 'memaker 188390779|' + teksnya + '|' + teksnya2},
{title: "X All The Y", rowId: usedPrefix + 'memaker 61533|' + teksnya + '|' + teksnya2},
{title: "X Everywhere", rowId: usedPrefix + 'memaker 91538330|' + teksnya + '|' + teksnya2},
{title: "Yall Got Any More Of That", rowId: usedPrefix + 'memaker 124055727|' + teksnya + '|' + teksnya2},
{title: "Yo Dawg Heard You", rowId: usedPrefix + 'memaker 101716|' + teksnya + '|' + teksnya2},
{title: "Y U No", rowId: usedPrefix + 'memaker 61527|' + teksnya + '|' + teksnya2}
	]
    }
]

const listMessage = {
  text: `⚡ Silakan pilih tema di tombol di bawah...\n*Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ Tema Disini ☂️`,
  sections
}
conn.sendMessage(m.chat, listMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})

}

if (command == 'imgkit') {
if (!text) throw `Gunakan contoh ${usedPrefix + command} kucing`

	const sections = [
    {
	title: "Theme",
	rows: [
	{title: "kucing", rowId: usedPrefix + 'imagekit kucing|' + text},
	{title: "senyum", rowId: usedPrefix + 'imagekit senyum|' + text},
	{title: "monyet", rowId: usedPrefix + 'imagekit monyet|' + text}
	]
    }
]

const listMessage = {
  text: `⚡ Silakan pilih tema di tombol di bawah...\n*Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
  footer: global.wm,
  title: `⎔───「 ${command} 」───⎔`,
  buttonText: `☂️ Tema Disini ☂️`,
  sections
}
conn.sendMessage(m.chat, listMessage, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})
}


}
handler.command = handler.help = ['mentahan', 'mim', 'robohash', 'imgkit']
handler.tags = ['maker']

export default handler