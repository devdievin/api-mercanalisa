const rp = require('request-promise');
const cheerio = require('cheerio');
const dotenv = require('dotenv');
const validate = require('../helpers/validate');
const cryptosLibrary = require('../helpers/cryptosLibrary');

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

            // HERE IS THE PART WHERE THE NAME OF THE CRYPTOCURRENCIES ARE CAPTURED, AND THESE DATA ARE
            // STORED IN A TEMPORARY ARRAY
            let arrNames = [];
            $('table > tbody > tr > td:nth-child(1)').each((i, item) => {
                let name = $(item).find('a.tv-screener__symbol').text();
                if (validate.validateData(name)) {
                    arrNames.push(name);
                }
            });

            // HERE IS THE SECOND ARRAY THAT CAPTURES ONLY CRYPTOCURRENCIES PRICES
            let arrPrices = [];
            $('table > tbody > tr > td:nth-child(4)').each((i, item) => {
                let price = $(item).text();
                if (validate.validateData(price)) {
                    arrPrices.push(price);
                }
            });

            // HERE A CHECK OF THE 2 AUXILIARY ARRAYS IS MADE, ASSEMBLING AN OBJECT AND ADDING IT
            // IN THE MAIN ARRAY
            if (arrNames.length === arrPrices.length) {
                for (let i = 0; i < arrNames.length; i++) {
                    let symbol_found;
                    let obj = cryptosLibrary.CRYPTOS.find(crypto => crypto.name == arrNames[i]);
                    if (obj) {
                        symbol_found = obj.symbol;
                    } else {
                        symbol_found = 'undefined';
                    }

                    let crypto = {
                        position: (i + 1),
                        name: arrNames[i],
                        symbol: symbol_found,
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