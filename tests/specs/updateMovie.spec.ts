import { authMock, mockUpdateMovie } from '../mocks/mock';

authMock();

import request from 'supertest';
import app from '../../src/app';
import sequelize from '../../src/config/db';
import { invalidMovieData, movieData, updatedMovieData } from '../fixtures/movieData';
import { MovieError } from '../../src/utils/movieError';

describe('Update Movie', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  //200 oks
  it('PATCH /api/v1/movies/:id should update a movie', async () => {
    const mockUpdatedMovie = { id: 1, ...updatedMovieData };
    mockUpdateMovie.mockResolvedValue(mockUpdatedMovie);

    const res = await request(app).patch('/api/v1/movies/1').send(updatedMovieData);

    expect(res.status).toBe(200);
    expect(res.body.data.title).toBe(updatedMovieData.title);
    expect(res.body.data.director).toBe(updatedMovieData.director);
  });

  //404 not found inv id
  it(`PATCH /api/v1/movies/:id should return 404 if movie not found`, async () => {
    const error = new MovieError('Movie not found', 404);
    mockUpdateMovie.mockRejectedValue(error);

    const res = await request(app).patch(`/api/v1/movies/999999`).send(updatedMovieData);
    expect(res.status).toBe(404);
  });

  //400 bad req; inv data
  it(`PATCH /api/v1/movies/:id should return 400 for missing fields`, async () => {
    const res = await request(app).patch('/api/v1/movies/1').send(invalidMovieData);
    expect(res.status).toBe(400);
  });
});
afterAll(async () => {
  await sequelize.close();
});

//npx jest tests/specs/updateMovie.spec.ts
