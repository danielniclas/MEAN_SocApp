/**
 * Created by danielniclas on 4/8/16.
 */


var app = angular.module('app');

app.service('UserSvc',function($http){

    var svc = this;




    svc.getUser = function(){

        return $http.get('/api/users');         //  RETURN a JSON of the USER   >>  ENDS UP with application.ctrl

    };

    svc.login = function (username, password){       // <<  UserSvc.login(username,password)  INVOKED in Controller  <<<<  ng-submit in login.html

        return $http.post('/api/sessions', {username: username, password: password})         //  1.  RESOLVE THIS  (RETURN)
                                                                                             //  <<  CURL -- UserSvc.login(username, password)
                                                                                             //  POST username and password >>  compare password with HASH password >>  generate JWT TOKEN
                                                                                             //  <<  CURL!!  check:  server-auth.js

            .then(function (val){                   //  val is the OBJECT returned from $http.post >>  {val}
                    svc.token = val.data;           //  val.data = JWT TOKEN  assign to:   UserSvc.token

                    $http.defaults.headers.common['x-auth'] = val.data;     //  ALL REQUESTS will have this header attached  <<  user data from JWT


                    return svc.getUser();           //  INVOKE UserSvc.getUser()  and >>>>>> RETURN the USER {OBJECT}  <<  RESOLVE THIS
                })
    };


    svc.createUser = function(username, password){              //  REGISTRATION:  create user >>  login

        return $http.post('/api/users', {username: username, password: password})//  Resolve this first:  FIRST:  >>  CREATE THE USER and SAVE TO DB with /api/users

            .then(function(){

                return svc.login(username, password);               //  When done creating user >>  SECOND:  >> LOG IN  which ultimately returns JSON of USER >>  which then gets bubbled up with emit()

        })
    }

});

//  RETURN  <<  anything after RETURN is RESOLVED and returned to the INVOKATION statement



//  Login has two steps:
//  1.  Call POST /api/sessions to get >> JWT TOKEN
//  2.  GET /api/users  to get currently logged in users information


//  Check NETWORK TAB in CHROME  >>  sessions >>  will show the username and password being PASSED
