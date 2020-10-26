const rp = require('request-promise');
const cheerio = require('cheerio');
const dotenv = require('dotenv');

dotenv.config({ path: './src/config/.env' });

const INTERVAL = 60;
const options = {
    uri: process.env.URI_QUOTE,
    transform: function (body) {
        return cheerio.load(body);
    }
};

// Main cryptocurrency array
let cryptos = [];

function validateData(data) {
    if (data === '' || data === null || data === undefined) {
        return false;
    }
    return true;
}

function loadData() {
    // console.log(`Reading every ${INTERVAL} second(s).`);
    rp(options)
        .then($ => {
            cryptos.length = 0;
            // cryptos = [];

            // HERE IS THE PART WHERE THE NAME AND SYMBOL OF THE CRYPTOCURRENCIES ARE CAPTURED, AND THESE DATA ARE
            // STORED IN A TEMPORARY ARRAY
            let arrData = [];
            $('.Box-sc-16r8icm-0.CoinItem__NameArea-sc-1teo54s-1.NqdZD').each((i, item) => {
                let data = {
                    name: $(item).find('.Text-sc-1eb5slv-0.iTmTiC').text(),
                    symbol: $(item).find('.Text-sc-1eb5slv-0.eweNDy.coin-item-symbol').text(),
                };
                arrData.push(data);
            });

            // HERE IS THE SECOND ARRAY THAT CAPTURES ONLY CRYPTOCURRENCIES PRICES
            let arrPrices = [];
            $('.rc-table-cell.font_weight_500___2Lmmi > div').each((i, item) => {
                let price = $(item).find('a.cmc-link').text();
                if (validateData(price)) {
                    price = price.replace('$', '').replace(',', '');
                    arrPrices.push(price);
                }
            });

            // HERE A CHECK OF THE 2 AUXILIARY ARRAYS IS MADE, ASSEMBLING AN OBJECT AND ADDING IT
            // IN THE MAIN ARRAY
            if (arrData.length === arrPrices.length) {
                for (let i = 0; i < arrData.length; i++) {
                    let crypto = {
                        position: (i + 1),
                        name: arrData[i].name,
                        symbol: arrData[i].symbol,
                        price: arrPrices[i]
                    }
                    cryptos.push(crypto);
                }
            } else {
                console.error('Arrays with different sizes!');
            }
        })
        .catch(err => console.error(err));
}

loadData();

const readData = setInterval(loadData, (INTERVAL * 1000));

// clearInterval(readData);

module.exports = {

    async getCrypto(req, res) {
        try {
            const symbol = req.params.symbol;
            let result = cryptos.find(crypto => crypto.symbol === symbol);

            if (!validateData(result)) {
                return res.send('Error when looking for cryptocurrency!');
            }
            return res.send(result);
        } catch (err) {
            console.error(err);
        }
    },

}