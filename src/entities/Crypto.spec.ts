import { Crypto } from "./Crypto"

describe('Crypto Entity', () => {
    it('should be able to create a new instance of Crypto', () => {
        const crypto = new Crypto({
            "rank": 1,
            "symbol": "BTC",
            "name": "Bitcoin",
            "price": 16106.69,
            "variation": "0.83%",
            "marketCap": "309.479B"
        });
        expect(crypto).toBeInstanceOf(Crypto);
        expect(crypto).not.toBeUndefined();
        expect(crypto).not.toBeNull();
        expect(crypto.symbol).toEqual("BTC");
    })
})