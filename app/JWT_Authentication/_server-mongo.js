/**
 * Created by danielniclas on 4/7/16.
 */



//  Route:  /user       1.  Create new User OBJECT (Mongoose)  2. Hash the password with BCRYPT  3.  Store the User OBJECT in the DB  {username, password-HASH}
//  Route:  /session    1.  User login:  username, password  2.  User.findOne() Search DB for {username, password-HASH}  3.  BCRYPT.compare(entered password, HASH password)  4.  generate JWT TOKEN - signed by the 'key'
//  Route: /get         1.  GET token  2. decode token  3.  Get user data from DB


var User = require('./_user');       //  Require mongoose Data Schema -- must be on top

var express = require('express');
var jwt = require('jwt-simple');
var _ = require('lodash');
var app = express();
var bcrypt = require('bcrypt');
app.use(require('body-parser').json());


var secretKey = 'supersecretkey';



//  Create User:

app.post('/user', function(req, res, next){

    console.log("Password: " + req.body.password);

    var user = new User({username: req.body.username});             //  CREATING NEW USER:   with a bcrypt-generated HASH (for the password)
    bcrypt.hash(req.body.password, 10, function (err, hash){

        user.password = hash;                   //  Add hash to password property in the USER object
        user.save(function(err, user){          //  I am hoping the save() is a DB function - with a call back for err or status code 201
            if (err) {throw next(err)}
            //res.send(201)
            res.send("/USER USER:  " + user)
        })
    })
});


//  To create a user with CURL:
//  > curl -X POST -d '{"username": "Kooster", "password": "pass"}' -H "Content-Type: application/json" localhost:3000/user

//  > curl -X POST -d '{"username": "Mookors", "password": "sass"}' -H "Content-Type: application/json" localhost:3000/user



//  Validate password
//  WARNING: Entering multiple users of the same name in this example will cause /session to crash

app.post('/session', function(req, res, next){

    User.findOne({username: req.body.username}, function (err, user){           //  session is now looking into MONGO  User.findOne()


        if (err) {return next(err)}
        if (!user) {return res.send(401)}
        //res.send("/SESSION USER:  " + user.password);


        bcrypt.compare(req.body.password, user.password, function(err,valid){
            if (err){return next(err)}
            if(!valid){return res.send(401)}
            var token = jwt.encode({username: user.username}, secretKey);
            res.json(token)
        })
    })
});


//  SESSION:
//  > curl -X POST -d '{"username": "Kooster", "password":"pass"}' -H "Content-Type:  application/json" localhost:3000/session
//  Get this JWT:  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iktvb3N0ZXIifQ.JdG-TLrzlK0zhBSce_kOLRoOFeRLqxovzpmZNUddc9M

//  > curl -X POST -d '{"username": "Mookors", "password":"sass"}' -H "Content-Type:  application/json" localhost:3000/session


//  Pull user info from DB:

app.get('/user', function(req,res){

    var token = req.headers['x-auth'];
    var auth = jwt.decode(token, secretKey);
    User.findOne({username: auth.username}, function (err, user){
        res.json(user)
    })
});

//  curl GET:
//  > curl -H "X-Auth: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ik1vb2tvcnMifQ.mS5h5t_bDegkkkZLNZGcxtUNHhHwNbu0aunQm4JvjhU" localhost:3000/user
//  Get the decrypted token:  {"username":"Mookers"}



app.listen(3000, function() {
    console.log('The Node server is listening on 3000 -> JWT _server-mongo.js Node App')
});

