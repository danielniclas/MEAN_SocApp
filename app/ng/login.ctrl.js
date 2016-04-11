/**
 * Created by danielniclas on 4/8/16.
 */


var app = angular.module('app');

app.controller('LoginCtrl', function($scope,UserSvc){       //  CHILD CONTROLLER to ApplcationCtrl

    $scope.login = function (username, password){   //  Function exposed to Login Form

        UserSvc.login(username,password)           //  login.ctrl.js  >>  UserSvc.login()  >>>> returns USER JSON <<<<<

            .then(function(response){

                $scope.$emit('login', response.data);    //  emit() or bubble up the USER JSON >> application.ctrl
                                                         //  Pass this event from CHILD CONTROLLER (login.ctrl) up to PARENT CONTROLLER (application.ctrl) using $emit
                                                         //  $emit is an ANGULAR EVENT

                //console.log(user);                   //  DISPLAY USER  <<  This function displays data.  Does not RETURN an evaluated expression

            });




        setTimeout(interceptWatcher, 0);

        function interceptWatcher () {
            $scope.$watch('$rootScope.intercept', function (newValue, oldValue) {

                console.log("Watcher triggered");
                $scope.unauthorized = true;

            })
        }

    };

});