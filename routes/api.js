var express = require("express"),
    app = express(),
    http = require("http"),
    path = require('path'),
    router = express('express');

app.use(router);
router.get('/xmltest', function(req, res){
  res.set('Content-Type','text/xml').send('<note>Hola</note>');
});
router.get('/htmltest', function(req, res){
  res.set('Content-Type','text/html').send('<html><body><h1>Que más!</h1></body></html>');
});
router.get('/jsontest', function(req, res){
  res.set('Content-Type','text/json').send('{ "tipo" : "archivo .json"}');
});
router.get('/imgtest', function(req, res){
  res.type('jpeg').sendFile(path.join(__dirname, '../public/images/skull.jpg'));
});

module.exports = app;
