let handler = async(m, { conn, text, args, usedPrefix, command }) => {
let fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

  if (!args[0]) return m.reply(`Example : ${usedPrefix + command} bevel helo
  *List Efek:*
3dglowing
3dnature
3dwoodenblack
bevel
birthdaycake
burnpaper
butterfly
camuflage
candy
coffee-heartcup
coffee
crispchrome
embroiderytext
flaming
flowertext
flowertypo
funnycup
fur
gerbang
glowrainbow
gradientavatar
graffititext
grenleaves
harrypotter
illuminated-metallic
lovemessage
luxuryroyal
metalicglow
modernmetal
multimaterial
nature3d
neonlight
orchids-flower
partyneon
quotesgrass
rainbowbg
rainbowshine
romance
romantic-doubleheart
silk
smoketype-effect
smoketypography
stars
striking3d
summertext
sweetcandy
typography
underquotes
underwaterocean
underwebmatrix
vintage
watermelon
whitecube
wolfmetal
woodblock
woodenboard
woodheart
yellowroses`)
  
  let thm = args[0]
  let text1 = args.slice(1).join(' ')
  
        let images = `https://violetics.pw/api/photooxy/${thm}?apikey=beta&text=${text1}`
        let caption = `*⎔┉━「 ${command} 」━┉⎔*
🤠 *Query* : ${thm}`
  await conn.sendButton(m.chat, caption, wm, images, [
                ['Next', `${usedPrefix + command}`],
                ['Menu', `${usedPrefix}menu`]
            ], m, fdoc)
            }

handler.command = /^(oxyx|photooxyx)$/i

export default handler