var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static("./client"));

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'));
console.log("App listening on port");