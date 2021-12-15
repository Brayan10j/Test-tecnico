const express = require("express");
const cors = require("cors");

// Initializations
const app = express();
require('./database');


// settings
app.set('port', process.env.PORT || 4000);


// middlewares  
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Global Variables


// routes
app.use(require('./routes'));



// static files


module.exports = app;
