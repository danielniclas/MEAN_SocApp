/**
 * Created by danielniclas on 4/7/16.
 */

//  SERVER TO GENERATE AND DECODE TOKENS >>  JWT + BCRYPT HASH


var express = require('express');
var jwt = require('jwt-simple');
var _ = require('lodash');
var app = express();
var bcrypt = require('bcrypt');
app.use(require('body-parser').json());



var users = [{username: 'Kooster', password: '$2a$10$F6vA1VDc.1CKgiHebkJPyOqJH3d4xTE5B6NbRJYGf/WwGFWvbmNgO'}];      //  Simulated DB of users - HASH form of passwords (SAFE)
var secretKey = 'supersecretkey';           //  Key



//  Helper Functions:

function findUserByUsername(username){               //  _.find(1,2)  1.  Array to search  2. {} Object to search for
    return _.find(users,{username: username});       //  _.find() is LOOPING through the [users] ARRAY and looking for the OBJECT with {username: username}
}                                                    //  RETURN the MATCHING OBJECT

function validateUser(user, password, callBack){
    return bcrypt.compare(password, user.password, callBack);     //  Compare password with HASH value - synchronously with Call Back
}




//  POST or send USERNAME and KEY and get as a response:  JWT

app.post('/session', function(req, res, next) {

    console.log("Inside app.post('/session', CB ): ");

    var user = findUserByUsername(req.body.username);                   //  Find user passed in with POST in the {users} array and assign {user} OBJECT to var = user
    validateUser(user, req.body.password, function (err, valid) {        //  Call Bach function included for asynchronous validation
        if (err || !valid) {
            return res.send(401)
        }                        //  << If not:  unauthorized
        var token = jwt.encode({username: user.username}, secretKey);    //  <<  If yes:  CREATE encode() JWT with the username + secretKey  AND CREATE TOKEN and SIGN the username
        res.json(token);                                                  //  respond with the token
    });
});


//  curl POST:  <<  Open new terminal below and enter:
//  > curl -X POST -d '{"username": "Kooster", "password":"pass"}' -H "Content-Type:  application/json" localhost:3000/session
//  Get this JWT:  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iktvb3N0ZXIifQ.JdG-TLrzlK0zhBSce_kOLRoOFeRLqxovzpmZNUddc9M



//  GET request and returns the user:  {"username":"Kooster"}

//  To GET DECRYPTED TOKEN:
app.get('/user', function (req, res) {

    var token = req.headers['x-auth'];          //  Header:  X-auth   --  have to add x- to the front

    var user = jwt.decode(token, secretKey);    //  decode() the token
    // TODO:  pull user info from database
    res.json(user);

});

//  curl GET:
//  > curl -H "X-Auth: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iktvb3N0ZXIifQ.JdG-TLrzlK0zhBSce_kOLRoOFeRLqxovzpmZNUddc9M" localhost:3000/user
//  Get the decrypted token:  {"username":"Kooster"}


app.listen(3000, function() {
    console.log('The Node server is listening on 3000 -> JWT _server-3.js Node App')
});
