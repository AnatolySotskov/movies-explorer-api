const router = require('express').Router();
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const userRouter = require('./user');
const moviesRouter = require('./movies');
const NotFoundError = require('../errors/notFounrError');
const {
  signUpValidation,
  signInValidation,
} = require('../middlewares/validations');

router.post('/signup', signUpValidation, createUser);
router.post('/signin', signInValidation, login);

router.use(auth);
router.use('/users', userRouter);
router.use('/movies', moviesRouter);

router.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена (Ошибка 404)'));
});

module.exports = router;
