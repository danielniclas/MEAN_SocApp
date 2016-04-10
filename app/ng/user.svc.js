/**
 * Created by danielniclas on 4/8/16.
 */


var app = angular.module('app');

app.service('UserSvc',function($http){

    var svc = this;

    svc.getUser = function(){

        return $http.get('/api/users',{
            headers: {'X-Auth': this.token}         //  ??  can this.token be replaced with svc.token ??
        })
    };

    svc.login = function (username, password){       // <<  UserSvc.login(username,password)  INVOKED in Controller  <<<<  ng-submit in login.html

        return $http.post('/api/sessions', {username: username, password: password})         //  1.  RESOLVE THIS  (RETURN)
                                                                                             //  <<  CURL -- UserSvc.login(username, password) returns a function
                                                                                             //  POST username and password >>  compare password with HASH password >>  generate JWT TOKEN
                                                                                             //  <<  CURL!!  check:  server-auth.js

            .then(function (val){                   //  val is the OBJECT returned from $http.post >>  {val}
                    svc.token = val.data;           //  val.data = JWT TOKEN  assign to:   UserSvc.token
                    return svc.getUser();           //  INVOKE UserSvc.getUser()  and >>>>>> RETURN the USER {OBJECT}  <<  RESOLVE THIS
                })
    }
});

//  RETURN  <<  anything after RETURN is RESOLVED and returned to the INVOKATION statement



//  Login has two steps:
//  1.  Call POST /api/sessions to get >> JWT TOKEN
//  2.  GET /api/users  to get currently logged in users information


//  Check NETWORK TAB in CHROME  >>  sessions >>  will show the username and password being PASSED
