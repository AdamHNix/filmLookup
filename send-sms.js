const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

const accountSid = process.dotenv.accountSid;
const authToken = process.dotenv.authToken;
const client = require('twilio')(accountSid, authToken);