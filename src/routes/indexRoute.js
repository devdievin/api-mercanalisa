const express = require('express');
const { getCryptoUSD, getCryptoBRL, getDollarQuote } = require('../controllers/cryptoController');
const cryptosLibrary = require('../helpers/cryptosLibrary');

const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.render('index', { url_api: process.env.URL_API });
});

// Documentation route
router.get('/docs', (req, res) => {
    res.render('docs', { url_api: process.env.URL_API, cryptos: cryptosLibrary.CRYPTOS });
});

// Routes cryptos quote
router.get('/crypto/USD/:symbol', getCryptoUSD);
router.get('/crypto/BRL/:symbol', getCryptoBRL);

// Routes fiat coin quote
router.get('/fiat/USD', getDollarQuote);

router.use((req, res, next) => {
    res.status(404).send({ error: "Sorry can't find that! This route does not exist.", status: "404" })
})

module.exports = router;