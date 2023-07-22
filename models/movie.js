const mongoose = require('mongoose');
const isUrl = require('validator/lib/isURL');

const movieShema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default:
      'https://e1.pngegg.com/pngimages/525/115/png-clipart-symbolize-black-film-strip-art.png',
    validate: {
      validator: (url) => isUrl(url),
      message: 'Неправильный формат ссылки',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    default:
      'https://e1.pngegg.com/pngimages/525/115/png-clipart-symbolize-black-film-strip-art.png',
    validate: {
      validator: (url) => isUrl(url),
      message: 'Неправильный формат ссылки',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    default:
      'https://e1.pngegg.com/pngimages/525/115/png-clipart-symbolize-black-film-strip-art.png',
    validate: {
      validator: (url) => isUrl(url),
      message: 'Неправильный формат ссылки',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
    default: 'Кинчик',
  },
  nameEN: {
    type: String,
    required: true,
    default: 'Kinchik',
  },
});

module.exports = mongoose.model('movie', movieShema);
