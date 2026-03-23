import { authMock, mockGetAllMovies } from '../mocks/mock';

authMock();

import request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/config/db';
import { movieData } from '../fixtures/movieData';

describe('Get Movies', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  //success
  it('GET /api/v1/movies should return 200', async () => {
    const mockMovies = [
      { id: 1, ...movieData },
      { id: 2, ...movieData },
    ];
    mockGetAllMovies.mockResolvedValue(mockMovies);

    const res = await request(app).get('/api/v1/movies');

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
  });
});

afterAll(async () => {
  await sequelize.close();
});
//npx jest tests/specs/getMovies.spec.ts
