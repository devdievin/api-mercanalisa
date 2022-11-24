import request from 'supertest';
import { app } from '../app/app';

describe('Route middleware', () => {
    it('should be able to return route 404', async () => {
        const response = await request(app).get('/not/exist');
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(404);
        expect(response.body.error).toEqual("Sorry can't find that! This route does not exist.");
    })
})