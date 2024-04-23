// initial express set up
const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

// middleware
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

// cookie set-up
app.use(cookieSession({
  name: 'session',
  keys: ['key1'],

  // Cookie Options (cookie is kept for 24 hours)
  maxAge: 24 * 60 * 60 * 1000
}));