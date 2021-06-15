const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

const accountSid = "AC6187bfef5eda98b1a441e57122023c6c";
const authToken = "71e5e866fa6cb6aef6cbc3b1e5f5425c";
const client = require('twilio')(accountSid, authToken);