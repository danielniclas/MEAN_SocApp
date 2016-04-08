/**
 * Created by danielniclas on 1/5/16.
 */


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth_demo', function () {

    console.log("MongoDB JWT AUTH_DEMO DB connected")

});

var user = mongoose.Schema({
    username: String,
    password: {type: String, select: false}
    //password: String
});


module.exports = mongoose.model("User", user);


