import Joi from 'joi';

export const idParamSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
}).options({ convert: true });

export const createMovieSchema = Joi.object({
  title: Joi.string().required(),
  director: Joi.string().required(),
});

export const updateMovieSchema = Joi.object({
  title: Joi.string().min(1).optional(),
  director: Joi.string().min(1).optional(),
});
