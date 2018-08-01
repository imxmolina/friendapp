var express = require("express");
var bodyParser = require("body-parser");
//var path = require('path');

//set up express app
var app = express();
var PORT = process.env.PORT || 7000;

//set up app for data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

//start server
app.listen(PORT, function () {
    console.log("APP listening on PORT " + PORT)
});