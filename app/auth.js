/**
 * Created by danielniclas on 4/10/16.
 */


var jwt = require('jwt-simple');
var config = require('./config');  //  << config.secret

module.exports = function(req,res,next){
    if(req.headers['x-auth']){
        req.auth = jwt.decode(req.headers['x-auth'], config.secret);     // Setting req.auth to decoded JWT
                                                                         //  This middleware attaches an auth object ot the requests for you to look up the current users information
    }
    next()
};