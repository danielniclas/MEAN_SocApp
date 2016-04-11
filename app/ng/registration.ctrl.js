/**
 * Created by danielniclas on 4/10/16.
 */



var app = angular.module('app');

app.controller('RegistrationCtrl', function($scope,UserSvc){       //  CHILD CONTROLLER to ApplcationCtrl

    $scope.register = function (username, password){        //  function exposed to Register Form

        UserSvc.createUser(username,password)           //  login.ctrl.js  >>  UserSvc.login()  >>>> returns USER JSON <<<<<

            .then(function(response){

                $scope.$emit('login', response.data);    //  emit() or bubble up the USER JSON >> application.ctrl
                                                         //  Pass this event from CHILD CONTROLLER (login.ctrl) up to PARENT CONTROLLER (application.ctrl) using $emit
                                                         //  $emit is an ANGULAR EVENT

                //console.log(user);                   //  DISPLAY USER  <<  This function displays data.  Does not RETURN an evaluated expression
            })
    }
});