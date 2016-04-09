/**
 * Created by danielniclas on 4/8/16.
 */


var app = angular.module('app');

app.service('UserSvc',function($http){

    var svc = this;
    svc.getUser = function(){
        return $http.get('/api/users',{
            headers: {'X-Auth': this.token}
        })
    };

    svc.login = function (username, password){
        return $http.post('/api/sessions',          //  UserSvc.login(username, password) returns a function
            {                                       //  POST username and password >>  compare password with HASH password >>  generate TOKEN
                username: username,                 //  <<  CURL!!  check:  server-auth.js
                password: password
            })
            .then(function (val){
                    svc.token = val.data;           //  val.data = TOKEN  assign to:   UserSvc.token
                    return svc.getUser()
                })
    }
});


//  Login has two steps:
//  1.  Call POST /api/sessions to get >> JWT TOKEN
//  2.  GET /api/users  to get currently logged in users information