/**
 * Created by danielniclas on 4/8/16.
 */


var app = angular.module('app');

app.config(function($routeProvider){


    $routeProvider
        .when('/', {
            controller: 'PostsCtrl',
            templateUrl: 'posts.html'
        })
        .when('/register', {
            controller: 'RegisterCtrl',
            templateUrl: 'register.html'
        })
        .when('/login', {
            controller: 'LoginCtrl',
            templateUrl: 'login.html'
        })
        .when('/register', {
            controller: 'RegistrationCtrl',
            templateUrl: 'register.html'
        })
});