require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const cors = require('cors');
const helmet = require('helmet');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/rateLimiter');
const router = require('./routes');
const { MONGO_DB_URL_DEV } = require('./utils/constants');

const { PORT = 3000, NODE_ENV, MONGO_DB_URL } = process.env;

const app = express();

mongoose.connect(NODE_ENV === 'production' ? MONGO_DB_URL : MONGO_DB_URL_DEV);

app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use(helmet());
app.use(limiter);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Сервер запущен. Порт сервера ${PORT}`);
});
