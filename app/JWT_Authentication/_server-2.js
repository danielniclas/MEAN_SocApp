/**
 * Created by danielniclas on 4/7/16.
 */


//  SERVER TO GENERATE AND DECODE TOKENSß


var express = require('express');
var jwt = require('jwt-simple');
var _ = require('lodash');



var app = express();
app.use(require('body-parser').json());

var users = [{username: 'Kooster', password: 'pass'}, {username: 'Mookors', password: 'sass'}, {username: 'Barn', password: 'grass'}];      //  Simulated DB of users - plain text passwords (not safe)
var secretKey = 'supersecretkey';           //  Key



//  Helper Functions:

function findUserByUsername(username){               //  _.find(1,2)  1.  Array to search  2. {} Object to search for
    return _.find(users,{username: username});       //  _.find() is LOOPING through the [users] ARRAY and looking for the OBJECT with {username: username}
}                                                    //  RETURN the MATCHING OBJECT

function validateUser(user, password){
    return user.password === password;               //  Return TRUE or FALSE  <<  Chekcing if username matches the password
}




//  POST or send USERNAME and KEY and get as a response:  JWT

app.post('/session', function(req, res, next){

    console.log("Inside app.post('/session', CB ): ");

    var user = findUserByUsername(req.body.username);               //  Find user passed in with POST in the {users} array and assign to user
    if(!validateUser(user, req.body.password)){                     //  Check if user if user password matches the entered password
        return res.send(401);                                       //  << If not:  unauthorized
    }
    var token = jwt.encode({username: user.username}, secretKey);   //  <<  If yes:  CREATE encode() JWT with the username + secretKey  AND CREATE TOKEN and SIGN the username
    res.json(token);                                                //  respond with the token

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
    console.log('The Node server is listening on 3000 -> JWT _server-2.js Node App')
});