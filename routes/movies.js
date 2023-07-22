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

moviesRouter.get('/movies', getMovies);

moviesRouter.post('/movies', createMovieValidation, createMovie);

moviesRouter.delete('/movies/:movieId', deleteMovieValidation, deleteMovie);

module.exports = moviesRouter;
