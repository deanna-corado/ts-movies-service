import { authMock } from '../mocks/mock';

authMock();

import request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/config/db';

describe('Movies API', () => {
  //seed
  let movieId: number;

  beforeAll(async () => {
    const res = await request(app).post('/api/v1/movies').send({
      title: 'Test Movie',
      director: 'Test Director',
    });

    movieId = res.body.data.id;
  });

  //success
  it('GET /api/v1/movies/:id should return 200', async () => {
    const res = await request(app).get(`/api/v1/movies/${movieId}`);

    expect(res.status).toBe(200);
  });

  //404 not found
  it(`GET /api/v1/movies/:id should return 404 if movie not found`, async () => {
    const res = await request(app).get(`/api/v1/movies/9999`);
    expect(res.status).toBe(404);
  });
});
afterAll(async () => {
  await sequelize.close();
});

//npx jest tests/specs/getMoviebyId.spec.ts
