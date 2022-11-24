import { CryptosController } from "../controllers/CryptosController";
import { cryptoFactory } from "./cryptoFactory";

describe('Crypto Factory', () => {
    it('should be able to return a new instance of CryptoController', () => {
        expect(cryptoFactory()).toBeInstanceOf(CryptosController);
    })
})