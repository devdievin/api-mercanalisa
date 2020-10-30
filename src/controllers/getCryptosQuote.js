const rp = require('request-promise');
const cheerio = require('cheerio');
const dotenv = require('dotenv');
const validate = require('../helpers/validate');

dotenv.config({ path: './src/config/.env' });

// Main cryptocurrency array
let cryptos = [];

const INTERVAL = 1;
const options = {
    uri: process.env.URI_CRYPTO_QUOTE,
    transform: function (body) {
        return cheerio.load(body);
    }
};

function loadData() {
    rp(options)
        .then($ => {
            cryptos.length = 0;

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

            // console.log(arrData.length);

            // HERE IS THE SECOND ARRAY THAT CAPTURES ONLY CRYPTOCURRENCIES PRICES
            let arrPrices = [];
            $('table > tbody > tr > td:nth-child(4)').each((i, item) => {
                let price = $(item).find('a.cmc-link').text();
                if (validate.validateData(price)) {
                    price = price.replace('$', '').replace(',', '');
                    arrPrices.push(price);
                }
            });

            // console.log(arrPrices.length);

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

const readData = setInterval(loadData, (INTERVAL * 60 * 1000));

// clearInterval(readData);

exports.cryptos = cryptos;