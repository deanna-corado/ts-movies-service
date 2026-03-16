import * as movieRepo from '../repositories/movieRepository';
import { MovieNotFoundError } from '../utils/movieError';

export const getAllMovies = () => {
  return movieRepo.getAllMovies();
};

export const getMovieById = async (id: number) => {
  const movie = await movieRepo.getMoviebyId(id);

  if (!movie) {
    throw new MovieNotFoundError();
  }

  return movie;
};

export const createMovie = (data: { title: string; director: string }) => {
  return movieRepo.createMovie(data);
};

export const updateMovie = async (id: number, data: { title?: string; director?: string }) => {
  const movie = await movieRepo.updateMovie(id, data);

  if (!movie) {
    throw new MovieNotFoundError();
  }

  return movie;
};

export const deleteMovie = async (id: number) => {
  const movie = await movieRepo.deleteMovie(id);

  if (!movie) {
    throw new MovieNotFoundError();
  }

  return movie;
};
