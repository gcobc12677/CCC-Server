const express = require("express");
const bodyParser = require('body-parser');
const db = require('./db.js');
var app = express();


// Routes
const rankingRouter = require("./routes/ranking.js");

app.use(bodyParser.urlencoded({extended: true}));
app.use(rankingRouter);

module.exports = app;
