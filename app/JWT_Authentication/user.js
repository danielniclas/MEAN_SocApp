/**
 * Created by danielniclas on 1/5/16.
 */


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth_demo', function () {

    console.log("MongoDB AUTH_DEMO DB connected")

});

var user = mongoose.Schema({
    username: String,
    password: {Type: String, select: false}
});


module.exports = mongoose.model("User", user);


