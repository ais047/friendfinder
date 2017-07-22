const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
var PORT = process.env.port || 3000;

const apiroute = require('./routing/api');
const htmlroute = require('./routing/html');

app.use('/', apiroute);
app.use('/', htmlroute);


//Express listening to port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

module.exports = app;