var http = require('http');
var port = process.env.port || 1337;

var express = require('express');
var app = express();
var controllers = require('./controllers');

// Setup the View Engine
app.set("view engine", "vash");

// Map the routes
controllers.init(app);



http.createServer(app).listen(port);