/**
 * Created by danielniclas on 4/8/16.
 */


var app = angular.module('app');

app.controller('LoginCtrl', function($scope,UserSvc){
    $scope.login = function (username, password){

        UserSvc.login(username,password)           //  login.ctrl.js  >>  UserSvc.login()  >> returns USER <<<<<

            .then(function(user){
                console.log(user);                   //  DISPLAY USER  <<  This function displays data.  Does not RETURN an evaluated expression
            })
    }
});