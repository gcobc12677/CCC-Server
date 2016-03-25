var express = require("express");
var router = express.Router();

router.get("/ranking", function(req, res){
  res.json({
    cuttent_time : new Date()
  });
});

module.exports = router;
