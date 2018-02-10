var restful = require('node-restful');
var mongoose = restful.mongoose;

var user = new mongoose.Schema({
    firstname: String,
    lastname: String,
    idnumber: Number,
    tel: String,
    email: String,
    password: String

});

module.exports = restful.model('users', user);