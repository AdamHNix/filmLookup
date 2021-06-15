'use strict';

const imdb = require('imdb-api');

var Movie = function findMovie (movieName) {
    (imdb.search({
    name: movieName
  }, {
    apiKey: '9ed698aa'
  }).then(console.log).catch(console.log))
};

module.exports.Movie = Movie;