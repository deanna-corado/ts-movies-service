export const mockGetAllMovies = jest.fn();
export const mockGetMovieById = jest.fn();
export const mockCreateMovie = jest.fn();
export const mockUpdateMovie = jest.fn();
export const mockDeleteMovie = jest.fn();

jest.mock('../../src/services/movieService', () => ({
  getAllMovies: mockGetAllMovies,
  getMovieById: mockGetMovieById,
  createMovie: mockCreateMovie,
  updateMovie: mockUpdateMovie,
  deleteMovie: mockDeleteMovie,
}));

jest.mock('../../src/middlewares/serviceAuth', () => ({
  serviceAuth: (req: any, res: any, next: any) => next(),
}));
export const authMock = () => {
  jest.mock('../../src/middlewares/auth', () => ({
    verifyToken: (req: any, res: any, next: any) => {
      req.token = 'test-token';
      next();
    },
  }));
};
