

'use strict';

const http = require('http');
const express = require('express');
const movieID = require('../models/movie-identifier');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

// POST /directory/search/
    movieID.Movie(body) {
      if (Movie.length === 0) {
        res.send(twimlGenerator.notFound().toString());
      } else if (Movie.length === 1) {
          console.log(Movie);
        res.send(twimlGenerator.singleEmployee(Movie[0]).toString());
      } 
    });


    app.post('/sms', (req, res) => {
        const twiml = new MessagingResponse();
      
        twiml.message('Movie: ' + movieID.movieName);
      
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
      });

    http.createServer(app).listen(1337, () => {
        console.log('Express server listening on port 1337');
      });