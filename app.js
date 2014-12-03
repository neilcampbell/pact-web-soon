var maxAge = 3600000;

var express = require('express');
var serveStatic = require('serve-static');
var compression = require('compression');

var app = express();

app.listen(process.env.PORT || 3000);

app.use(compression())
app.use(serveStatic(__dirname + '/public', { 'index': ['index.html'], 'maxAge': maxAge }));