const userRouter = require('express').Router();
const { Joi, celebrate } = require('celebrate');

const {
  updateProfile,
  getUserInfo,
} = require('../controllers/users');

userRouter.get('/me', getUserInfo);
userRouter.patch(
  '/me',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      email: Joi.string().required().min(2).max(30),
    }),
  }),
  updateProfile,
);

module.exports = userRouter;
