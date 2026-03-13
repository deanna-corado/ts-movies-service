import { authMock } from '../mocks/mock';

authMock();

import request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/config/db';
import { movieData, updatedMovieData } from '../fixtures/movieData';

describe('Movies API', () => {
  let movieId: number;

  beforeAll(async () => {
    const res = await request(app).post('/api/v1/movies').send(movieData);
    expect(res.status).toBe(201);
    movieId = res.body.data.id;
  });

  it('PATCH /api/v1/movies/:id should update a movie', async () => {
    const res = await request(app).patch(`/api/v1/movies/${movieId}`).send(updatedMovieData);

    expect(res.status).toBe(200);
    expect(res.body.data.title).toBe(updatedMovieData.title);
    expect(res.body.data.director).toBe(updatedMovieData.director);
  });
});

afterAll(async () => {
  await sequelize.close();
});

//npx jest tests/specs/updateMovie.spec.ts
