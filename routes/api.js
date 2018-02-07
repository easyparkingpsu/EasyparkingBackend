var express = require('express');
var router = express.Router();

var Status = require('../models/user');

Status.methods(['get', 'post', 'put', 'delete']);
Status.register(router, '/user');

module.exports = router;