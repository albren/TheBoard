var http = require('http');
var port = process.env.port || 1337;

var express = require('express');
var app = express();
var ejsEngine = require("ejs-locals");

// Setup the View Engine
app.engine("ejs", ejsEngine); // support master pages
app.set("view engine", "ejs"); // ejs view engine

app.get("/", function (req, res) {
    //res.send("<html><body><h1>Express</h1></body></html>");
    res.render("ejs/index", { title: "Express + EJS"});
});

http.createServer(app).listen(port);