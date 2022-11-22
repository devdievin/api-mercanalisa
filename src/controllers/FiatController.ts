import { Request, Response } from "express";
import { getCurrentDate, getDollarValue } from "../helpers/tools";
import { validateData } from "../helpers/validate";

class FiatController {

    constructor() { }

    getDollarData = async (req: Request, res: Response) => {
        try {
            const dollar = await getDollarValue();

            if (!validateData(dollar)) return;

            const fiat_coin = {
                currency: "USD-BRL",
                name: "Dólar Americano/Real Brasileiro",
                price: dollar,
                timestamp: getCurrentDate()
            };

            return res.status(200).json(fiat_coin);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error', err: err });
        }
    }
}

export { FiatController }