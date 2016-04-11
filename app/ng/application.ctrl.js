/**
 * Created by danielniclas on 4/10/16.
 */

var app = angular.module('app');
app.controller('ApplicationCtrl', function($scope, $rootScope){


    $scope.$on('login', function(_, user){              //  $scope.on (1.  name of Emitter, CB function)


        $scope.currentUser = user;                      //  This is where the USER JSON ends up!!!


    });


    $rootScope.intercept = false;

});