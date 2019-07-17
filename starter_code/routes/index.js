const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

const Movie =require('../models/Movie.js')

router.get('/movies', (req, res, next) => {
Movie.find()
  .then(movies =>{
    res.render("movies", {movies})
    console.log(movies)
  })
  .catch(error => {
    console.log(error)
  })})

module.exports = router;
