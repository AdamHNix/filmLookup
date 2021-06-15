'use strict';

var MessagingResponse = require('twilio').twiml.MessagingResponse;

var notFound = function() {
  var resp = new MessagingResponse();
  resp.message('We did not find the movie you\'re looking for');
  return resp;
};

var singleMovie = function(Movie) {
  var resp = new MessagingResponse();
  var message = resp.message();
  message.body(`${Movie.originalTitle}\n${Movie.year}\n${Movie.rewards}`);
  return resp;
};

module.exports.notFound = notFound;

module.exports.singleMovie = singleMovie;

// module.exports.multipleEmployees = multipleEmployees;
