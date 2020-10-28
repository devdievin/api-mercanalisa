const axios = require('axios').default;

const INTERVAL = 3;

async function usdQuote() {
    // console.log(`Reading USD quote every ${INTERVAL} minute(s)`);
    let usdPrice = 0;
    let usdQuote = await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL');
    usdPrice = usdQuote.data.USD.high;
    return usdPrice;
}

const readUsdQuote = setInterval(usdQuote, (INTERVAL * 60 * 1000));

exports.usdPrice = usdQuote();