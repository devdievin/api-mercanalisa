import request from 'supertest';
import { app } from '../app/app';

describe('Fiat Currencies Controller', () => {
    it('should be able to get dollar/real value', async () => {
        const response = await request(app).get('/fiat/USD');
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
        expect(response.body.currency).toEqual("USD-BRL");
    })
})