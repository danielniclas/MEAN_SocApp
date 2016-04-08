/**
 * Created by danielniclas on 1/5/16.
 */


var User = require('./user');       //  Require mongoose Data Schema -- must be on top

var express = require('express');
var jwt = require('jwt-simple');
var _ = require('lodash');
var app = express();
var bcrypt = require('bcrypt');
app.use(require('body-parser').json());


var secretKey = 'supersecretkey';



//  LOOK INTO MONGO FOR CORRESPONDING USERS:

app.post('/session', function(req, res, next){

    User.findOne({username: req.body.username})     //  Mongoose findOne(1,2) METHOD

        .select('password')     //  Top of page 99 --  need to pull the PASSWORD HASH
        .exec(function (err, user) {

            if (err) {return next (err)}
            if (!user) {return res.send(401)}
            bcrypt.compare(req.body.password, user.password, function (err, valid) {

            if (err) {return next(err)}
            if (!valid) {return rfes.send(401)}
            var token = jwt.encode({username: user.username}, secretKey);
            res.json(token)
        })
    });
});

//  curl POST:
//  > curl -X POST -d '{"username": "Kooster", "password":"pass"}' -H "Content-Type:  application/json" localhost:3000/session
//  Get this JWT:  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iktvb3N0ZXIifQ.JdG-TLrzlK0zhBSce_kOLRoOFeRLqxovzpmZNUddc9M




//  To GET DECRYPTED TOKEN:
app.get('/user', function (req, res) {

    var token = req.headers['x-auth'];          //  Header:  X-auth   --  have to add x- to the front

    var auth = jwt.decode(token, secretKey);
    User.findOne({username: auth.username}, function(err, user) {

        res.json(user)

    });
});

//  curl GET:
//  > curl -H "X-Auth: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iktvb3N0ZXIifQ.JdG-TLrzlK0zhBSce_kOLRoOFeRLqxovzpmZNUddc9M" localhost:3000/user
//  Get the decrypted token:  {"username":"Kooster"}



//  CREATE: route POST - user to create new user accounts to MONGO DB

app.post('/user', function(req, res, next) {

    var user = new User({username: req.body.username});             //  Create User {OBJECT}
    bcrypt.hash(req.body.password, 10, function(err, hash){         //  bcrypt HASH

        user.password = hash;
        user.save(function(err, user) {

            if (err) {throw next(err) }
            res.send(201)
        })
    });

//  To create a user with CURL:
//  > curl -X POST -d '{"username": "Kooster", "password": "pass"}' -H "Content-Type: application/json" localhost:3000/user

});



app.listen(3000, function() {
    console.log('The Node server is listening on 3000 -> JWT server-auth.js Node App')
});

