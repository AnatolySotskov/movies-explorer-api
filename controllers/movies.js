const Movie = require('../models/movie');
const NotFoundError = require('../errors/notFounrError');
const { CREATED_BY_CODE } = require('../utils/constants'); // VERY_GOOD
// const Forbidden = require('../errors/forbidden');

const getMovies = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((dataMovie) => res.send(dataMovie))
    .catch((err) => next(err));
};

const createMovie = (req, res, next) => {
  const owner = req.user._id;
  Movie.create({ owner, ...req.body })
    .then((movie) => {
      res.status(CREATED_BY_CODE).send(movie);
    })
    .catch((err) => {
      next(err);
    });
};

const deleteMovie = (req, res, next) => {
  // const movieId = req.params.id;
  // const userId = req.user._id;
  // Movie
  //   .findById(movieId)
  //   .then((dataMovie) => {
  //     console.log(dataMovie)
  //     if (!dataMovie) {
  //       throw new NotFoundError('Карточка не найдена (Ошибка 404)');
  //     }
  //     if (dataMovie.owner.toString() !== userId) {
  //       throw new Forbidden('Нельзя удалить чужую карточку (Ошибка 403)');
  //     }
  //     return Movie
  //       .findByIdAndRemove(movieId)
  //       .then(() => res.status(VERY_GOOD).send({ data: Movie }));
  //   })
  //   .catch((err) => {
  //     next(err);
  //   });
  Movie.findOneAndRemove({ movieId: req.params.id, owner: req.user._id })
    .orFail(() => {
      throw new NotFoundError('фильм не найден (Ошибка 404)');
    })
    .then((movie) => res.send({ data: movie }))
    .catch((err) => {
      next(err);
    });
};

module.exports = {
  createMovie,
  getMovies,
  deleteMovie,
};
