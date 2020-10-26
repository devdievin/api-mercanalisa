const express = require('express');
const quoteController = require('../controllers/quoteController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Cryptocurrency quote API');
});

router.get('/crypto/:symbol', quoteController.getCrypto);

module.exports = router;