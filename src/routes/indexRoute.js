const express = require('express');
const quoteController = require('../controllers/quoteController');
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
router.get('/crypto/USD/:symbol', quoteController.getCryptoUSD);
router.get('/crypto/BRL/:symbol', quoteController.getCryptoBRL);

// Routes fiat coin quote
router.get('/fiat/USD', quoteController.getDollarQuote);

module.exports = router;