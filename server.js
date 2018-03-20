var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("App/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require ("./app/routing/htmlRoutes.js")(app)


app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});