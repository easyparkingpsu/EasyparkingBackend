var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://admin:admin@ds046367.mlab.com:46367/ezparkingpsu');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type:'application/json; charset=utf-8'}));

app.use('/api', require('./routes/api'));

app.listen(process.env.PORT || 5000);
console.log('Server is running');