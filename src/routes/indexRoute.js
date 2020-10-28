const express = require('express');
const quoteController = require('../controllers/quoteController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Cryptocurrency quote API');
});

// Routes cryptos quote
router.get('/crypto/USD/:symbol', quoteController.getCryptoUSD);
router.get('/crypto/BRL/:symbol', quoteController.getCryptoBRL);

module.exports = router;