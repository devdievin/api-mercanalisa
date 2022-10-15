const axios = require('axios').default;
const validate = require('../helpers/validate');
const cryptosQuote = require('./getCryptosQuote');

let USD_QUOTE;

function getUsdQuote() {
    USD_QUOTE = 0;
    axios.get('https://economia.awesomeapi.com.br/all/USD-BRL')
        .then(usd => {
            USD_QUOTE = usd.data.USD.ask;
        })
        .catch(err => console.error(err));
}

getUsdQuote();
const readUsdQuote = setInterval(getUsdQuote, (process.env.INTERVAL * 60 * 1000));

module.exports = {

    async getCryptoUSD(req, res) {
        try {
            const { symbol } = req.params;
            let crypto = cryptosQuote.cryptos.find(crypto => crypto.symbol === symbol.toUpperCase());

            if (!validate.validateData(crypto)) {
                return res.send({ status: "ERROR", message: "Error when looking for cryptocurrency!" });
            }

            let result = {
                position: crypto.position,
                name: crypto.name,
                symbol: crypto.symbol,
                price: crypto.price,
                currency: "USD",
                timestamp: getCurrentDate()
            };

            return res.send(result);
        } catch (err) {
            console.error(err);
        }
    },

    async getCryptoBRL(req, res) {
        try {
            const { symbol } = req.params;
            let crypto = cryptosQuote.cryptos.find(crypto => crypto.symbol === symbol.toUpperCase());

            if (!validate.validateData(crypto)) {
                return res.send({ status: "ERROR", message: "Error when looking for cryptocurrency!" });
            }

            let price = (crypto.price * USD_QUOTE);
            price = formatDigits(price);

            let result = {
                position: crypto.position,
                name: crypto.name,
                symbol: crypto.symbol,
                price: price,
                currency: "BRL",
                timestamp: getCurrentDate()
            };
            return res.send(result);
        } catch (err) {
            console.error(err);
        }
    },

    async getDollarQuote(req, res) {
        try {
            const fiat_coin = {
                currency: "USD-BRL",
                name: "Dólar Americano/Real Brasileiro",
                price: USD_QUOTE,
                timestamp: getCurrentDate()
            };
            return res.send(fiat_coin);
        } catch (err) {
            console.error(err);
        }
    }

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

function getCurrentDate() {
    const current_date = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    return current_date;
}