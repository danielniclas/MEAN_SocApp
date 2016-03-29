/**
 * Created by Daniel on 2/17/2016.
 */

//  Node/Mongoose File:
//  Create a MODEL to store POSTS in the DB:

var db = require('../db');    //  ACCESSING the Exposed MONGOOSE Connection with the DB  -- (little confusing)


//  The DB MONGOOSE MODEL
//  Post is the MODEL for creating entries into MONGO
var Post = db.model('Post',{                        //  model(1,2)  1.  Post >> for creating entries into MONGO  2.  Object
    username: {type: String, required: true},
    body: {type: String, required: true},
    date: {type: Date, required:true, default: Date.now}
});

module.exports = Post;      //  Post is the DB MODEL
                            //  this MODULE is exposed and accessible by:  require('posts')  posts is the name of the file
                            // can access this mongoose MODULE by using the require function
                            // it is EXPOSED on the MODULE OBJECT
                            //  expressServer1.js is requiring it