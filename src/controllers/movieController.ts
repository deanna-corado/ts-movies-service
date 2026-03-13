import { Request, Response, NextFunction } from 'express';
import * as movieService from '../services/movieService';

// GET all movies
export const getAllMovies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const movies = await movieService.getAllMovies();
    res.status(200).json({ status: 'success', data: movies });
  } catch (error) {
    next(error);
  }
};

// GET movie by ID
export const getMovieById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const movie = await movieService.getMovieById(id);
    res.status(200).json({ status: 'success', data: movie });
  } catch (error) {
    next(error);
  }
};

// CREATE movie
export const createMovie = async (
  req: Request<{}, {}, { title: string; director: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const movie = await movieService.createMovie(req.body);
    res.status(201).json({ status: 'success', data: movie });
  } catch (error) {
    next(error);
  }
};

// PATCH movie
export const updateMovie = async (
  req: Request<{ id: string }, {}, { title?: string; director?: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const movie = await movieService.updateMovie(id, req.body);
    res.status(200).json({ status: 'success', data: movie });
  } catch (error) {
    next(error);
  }
};

// DELETE movie
export const deleteMovie = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const movie = await movieService.deleteMovie(id);
    res.status(200).json({ status: 'success', data: 'Movie deleted successfully' });
  } catch (error) {
    next(error);
  }
};
