import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hani/i.test(m.quoted.text) || /.*hani/i.test(m.text))
        return !0
    this.tebakanime = this.tebakanime ? this.tebakanime : {}
    if (!(id in this.tebakanime))
        return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, null, buttontebakanime, m)
    if (m.quoted.id == this.tebakanime[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakanime[id][3])
            delete this.tebakanime[id]
            return conn.sendButton(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakanime, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakanime[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakanime[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebakanime[id][2]} XP`, author, null, buttontebakanime, m)
            clearTimeout(this.tebakanime[id][3])
            delete this.tebakanime[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButton(m.chat, `*Salah!*`, author, null, [
                ['Hint', '/hani'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttontebakanime = [
    ['tebakanime', '/tebakanime']
]
