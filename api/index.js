var express = require("express");
var app = express();


// Routes
const rankingRouter = require("./routes/ranking.js");

app.use(rankingRouter);

app.listen(8080, function(){
  console.log("clickclickclick listen 8080");
});
