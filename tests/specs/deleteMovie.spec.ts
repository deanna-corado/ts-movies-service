import { authMock, mockDeleteMovie } from '../mocks/mock';

authMock();

import request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/config/db';
import { movieData } from '../fixtures/movieData';
import { MovieError } from '../../src/utils/movieError';

describe('Delete Movie', () => {


  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  it('DELETE /api/v1/movies/:id should delete a movie', async () => {
    mockDeleteMovie.mockResolvedValue('Movie deleted successfully');

    const res = await request(app).delete('/api/v1/movies/1');

    expect(res.status).toBe(200);
    expect(res.body.data).toBe('Movie deleted successfully');
  });

  //404
  it(`DELETE /api/v1/movies/:id should return 404 if movie not found`, async () => {
    const error = new MovieError('Movie not found', 404);
    mockDeleteMovie.mockRejectedValue(error);

    const res = await request(app).delete('/api/v1/movies/999999');
    expect(res.status).toBe(404);
  });
});

afterAll(async () => {
  await sequelize.close();
});

//npx jest tests/specs/deleteMovie.spec.ts
