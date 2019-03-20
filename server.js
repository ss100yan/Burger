var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 5000;

app.get('/',(req, res) => res.send('INDEX'));

app.listen(PORT,console.log(`server started on port ${PORT}`));
