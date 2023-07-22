const moviesRouter = require('express').Router();
const { Joi, celebrate } = require('celebrate');

const {
  createMovie,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/', getMovies);

moviesRouter.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      country: Joi.string().required(),
      director: Joi.string().required(),
      duration: Joi.number().required(),
      year: Joi.string().length(4).required(),
      description: Joi.string().required(),
      image: Joi.string().regex(/https*:\/\/[\w\S]{1,}\.[\w\S]{1,}/).required(),
      trailerLink: Joi.string().regex(/https*:\/\/[\w\S]{1,}\.[\w\S]{1,}/).required(),
      thumbnail: Joi.string().regex(/https*:\/\/[\w\S]{1,}\.[\w\S]{1,}/).required(),
      movieId: Joi.number().required(),
      nameRu: Joi.string().required(),
      nameEn: Joi.string().required(),
    }),
  }),
  createMovie,
);

moviesRouter.delete(
  '/:_id',
  celebrate({
    params: Joi.object().keys({
      _id: Joi.string().hex().length(24).required(),
    }),
  }),
  deleteMovie,
);

module.exports = moviesRouter;
