// setting up express
var express = require('express');
var app = express();
var controllers = require('./controllers');

// Setup the View Engine
app.set("view engine", "vash");

// Set the public static resources folder
app.use(express.static(__dirname + "/public"));

// Map the routes
controllers.init(app);

// creating server.
var http = require('http');
var port = process.env.port || 1337;
http.createServer(app).listen(port);