import { fileFactory } from '../factories/fileFactory';

describe('File Controller', () => {
    it('should be able to get cryptocurrencies list', async () => {
        const list = fileFactory().getCryptosList();
        expect(list).not.toEqual([]);
        expect(list).not.toBeUndefined();
        expect(list).not.toBeNull();
    })
})