import axios from 'axios';
import * as cheerio from 'cheerio';
import dotenv from 'dotenv';
import { Crypto } from '../entities/Crypto';

dotenv.config({ path: "./src/config/.env" });

export class CryptoService {

    constructor() { }

    getCryptosData = async (): Promise<Crypto[]> => {
        const response = await axios.get(String(process.env.URI_CRYPTO_QUOTE));
        const $ = cheerio.load(response.data);

        let cryptos: Crypto[] = [];
        $('table > tbody > tr').each((i, item) => {
            let rank = $(item).find('td:nth-child(2)').text();
            let symbol = $(item).find('td:nth-child(1) a').text();
            let name = $(item).find('td:nth-child(1) sup').text();
            let price = $(item).find('td:nth-child(3)').clone().children().remove().end().text();
            let variation = $(item).find('td:nth-child(4) span').text();
            let marketCap = $(item).find('td:nth-child(5)').clone().children().remove().end().text();

            const crypto = new Crypto(
                {
                    rank: parseInt(rank),
                    symbol,
                    name,
                    price: parseFloat(price),
                    variation,
                    marketCap
                }
            );

            if (!crypto) throw new Error(`Error creating this crypto: ${symbol}`);

            cryptos.push(crypto);
        });
        return cryptos;
    }
}