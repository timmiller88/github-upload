var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 8080;
app.set("view engine", "ejs")

app.get('/', function(req,res){
    res.render('main')
    // res.render('entry');
})


http.listen(port, function(){
   console.log('listening on *:' + port);
});
