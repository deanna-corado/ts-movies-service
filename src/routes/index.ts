import { Router } from 'express';
import movieRoutes from './v1/movieRoute';

const routes = Router();
routes.use('/v1/movies', movieRoutes);
export default routes;
