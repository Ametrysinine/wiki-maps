// initial express set up
const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

// middleware
const morgan = require('morgan')
const cookieParser = require('cookie-parser')