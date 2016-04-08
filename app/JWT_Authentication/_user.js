/**
 * Created by danielniclas on 4/7/16.
 */


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth_demo2', function () {

    console.log("MongoDB JWT AUTH_DEMO_2 DB connected >>  _user.js")

});

var user = mongoose.Schema({
    username: String,
    password: String
});


module.exports = mongoose.model("User", user);


