import { FiatController } from "../controllers/FiatController";
import { fiatFactory } from "./fiatFactory";

describe('Fiat Factory', () => {
    it('should be able to return a new instance of FiatController', () => {
        expect(fiatFactory()).toBeInstanceOf(FiatController);
    })
})