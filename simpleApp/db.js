/**
 * Created by Daniel on 2/17/2016.
 */

//  To interact with the DB - Use Mongoose ODM
//  Connection with DB  --  mongoose.connect(1,2)

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/social', function(){      // mongoose.connect(1,2)  1.  connect with Mongoose  2.  CB when connected

    console.log("MongoDB is Connected.  Mookers is barking");
});

module.exports = mongoose;      //  mongoose is the var declared above that is storing the mongoose MODULE
                                //  this MODULE is exposed and accessible by:  require('db')  db is the name of the file
                                // can access this mongoose MODULE by using the require function
                                // it is EXPOSED on the MODULE OBJECT