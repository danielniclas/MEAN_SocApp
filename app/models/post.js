/**
 * Created by danielniclas on 12/27/15.
 */


//create a mongoose Post MODEL to store the posts:

var db = require('../db');

var Post = db.model('Post', {               // Post MONGOOSE MODEL - Create MODEL for the db.  Call model(1,2) on DB

    username: {type: String, required: true},
    body: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now}

});

console.log("Mongoose SOCIAL APP Data Model Created -- Called:  Post");

module.exports = Post;

