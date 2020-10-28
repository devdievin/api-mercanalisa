const axios = require('axios').default;
const validate = require('../helpers/validate');
const cryptosQuote = require('./getCryptosQuote');

const INTERVAL = 1;
let USD_QUOTE;

function getUsdQuote() {
    USD_QUOTE = 0;
    axios.get('https://economia.awesomeapi.com.br/all/USD-BRL')
        .then(usd => {
            USD_QUOTE = usd.data.USD.ask;
        })
        .catch(err => console.error(err));
}

const readUsdQuote = setInterval(getUsdQuote, (INTERVAL * 60 * 1000));
getUsdQuote();

module.exports = {

    async getCryptoUSD(req, res) {
        try {
            const symbol = req.params.symbol;
            let crypto = cryptosQuote.cryptos.find(crypto => crypto.symbol === symbol);

            if (!validate.validateData(crypto)) {
                return res.send('Error when looking for cryptocurrency!');
            }

            return res.send(crypto);
        } catch (err) {
            console.error(err);
        }
    },

    async getCryptoBRL(req, res) {
        try {
            const symbol = req.params.symbol;
            let crypto = cryptosQuote.cryptos.find(crypto => crypto.symbol === symbol);

            if (!validate.validateData(crypto)) {
                return res.send('Error when looking for cryptocurrency!');
            }
            
            let price = (crypto.price * USD_QUOTE);
            price = formatDigits(price);

            let result = {
                position: crypto.position,
                name: crypto.name,
                symbol: crypto.symbol,
                price: price
            };
            return res.send(result);
        } catch (err) {
            console.error(err);
        }
    },

}

function formatDigits(value) {
    let digits = 0;
    if (value >= 1) {
        digits = 2;
    } else {
        digits = 6;
    }
    return value.toFixed(digits);
}