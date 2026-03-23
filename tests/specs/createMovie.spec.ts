import { authMock, mockCreateMovie } from '../mocks/mock';
authMock();

import request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/config/db';
import { missingMovieData, movieData } from '../fixtures/movieData';

describe('Create Movie', () => {
  beforeEach(() => {
    authMock(); 
    jest.clearAllMocks();
  });
  
  //created
  it('POST /api/v1/movies should return 201', async () => {
    const mockResponse = { id: 1, ...movieData };
    mockCreateMovie.mockResolvedValue(mockResponse);

    const res = await request(app).post('/api/v1/movies').send(movieData);
    
    expect(res.status).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.title).toBe(movieData.title);
    expect(res.body.data.director).toBe(movieData.director);
  });
 

  //FIX
  //bad req; missing field
  it('POST /api/v1/movies should return 400 for missing fields', async () => {
    const res = await request(app).post('/api/v1/movies').send(missingMovieData);
    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Validation error');
  });
});
afterAll(async () => {
  await sequelize.close();
});

//npx jest tests/specs/createMovie.spec.ts
