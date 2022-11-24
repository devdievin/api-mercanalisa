import request from 'supertest';
import { app } from '../app/app';

describe('Crytocurrencies Controller', () => {
    it('should be able to return cryptocurrency message not found in dollar', async () => {
        const response = await request(app).get('/crypto/USD/BTC');
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(404);
        expect(response.body.status).toEqual("404 - Not Found");
    })

    it('should be able to return cryptocurrency message not found in real', async () => {
        const response = await request(app).get('/crypto/BRL/BTC');
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(404);
        expect(response.body.status).toEqual("404 - Not Found");
    })
})