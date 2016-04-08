/**
 * Created by danielniclas on 4/7/16.
 */


//  SERVER TO GENERATE AND DECODE TOKENS


var express = require('express');
var jwt = require('jwt-simple');
var app = express();
app.use(require('body-parser').json());


var secretKey = 'supersecretkey';


//  POST or send USERNAME and KEY and get as a response:  JWT

app.post('/session', function(req, res, next){

    var username = req.body.username;
    //  TODO:  Validate password

    var token = jwt.encode({username: username}, secretKey);
    res.json(token)

});

//  curl POST:  <<  Open new terminal below and enter:
//  > curl -X POST -d '{"username": "Kooster", "password":"pass"}' -H "Content-Type:  application/json" localhost:3000/session
//  Get this JWT:  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iktvb3N0ZXIifQ.JdG-TLrzlK0zhBSce_kOLRoOFeRLqxovzpmZNUddc9M



//  GET request and returns the user:  {"username":"Kooster"}

//  To GET DECRYPTED TOKEN:
app.get('/user', function (req, res) {

    var token = req.headers['x-auth'];          //  Header:  X-auth   --  have to add x- to the front

    var user = jwt.decode(token, secretKey);
    // TODO:  pull user info from database
    res.json(user);

});

//  curl GET:
//  > curl -H "X-Auth: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iktvb3N0ZXIifQ.JdG-TLrzlK0zhBSce_kOLRoOFeRLqxovzpmZNUddc9M" localhost:3000/user
//  Get the decrypted token:  {"username":"Kooster"}


app.listen(3000, function() {
    console.log('The Node server is listening on 3000 -> JWT server-auth.js Node App')
});

