const axios = require('axios');
const cheerio = require('cheerio');
const dotenv = require('dotenv');
const { validateData } = require('../helpers/validate');
const cryptosLibrary = require('../helpers/cryptosLibrary');

dotenv.config({ path: "./src/config/.env" });

const getCryptosData = async () => {
    try {
        const response = await axios.get(process.env.URI_CRYPTO_QUOTE);
        const $ = cheerio.load(response.data);

        // HERE IS THE PART WHERE THE NAME OF THE CRYPTOCURRENCIES ARE CAPTURED, AND THESE DATA ARE
        // STORED IN A TEMPORARY ARRAY
        let arrNames = [];
        $('table > tbody > tr > td:nth-child(1)').each((i, item) => {
            let name = $(item).find('a.tv-screener__symbol').text();
            if (validateData(name)) {
                arrNames.push(name);
            }
        });

        // HERE IS THE SECOND ARRAY THAT CAPTURES ONLY CRYPTOCURRENCIES PRICES
        let arrPrices = [];
        $('table > tbody > tr > td:nth-child(4)').each((i, item) => {
            let price = $(item).text();
            if (validateData(price)) {
                arrPrices.push(price);
            }
        });

        // HERE A CHECK OF THE 2 AUXILIARY ARRAYS IS MADE, ASSEMBLING AN OBJECT AND ADDING IT
        // IN THE MAIN ARRAY
        let cryptos = [];
        if (arrNames.length === arrPrices.length) {
            for (let i = 0; i < arrNames.length; i++) {
                let obj = cryptosLibrary.CRYPTOS.find(crypto => crypto.name == arrNames[i]);
                let symbol_found = (obj) ? obj.symbol : 'undefined';

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
        return cryptos;
    } catch (error) {
        console.error("Error:", error);
    }
}

module.exports = { getCryptosData };