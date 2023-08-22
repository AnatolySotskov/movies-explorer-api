const { Joi, celebrate } = require('celebrate');

const signInValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const signUpValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

const updateProfileValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().min(2).max(30),
  }),
});

const createMovieValidation = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().length(4).required(),
    description: Joi.string().required(),
    image: Joi.string()
      .regex(/https*:\/\/[\w\S]{1,}\.[\w\S]{1,}/)
      .required(),
    trailerLink: Joi.string()
      .regex(/https*:\/\/[\w\S]{1,}\.[\w\S]{1,}/)
      .required(),
    thumbnail: Joi.string()
      .regex(/https*:\/\/[\w\S]{1,}\.[\w\S]{1,}/)
      .required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const deleteMovieValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
});

module.exports = {
  signUpValidation,
  signInValidation,
  updateProfileValidation,
  createMovieValidation,
  deleteMovieValidation,
};
