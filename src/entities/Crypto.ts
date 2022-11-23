export class Crypto {
    rank: number;
    symbol: string;
    name: string;
    price: number;
    variation: string;
    marketCap: string;

    constructor(props: Crypto){
        Object.assign(this, props);
    }
}