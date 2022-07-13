import axios from 'axios'
import cheerio from 'cheerio'
import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Jakarta').locale('id')

function _axios(host) {
    return new Promise(async (resolve, reject) => {
        axios.get(host).then(({ data }) => {
            resolve(data)
        })
    })
}

function sholatAll(kota) {
    return new Promise(async (resolve, reject) => {
        let html = await _axios('https://m.dream.co.id/jadwal-salat/' + kota.replace(/\s/g, '-').toLowerCase())
        $ = cheerio.load(html)
        let data = []
        $('table[class="table-index-jadwal"] > tbody > tr').each(function (i, e) {
            data.push({
                'tanggal': $(e).find('td[data-title="Tanggal"]').text(),
                'subuh': $(e).find('td[data-title="Subuh"]').text(),
                'duha': $(e).find('td[data-title="Duha"]').text(),
                'zuhur': $(e).find('td[data-title="Zuhur"]').text(),
                'ashar': $(e).find('td[data-title="Asar"]').text(),
                'magrib': $(e).find('td[data-title="Magrib"]').text(),
                'isya': $(e).find('td[data-title="Isya"]').text()
            })
        }); resolve({ creator: '@Aine', status: true, data })
    })
}

export {
sholatAll }