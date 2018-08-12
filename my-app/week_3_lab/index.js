var express = require("express");
var app = express();
var path = require('path');
var http = require("http").Server(app);
var bodyParse = require("body-parser");

app.use(express.static(__dirname + "/../dist/my-app/"));
app.use(bodyParse.urlencoded());
app.use(bodyParse.json());

// app.get('/', function(req, res){
//     res.sendFile(__dirname + "/../dist/my-app/index.html");
// })

// app.get('/login', function(req, res){
//     res.sendFile(__dirname + "/../dist/my-app/index.html");
// })

// app.get('/account', function(req, res){
//     res.sendFile(__dirname + "/../dist/my-app/index.html");
// })

// app.get('/second_page', function(req, res){
//     res.sendFile(__dirname + "/../dist/my-app/index.html");
// })


app.post('/login', function(req, res){
    var user = req.body.username;
    var pass = req.body.password;

    console.log("USERNAME: " + user);
    console.log("PASSWORD: " + pass);

    res.setHeader('Content-Type', 'application/json');

    if (user == "jolon" && pass == "123")
    {
        res.send(JSON.stringify({"ok":"true"}));
    }
    else
    {
        res.send(JSON.stringify({"ok":"false, errors{}"}));
    }
})

http.listen(3000);

console.log("Server started\n");
