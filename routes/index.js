const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');

const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const userRouter = require('./user');
const moviesRouter = require('./movies');
const NotFoundError = require('../errors/notFounrError');

router.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().min(2).max(30).required(),
      // about: Joi.string().min(2).max(30),
      // avatar: Joi.string().regex(/https*:\/\/[\w\S]{1,}\.[\w\S]{1,}/),
    }),
  }),
  createUser,
);

router.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  login,
);

router.use(auth);
router.use('/users', userRouter);
router.use('/movies', moviesRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена (Ошибка 404)'));
});

module.exports = router;
