import { Request, Response } from "express";
import { Crypto } from '../entities/Crypto';
import { CryptoService } from "../services/CryptoService";
import { validateData } from '../helpers/validate';
import { formatDigits, getDollarValue, getTimestamp } from '../helpers/tools';
import { Currencies } from "../helpers/currencies";

interface ICryptoResponse {
    currency: string,
    crypto: Crypto,
    timestamp: number
}

interface IDataProps {
    DOLAR_VALUE: number,
    CRYPTOS: Crypto[]
}

let data: IDataProps = {
    DOLAR_VALUE: 0,
    CRYPTOS: []
}

class CryptosController {

    constructor(private cryptoService: CryptoService) {
        getDollarValue().then(usd => data.DOLAR_VALUE = usd).catch(err => console.error("Error:", err));
        this.cryptoService.getCryptosData().then(cryptos => data.CRYPTOS = cryptos).catch(err => console.error("Error:", err));
    }

    getCryptoUSD = async (req: Request, res: Response) => {
        try {
            const { symbol } = req.params;

            let crypto = this.getCrypto(symbol);

            if (!validateData(crypto)) return res.status(404).json({ status: "404 - Not Found", message: "Error when looking for cryptocurrency!" });

            const response: ICryptoResponse = {
                currency: Currencies.USD,
                crypto: crypto!,
                timestamp: getTimestamp()
            };

            return res.status(200).json(response);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error', error });
        }
    }

    getCryptoBRL = async (req: Request, res: Response) => {
        try {
            const { symbol } = req.params;

            let crypto = this.getCrypto(symbol);

            if (!validateData(crypto)) return res.status(404).json({ status: "404 - Not Found", message: "Error when looking for cryptocurrency!" });

            let price = (parseFloat(crypto!.price) * data.DOLAR_VALUE);
            let marketCap = (parseFloat(crypto!.marketCap) * data.DOLAR_VALUE);

            const response: ICryptoResponse = {
                currency: Currencies.BRL,
                crypto: {
                    ...crypto!,
                    price: formatDigits(price.toString()),
                    marketCap: formatDigits(marketCap.toString())
                },
                timestamp: getTimestamp()
            };

            return res.status(200).json(response);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal Server Error', error });
        }
    }

    getCrypto = (symbol: string) => {
        return data.CRYPTOS.find(crypto => crypto.symbol === symbol.toUpperCase());
    }
}

export { CryptosController }