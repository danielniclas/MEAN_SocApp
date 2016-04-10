/**
 * Created by danielniclas on 4/10/16.
 */


var router = require('express').Router();
var User = require('../../models/user');        //  db Schema for username and password
var bcrypt = require('bcrypt');
var jwt = require('jwt-simple');
var config = require('../../config');           //  {secret: 'supersecretKey'};



router.post('/', function(req,res,next){                //  This is the [router} OBJECT that is EXPORTED with module.exports (below)

    User.findOne({username: req.body.username})
        .select('password').select('username')

        .exec(function(err, user){
            if(err) {return next(err)}
            if(!user) {return res.send(401)}

            bcrypt.compare(req.body.password, user.password, function(err, valid){      //  bcrypt compare() password STRING with password HASH
                if (err) {return next(err)}
                if (!valid){return res.send(401)}
                var token = jwt.encode({username: user.username}, config.secret);       //  generate JWT TOKEN
                res.send(token);                                                         //  This JWT is what the client will need for ALL FUTURE AUTHENTICATED REQUESTS
            })
        })
});

module.exports = router;        //  EXPORTED as router OBJECT >>  to server.js