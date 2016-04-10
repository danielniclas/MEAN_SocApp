/**
 * Created by danielniclas on 4/10/16.
 */


var db = require('../db');      //  up one directory and in ROOT

var user = db.Schema({
    username: {type:String, required: true},
    password: {type: String, required: true, select: false}     //  select: false >>  so you don't send it down to the client
});

module.exports = db.model('User', user);            //  EXPORT the {user} object as:  "User"