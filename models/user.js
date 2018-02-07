var restful = require('node-restful');
var mongoose = restful.mongoose;

var user = new mongoose.Schema({
    firstname: String,
    surname: String,
    idnumber: Number,
    tel: String

});

module.exports = restful.model('tblusers', user);