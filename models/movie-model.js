'use strict';

var express = require('express')
  , router = express.Router()
  , twilio = require('twilio')
  , movieID = require('../models/movie-identifier')
  , _ =  require('underscore')
  , twimlGenerator = require('../lib/twiml-generator');

// POST /directory/search/
router.post('/search/', function(req, res, next) {
  var body = req.body.Body;
  res.type('text/xml');

  
module.exports = mongoose.model('movie', Movie);