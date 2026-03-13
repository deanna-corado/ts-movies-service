import Movie from '../models/movieModel';
import { MovieAttributes } from '../types/movie';

export const getAllMovies = async (): Promise<Movie[]> => {
  return Movie.findAll();
};

//takes a parameter na id of type number,
export const getMoviebyId = async (id: number): Promise<Movie | null> => {
  return Movie.findByPk(id);
};

export const createMovie = async (data: MovieAttributes): Promise<Movie> => {
  return Movie.create(data);
};

export const updateMovie = async (
  id: number,
  data: Partial<MovieAttributes>
): Promise<Movie | null> => {
  const movie = await Movie.findByPk(id);
  if (movie) {
    return movie.update(data);
  }
  return null;
};

export const deleteMovie = async (id: number): Promise<Movie | null> => {
  const movie = await Movie.findByPk(id);
  if (movie) {
    movie.destroy();
    return movie;
  }
  return null;
};
