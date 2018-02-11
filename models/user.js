var restful = require('node-restful');
var mongoose = restful.mongoose;

var user = new mongoose.Schema({
    firstname: String,
    lastname: String,
    idnumber:{
        type: Number,
        unique: true
    },
    tel: String,
    email: {
        type: String,
        unique: true
    },
    password: String

});

module.exports = restful.model('users', user);