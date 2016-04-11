/**
 * Created by danielniclas on 4/10/16.
 */


var app = angular.module('app');

    app.service('authInterceptor', function($rootScope, $q) {

        var service = this;



        service.responseError = function(response) {
            if (response.status == 401){

                console.log("INTERCEPTOR ERROR 401");

                //window.location = "/login";

                $rootScope.intercept = "true"


            }
            return $q.reject(response);
        };
    });



    app .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }]);