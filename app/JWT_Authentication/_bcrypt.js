/**
 * Created by danielniclas on 4/7/16.
 */

var password = "pass";

var app = require('bcrypt');

var hash = app.hashSync(password,10);       //  CREATE HASH  -- hash the string 'pass' with 10 passes - very secure

console.log("Hash Value: " + hash);

//  Validate the password with the hash value:

var result = app.compareSync(password,hash);    //  COMPARE HASH with PASSWORD - return true or false

console.log("Compare Password: " + password + " with Hash Value: " + hash + " is:  " + result);
