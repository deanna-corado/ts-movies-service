import { Router } from 'express';
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from '../../controllers/movieController';
import { validateRequest } from '../../middlewares/validateReq';
import { createMovieSchema, idParamSchema, updateMovieSchema } from '../../schemas/movieSchema';
import { verifyToken } from '../../middlewares/auth';
import { serviceAuth } from '../../middlewares/serviceAuth';
import { get } from 'node:http';
const router = Router();

// GET all movies
router.get('/', serviceAuth, verifyToken, getAllMovies);
// router.get('/', getAllMovies);
// GET movie by Id
router.get(
  '/:id',
  serviceAuth,
  verifyToken,
  validateRequest(idParamSchema, 'params'),
  getMovieById
);

// CREATE movie
router.post('/', serviceAuth, verifyToken, validateRequest(createMovieSchema, 'body'), createMovie);

// UPDATE
router.patch(
  '/:id',
  serviceAuth,
  verifyToken,
  validateRequest(idParamSchema, 'params'),
  validateRequest(updateMovieSchema, 'body'),
  updateMovie
);

// DELETE movie
router.delete(
  '/:id',
  serviceAuth,
  verifyToken,
  validateRequest(idParamSchema, 'params'),
  deleteMovie
);

export default router;
