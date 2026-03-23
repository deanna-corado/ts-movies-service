import { authMock, mockGetMovieById } from '../mocks/mock';

authMock();

import request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/config/db';
import { movieData } from '../fixtures/movieData';
import { MovieError } from '../../src/utils/movieError';

describe('Get Movie by ID', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  //success
  it('GET /api/v1/movies/:id should return 200', async () => {
    const mockMovie = { id: 1, ...movieData };
    mockGetMovieById.mockResolvedValue(mockMovie);

    const res = await request(app).get('/api/v1/movies/1');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.id).toBe(1);
    expect(res.body.data.title).toBe(movieData.title);
  });

  //404 not found
  it(`GET /api/v1/movies/:id should return 404 if movie not found`, async () => {
  const error = new MovieError('Movie not found', 404);
    mockGetMovieById.mockRejectedValue(error);

    const res = await request(app).get(`/api/v1/movies/9999`);

    expect(res.status).toBe(404);
  });
});

afterAll(async () => {
  await sequelize.close();
});

//npx jest tests/specs/getMoviebyId.spec.ts
