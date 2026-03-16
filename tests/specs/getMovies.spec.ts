import { authMock } from '../mocks/mock';

authMock();

import request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/config/db';

describe('Movies API', () => {
  //success - wala na yung unauth sa service na yun
  it('GET /api/v1/movies should return 200', async () => {
    const res = await request(app).get('/api/v1/movies');

    expect(res.status).toBe(200);
    // expect(Array.isArray(res.body)).toBe(true); next time na?
  });
});

afterAll(async () => {
  await sequelize.close();
});
//npx jest tests/specs/getMovies.spec.ts
