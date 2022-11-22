import { Router } from "express";
import { cryptoFactory } from "./factories/cryptoFactory";
import { fiatFactory } from "./factories/fiatFactory";
import { testFactory } from "./factories/testFactory";
import { route404 } from "./middlewares/route";

const routes = Router();

// Home route
routes.get('/', (req, res) => {
    res.render('index', { url_api: process.env.URL_API });
});

// Documentation route
routes.get('/docs', async (req, res) => {
    res.render('docs', { url_api: process.env.URL_API, cryptos: await testFactory().recoverListCrypto() });
});


routes.get('/test', testFactory().execute);

// Routes cryptos quote
routes.get('/crypto/USD/:symbol', cryptoFactory().getCryptoUSD);
routes.get('/crypto/BRL/:symbol', cryptoFactory().getCryptoBRL);

// Routes fiat coin quote
routes.get('/fiat/USD', fiatFactory().getDollarData);

routes.use(route404);

export { routes };