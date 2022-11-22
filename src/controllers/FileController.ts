import { existsSync, writeFileSync } from 'fs';
import { Request, Response } from 'express';
import { Crypto } from '../entities/Crypto';
import { CryptoService } from '../services/CryptoService';

let CRYPTOS: Crypto[] = [];

class FileController {

    constructor(private cryptoService: CryptoService) {
        this.cryptoService.getCryptosData().then(cryptos => CRYPTOS = cryptos).catch(err => console.error(err));
    }

    getCryptosList = () => {
        let list;

        if (CRYPTOS.length === 0) {
            list = require('../helpers/cryptos.json');
        } else {
            list = CRYPTOS;
        }

        return list;
    }

    execute = (req: Request, res: Response) => {
        try {
            this.createLocalCryptosList('../helpers/test.json');
            return res.status(201).json({ message: 'File created.' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error', error });
        }
    }

    createLocalCryptosList = async (path: string) => {
        const src = `${__dirname}/${path}`;

        if (!existsSync(src)) {
            console.log('The path does not exist. Creating file...');
            writeFileSync(src, JSON.stringify(CRYPTOS));
        }

        console.log('The path exists. File verified!');
    }
}

export { FileController }