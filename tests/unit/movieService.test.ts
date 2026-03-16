//try pa lang
import { getAllMovies } from '../../src/services/movieService';
import sequelize from '../../src/config/db';
test('getAllMovies should return an array of movies', async () => {
  const movies = await getAllMovies();
  expect(Array.isArray(movies)).toBe(true);
});

afterAll(async () => {
  await sequelize.close();
});
//npx jest tests/unit/movieService.test.ts
