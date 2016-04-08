/**
 * Created by danielniclas on 4/7/16.
 */

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



app.post('/session', function(req, res, next){

    User.find({username: req.body.username}, function (err, user){           //  session is now looking into MONGO  User.findOne()

        res.send("/SESSION USER:  " + user);


        //if (err) {return next(err)}
        //if (!user) {return res.send(401)}

        //bcrypt.compare(req.body.password, user.password, function(err,valid){
        //    if (err){return next(err)}
        //    if(!valid){return res.send(401)}
        //    var token = jwt.encode({username: user.username}, secretKey);
        //    res.json(token)
        //})
    })
});


//  SESSION:
//  > curl -X POST -d '{"username": "Kooster", "password":"pass"}' -H "Content-Type:  application/json" localhost:3000/session
//  Get this JWT:  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iktvb3N0ZXIifQ.JdG-TLrzlK0zhBSce_kOLRoOFeRLqxovzpmZNUddc9M




app.get('/user', function(req,res){

    var token = req.headers['x-auth'];
    var auth = jwt.decode(token, secretKey);
    User.findOne({username: auth.username}, function (err, user){
        res.json(user)
    })
});

//  curl GET:
//  > curl -H "X-Auth: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iktvb3N0ZXIifQ.JdG-TLrzlK0zhBSce_kOLRoOFeRLqxovzpmZNUddc9M" localhost:3000/user
//  Get the decrypted token:  {"username":"Kooster"}



app.listen(3000, function() {
    console.log('The Node server is listening on 3000 -> JWT _server-mongo.js Node App')
});

