const moviesRouter = require('express').Router();
const {
  createMovie,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');

const {
  createMovieValidation,
  deleteMovieValidation,
} = require('../middlewares/validations');

moviesRouter.get('/', getMovies);

moviesRouter.post('/', createMovieValidation, createMovie);

moviesRouter.delete('/:_id', deleteMovieValidation, deleteMovie);

module.exports = moviesRouter;
