/**
 * Created by danielniclas on 1/5/16.
 */

//  AUTHENTICATION API -- with express, jwt-simple, bcrypt and body-parser


//  Create user:  provide username and password (string) >> bcrypt.hash() >> store in DB:  username and password (HASH)
//  Session:  Send username and password (string) >> bcrypt.comppare() >> compare password (string) with password (HASH)  >>  create and respond with JWT TOKEN
//  GET user data:  Access JWT TOKEN from Request Header and respond with USER DATA


//  Route:  POST /user       1.  Create new User OBJECT (Mongoose)  2. Hash the password with BCRYPT  3.  Store the User OBJECT in the DB  {username, password-HASH}
//  Route:  POST /session    1.  User login:  username, password  2.  User.findOne() Search DB for {username, password-HASH}  3.  BCRYPT.compare(entered password, HASH password)  4.  generate JWT TOKEN - signed by the 'key'
//  Route:  GET  /user       1.  GET token  2. decode token  3.  Get user data from DB


var express = require('express');
var jwt     = require('jwt-simple');
var bcrypt  = require('bcrypt');
var User    = require('./user');

var app     = express();
app.use(require('body-parser').json());

var secretKey = 'supersecretkey';



//  Validate password
//  WARNING: Entering multiple users of the same name in this example will cause /session to crash


app.post('/session', function (req, res, next) {        //  POST username and password >>  compare password with HASH password >>  generate TOKEN
    var username = req.body.username;
    User.findOne({username: username})
        .select('password')
        .exec(function (err, user) {
            if (err) { return next(err) }
            if (!user) { return res.sendStatus(401) }
            bcrypt.compare(req.body.password, user.password, function (err, valid) {
                if (err) { return next(err) }
                if (!valid) { return res.sendStatus(401) }
                var token = jwt.encode({username: username}, secretKey);
                res.json(token);                                             //  <<  CREATE and RESPOND with JWT TOKEN
            })
        })
});

//  curl POST:
//  > curl -X POST -d '{"username": "Kooster", "password":"pass"}' -H "Content-Type:  application/json" localhost:3000/session
//  Get this JWT token:  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iktvb3N0ZXIifQ.JdG-TLrzlK0zhBSce_kOLRoOFeRLqxovzpmZNUddc9M


//  > curl -X POST -d '{"username": "Mookors", "password":"sass"}' -H "Content-Type:  application/json" localhost:3000/session
//  Get this JWT token:  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ik1vb2tvcnMifQ.mS5h5t_bDegkkkZLNZGcxtUNHhHwNbu0aunQm4JvjhU"



//  Use TOKEN to GET user data from DB:
app.get('/user', function (req, res) {

    var token = req.headers['x-auth'];                              //  Header >>  carries a TOKEN

    var auth = jwt.decode(token, secretKey);                        //  Decode the TOKEN
    User.findOne({username: auth.username}, function(err, user) {   //  Used decoded TOKEN to get user Data from DB

        res.json(user);                                              //  Respond with USER DATA

    });
});

//  curl GET:
//  > curl -H "X-Auth: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Iktvb3N0ZXIifQ.JdG-TLrzlK0zhBSce_kOLRoOFeRLqxovzpmZNUddc9M" localhost:3000/user
//  Get the decrypted token:  {"username":"Kooster"}


//  > curl -H "X-Auth: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Ik1vb2tvcnMifQ.mS5h5t_bDegkkkZLNZGcxtUNHhHwNbu0aunQm4JvjhU" localhost:3000/user
//  >>  {"_id":"57073958b36c813b954382ab","username":"Mookors","__v":0}  <<  notice no PASSWORD returned


//  CREATE: route POST - user to create new user accounts to MONGO DB

//  Create User:

app.post('/user', function(req, res, next){

    console.log("Password: " + req.body.password);

    var user = new User({username: req.body.username});             //  >>  CREATING NEW USER + bcrypt-generated HASH (for the password)
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





app.listen(3000, function() {
    console.log('The Node server is listening on 3000 -> JWT server-auth.js Node App')
});

