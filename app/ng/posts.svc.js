/**
 * Created by danielniclas on 1/4/16.
 */


angular.module('app')


//  Service:

.service('PostsSvc', function ($http) {

    this.fetch = function () {
        return $http.get('api/posts');                 //  $http.get() SERVICE  -- returns a PROMISE
    };
    this.create = function (post) {                     //  $http.post() SERVICE --  returns a PROMISE
        return $http.post('api/posts', post)
    }
});