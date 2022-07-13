let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    
    let jir = flaaa.getRandom()
    let hore = `${pickRandom(['Mancing mania mangtaf', 'Killing spriii', 'Owalahh dapet segini', 'Lain kali gwejh berusaha', 'Okwew..', 'Thanks', 'Dihh..', 'Xixixii..', 'Yaelah dapet segini', 'Hongreewww..', 'Baakaaaa', 'Ara..Ara..'])}`
    let emot = `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`
    
    let cht = global.db.data.users[who]
    cht.fullatm += 100000000000000
    
     // Mampuss
     let ran = Math.floor(Math.random() * 100000000000000)
      
     cht.agility += ran 
     cht.anakanjing += ran 
     cht.anakcentaur += ran 
     cht.anakgriffin += ran 
     cht.anakkucing += ran 
     cht.anakkuda += ran 
     cht.anakkyubi += ran 
     cht.anaknaga += ran 
     cht.anakphonix += ran 
     cht.anakrubah += ran 
     cht.anakserigala += ran 
     cht.anggur += ran 
     cht.anjing += ran 
     cht.apel += ran 
     cht.apel += ran 
     cht.aqua += ran 
     cht.arc += ran 
     cht.arcdurability += ran 
     cht.arlok += ran 
     cht.armor += ran 
     cht.armordurability += ran 
     cht.atm += ran 
     cht.ayam += ran 
     cht.ayamb += ran 
     cht.ayamg += ran 
     cht.babi += ran 
     cht.babihutan += ran 
     cht.bank += ran 
     cht.banteng += ran 
     cht.batu += ran 
     cht.bawal += ran 
     cht.bibitanggur += ran 
     cht.bibitapel += ran 
     cht.bibitjeruk += ran 
     cht.bibitmangga += ran 
     cht.bibitpisang += ran 
     cht.botol += ran 
     cht.bow += ran 
     cht.buaya += ran 
     cht.buntal += ran 
     cht.cat += ran 
     cht.catexp += ran 
     cht.centaur += ran 
     cht.coin += ran 
     cht.common += ran 
     cht.crystal += ran 
     cht.cumi += ran 
     cht.diamond += ran 
     cht.dog += ran 
     cht.dogexp += ran 
     cht.dory += ran 
     cht.emas += ran 
     cht.emas += ran 
     cht.emerald += ran 
     cht.enchant += ran 
     cht.esteh += ran 
     cht.exp += ran 
     cht.fishingrod += ran 
     cht.fishingroddurability += ran 
     cht.fortress += ran 
     cht.fox += ran 
     cht.foxhexp += ran 
     cht.gajah += ran 
     cht.gems += ran 
     cht.glimit += ran 
     cht.glory += ran 
     cht.gold += ran 
     cht.griffin += ran 
     cht.gurita += ran 
     cht.harimau += ran 
     cht.haus += ran 
     cht.healt += ran 
     cht.health += ran 
     cht.healthmonster += ran 
     cht.hiu += ran 
     cht.horse += ran 
     cht.horseexp += ran 
     cht.ikan += ran 
     cht.intelligence += ran 
     cht.iron += ran 
     cht.jeruk += ran 
     cht.kaleng += ran 
     cht.kambing += ran 
     cht.kardus += ran 
     cht.katana += ran 
     cht.katanadurability += ran 
     cht.kayu += ran 
     cht.kayu += ran 
     cht.kepiting += ran 
     cht.kerbau += ran 
     cht.korbanngocok += ran 
     cht.kucing += ran 
     cht.kuda += ran 
     cht.kyubi += ran 
     cht.laper += ran 
     cht.legendary += ran 
     cht.lele += ran 
     cht.leleb += ran 
     cht.leleg += ran 
     cht.level += ran 
     cht.limit += ran 
     cht.lobster += ran 
     cht.lumba += ran 
     cht.magicwand += ran 
     cht.magicwanddurability += ran 
     cht.makanan += ran 
     cht.makanancentaur += ran 
     cht.makanangriffin += ran 
     cht.makanannaga += ran 
     cht.makananpet += ran 
     cht.makananpet += ran 
     cht.makananphonix += ran 
     cht.makananserigala += ran 
     cht.mana += ran 
     cht.mangga += ran 
     cht.money += ran 
     cht.monyet += ran 
     cht.mythic += ran 
     cht.naga += ran 
     cht.net += ran 
     cht.nila += ran 
     cht.ojekk += ran 
     cht.orca += ran 
     cht.pancing += ran 
     cht.panda += ran 
     cht.paus += ran 
     cht.pc += ran 
     cht.pertambangan += ran 
     cht.pertanian += ran 
     cht.pet += ran 
     cht.petFood += ran 
     cht.phonix += ran 
     cht.pickaxe += ran 
     cht.pickaxedurability += ran 
     cht.pisang += ran 
     cht.pointxp += ran 
     cht.potion += ran 
     cht.psenjata += ran 
     cht.psepick += ran 
     cht.ramuan += ran 
     cht.rock += ran 
     cht.roket += ran 
     cht.rubah += ran 
     cht.rumahsakit += ran 
     cht.sampah += ran 
     cht.sapi += ran 
     cht.sapir += ran 
     cht.semangka += ran 
     cht.serigala += ran 
     cht.skillexp += ran 
     cht.ssapi += ran 
     cht.stamina += ran 
     cht.strength += ran 
     cht.string += ran 
     cht.stroberi += ran 
     cht.sword += ran 
     cht.sworddurability += ran 
     cht.tigame += ran 
     cht.tiketcoin += ran 
     cht.title += ran 
     cht.tprem += ran 
     cht.trash += ran 
     cht.trofi += ran 
     cht.troopcamp += ran 
     cht.udang += ran 
     cht.umpan += ran 
     cht.uncommon += ran 
     cht.wallet += ran 
     cht.warn += ran 
     cht.wood += ran 
     
     // Button
    await conn.sendButton(m.chat, `*${hore}* ${emot}
*${cht.exp}* EXP Total
*${cht.limit}* Limit Total
*${cht.money}* Money Total
*${cht.atm}* ATM Total
    
    Ketik *.limit* untuk cek limit`, author, jir + 'Jir Ngechit', [
        ['Nambah', `${usedPrefix + command}`]
    ], m, {quoted: fkontak})
}
handler.help = ['ngechit']
handler.tags = ['xp']
handler.command = /^(ngechit|cheat)$/i
handler.private = true

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }