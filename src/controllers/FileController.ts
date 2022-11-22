import { Request, Response } from 'express';
import { existsSync, writeFile, writeFileSync } from 'fs';
import schedule from 'node-schedule';
import { Crypto } from '../entities/Crypto';
import { CryptoService } from '../services/CryptoService';

let CRYPTOS: Crypto[] = [];

const FILE_PATH: string = '../helpers/cryptos.json';

class FileController {

    constructor(private cryptoService: CryptoService) {
        this.cryptoService.getCryptosData().then(cryptos => CRYPTOS = cryptos).catch(err => console.error(err));
    }

    execute = (req: Request, res: Response) => {
        return res.status(200).json('ok');
    }

    recoverListCrypto = async () => {
        const cryptos_path = await this.checkFileExists(FILE_PATH);

        const cryptos = require(cryptos_path);

        return cryptos;
    }

    createFile = (path: string, data: any) => {
        try {
            writeFileSync(path, data);
            console.log("File created");
        } catch (error) {
            console.error(error);
        }
        // writeFile(path, data, (err) => {
        //     if (err) return console.error(err);

        //     console.log("File created!");
        // });
    }

    checkFileExists = async (path: string) => {
        // return !!existsSync(path);
        const src = `${__dirname}/${path}`;

        if (!existsSync(src)) {
            console.log('The path does not exist. Creating file...');
            this.createFile(src, JSON.stringify(CRYPTOS));
        }

        console.log('The path exists. File verified!');

        return path;
    }

    scheduleTask = (taskName: string, dayOfWeek: number[], hour: number, minute: number, callback: any) => {
        try {
            const rule = new schedule.RecurrenceRule();
            rule.dayOfWeek = dayOfWeek; // array (0-6) Starting with Sunday
            rule.hour = hour;
            rule.minute = minute;

            const job = schedule.scheduleJob(rule, () => {
                callback();
            });
            console.log("## Scheduled task -->", taskName);
        } catch (error) {
            console.error(error);
        }
    }
}

export { FileController }