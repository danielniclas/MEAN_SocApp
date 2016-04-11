/**
 * Created by danielniclas on 4/10/16.
 */


var router = require('express').Router();
var bcrypt = require('bcrypt');
var jwt    = require('jwt-simple');
var User   = require('../../models/user');      //  db Schema for username and password
var config = require('../../config');           //  {secret: 'supersecretKey'};


router.get('/', function(req, res, next){           //  GET user data
    if (!req.headers['x-auth']){
        return res.send(401)
    }
    var auth = jwt.decode(req.headers['x-auth'], config.secret);        //  JWT decode()  << authorize the user name with JWT token  <<  Get USER info from JWT
    User.findOne({username: auth.username}, function(err, user){        //  findOne() username >> auth.username >> user data
        if (err) {return next(err)}
        res.json(user)
    })
});


router.post('/', function (req, res, next) {

    console.log("In controllers/api/users >>  router.post()");
    console.log(req.body.password);

    var user = new User({username: req.body.username});             //  Create NEW USER with username from CURL
    bcrypt.hash(req.body.password, 10, function (err, hash) {       //  Create password HASH with bcrypt with password from CURL
        if (err) { return next(err) }
        user.password = hash;                                       //  Set user password to >> HASH (now have username and password (HASH) )
        user.save(function (err) {                                  //  Save NEW USER
            if (err) { return next(err) }
            res.sendStatus(201);                                    //  Status 201:  Created  <<  prints out to console
        })
    })
});



module.exports = router;



//  CURL to create NEW USERS and test with ANGULAR login functionality:

//  Entered:

//  curl -X POST -d '{"username": "Kooster", "password": "pass"}' -H "Content-Type: application/json" localhost:3000/api/users

//  curl -X POST -d '{"username": "Nockels", "password": "pass"}' -H "Content-Type: application/json" localhost:3000/api/users

//  curl -X POST -d '{"username": "Nibbs", "password": "snap"}' -H "Content-Type: application/json" localhost:3000/api/users

//  curl -X POST -d '{"username": "Mook", "password": "jib"}' -H "Content-Type: application/json" localhost:3000/api/users