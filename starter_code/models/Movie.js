const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = mongoose.model("movies", new Schema({
  title: String,
  director: String,
  stars: {type: Array},
  image: String,
  description: String,
  showtimes: {type: Array}
}), "movies")

module.exports = movieSchema