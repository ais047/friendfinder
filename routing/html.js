const express = require('express');
const path = require('path');

var router = express.Router();

router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../html/survey.html"));
});

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../html/index.html"));
});

router.get("/result", function(req, res) {
  res.sendFile(path.join(__dirname, "../html/result.html"));
});

module.exports = router;

//Express listening to port
