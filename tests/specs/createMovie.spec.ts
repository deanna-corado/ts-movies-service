import { authMock } from '../mocks/mock';
authMock();

import request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/config/db';
import { movieData } from '../fixtures/movieData';

describe('Movies API', () => {
  it('POST /api/v1/movies should return 201', async () => {
    const res = await request(app).post('/api/v1/movies').send(movieData);
    expect(res.status).toBe(201);
    //additional assertions or no na
    expect(res.body.status).toBe('success');
    expect(res.body.data.id).toBeDefined();
    expect(res.body.data.title).toBe(movieData.title);
    expect(res.body.data.director).toBe(movieData.director);
  });
});
afterAll(async () => {
  await sequelize.close();
});

//npx jest tests/specs/createMovie.spec.ts
