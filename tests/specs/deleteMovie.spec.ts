import { authMock } from '../mocks/mock';

authMock();

import request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/config/db';
import { movieData } from '../fixtures/movieData';

describe('Movies API', () => {
  let movieId: number;

  beforeAll(async () => {
    const res = await request(app).post('/api/v1/movies').send(movieData);
    expect(res.status).toBe(201);
    movieId = res.body.data.id;
  });

  it('DELETE /api/v1/movies/:id should delete a movie', async () => {
    const res = await request(app).delete(`/api/v1/movies/${movieId}`);
    expect(res.status).toBe(200);
  });

  it(`DELETE /api/v1/movies/:id should return 404 if movie not found`, async () => {
    const res = await request(app).delete(`/api/v1/movies/999999`);
    expect(res.status).toBe(404);
  });
});

afterAll(async () => {
  await sequelize.close();
});

//npx jest tests/specs/deleteMovie.spec.ts
