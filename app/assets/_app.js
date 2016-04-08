/**
 * Created by danielniclas on 4/7/16.
 */




//  Example file:  Full file of the Angular fragments included in the 'ng' directory <<  GULP will concatenate + minify >>  app.js file (in assets)



var app = angular.module('app', []);

app.service('PostsSvc', function($http){        //  SERVICE >> returns the FUNCTION

    this.fetch = function(){
        return $http.get('/api/posts');          //  Connecting with API in Express  >>  GET request
    };
    this.create = function(post) {
        return $http.post('/api/posts',post);    //  Connecting with API in Express  >> POST request
    }
});



app.controller('PostsCtrl', function ($scope, PostsSvc) {

    console.log("USING: _app.js");

    $scope.addPost = function() {

        if ($scope.postBody){
            PostsSvc.create({
                username:  'Mookers',
                body: $scope.postBody
            }).success(function(post){
                $scope.posts.unshift(post);
                $scope.postBody = null
            })
        }
    };



    //$scope.addPost = function(){
    //
    //    if($scope.postBody){                //postBody is the value of the input field
    //
    //        $http.post('/api/posts', {
    //            username:  'Mookers',
    //            body: $scope.postBody
    //        })
    //
    //            .success(function(post) {                    //  $http RETURNS A PROMISE OBJECT !!!!
    //
    //                $scope.posts.unshift(post);
    //                $scope.postBody = null;          //  set postBody value to NULL
    //            });
    //
    //
    //        $scope.postBody = null;
    //    }
    //};


    PostsSvc.fetch().success(function(posts){       //  Using Service
        $scope.posts = posts;
    });


    //$http.get('http://localhost:3000/api/posts')        //  Get [posts] ARRAY  (this code replaces the [post] ARRAY below
    //    .success(function (posts) {                 //  $http returns a PROMISE OBJECT
    //        $scope.posts = _posts
    //    });

});
