const userRouter = require('express').Router();
const { updateProfile, getUserInfo } = require('../controllers/users');

const { updateProfileValidation } = require('../middlewares/validations');

userRouter.get('/me', getUserInfo);

userRouter.patch('/users/me', updateProfileValidation, updateProfile);

module.exports = userRouter;
