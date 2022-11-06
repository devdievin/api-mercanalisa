const axios = require('axios');
const { validateData } = require('../helpers/validate');
const { getCryptosData } = require('../services/getCryptoData');

let data = {
    USD_QUOTE: 0,
    CRYPTOS: []
}

const getUsdQuote = async () => {
    try {
        const response = await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL');
        return response.data.USD.ask;
    } catch (error) {
        console.error("Error:", error);
    }
}

getUsdQuote().then(usd => data.USD_QUOTE = usd).catch(err => console.error("Error:", err));
getCryptosData().then(cryptos => data.CRYPTOS = cryptos).catch(err => console.error("Error:", err));

const updateData = setInterval(async () => {
    data.USD_QUOTE = await getUsdQuote();
    data.CRYPTOS = await getCryptosData();
}, (process.env.INTERVAL * 60 * 1000));

const getCryptoUSD = (req, res) => {
    try {
        const { symbol } = req.params;
        let crypto = data.CRYPTOS.find(crypto => crypto.symbol === symbol.toUpperCase());

        if (!validateData(crypto)) return res.send({ status: "ERROR", message: "Error when looking for cryptocurrency!" });

        let result = {
            position: crypto.position,
            name: crypto.name,
            symbol: crypto.symbol,
            price: crypto.price,
            currency: "USD",
            timestamp: getCurrentDate()
        };

        return res.send(result);
    } catch (error) {
        console.error("Error:", error);
    }
}

const getCryptoBRL = (req, res) => {
    try {
        const { symbol } = req.params;
        let crypto = data.CRYPTOS.find(crypto => crypto.symbol === symbol.toUpperCase());

        if (!validateData(crypto)) return res.send({ status: "ERROR", message: "Error when looking for cryptocurrency!" });

        let price = (crypto.price * data.USD_QUOTE);
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
}

const getDollarQuote = (req, res) => {
    try {
        if (!validateData(data.USD_QUOTE)) return;

        const fiat_coin = {
            currency: "USD-BRL",
            name: "Dólar Americano/Real Brasileiro",
            price: data.USD_QUOTE,
            timestamp: getCurrentDate()
        };
        return res.send(fiat_coin);
    } catch (err) {
        console.error(err);
    }
}

const formatDigits = (value) => {
    let digits = 0;
    (value >= 1) ? digits = 2 : digits = 6;
    return value.toFixed(digits);
}

const getCurrentDate = () => {
    const current_date = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    return current_date;
}

module.exports = { getCryptoUSD, getCryptoBRL, getDollarQuote };