/**
 * Created by danielniclas on 1/4/16.
 */

angular.module('app');          //  GETTER MODULE

app.controller('PostsCtrl', function ($scope, PostsSvc) {

    $scope.addPost = function(){

        if($scope.postBody){                //postBody is the value of the input field

            post = {
                username:  'MookersService',
                body: $scope.postBody
            };

            PostsSvc.create(post)


                //$http.post('/api/posts', {      //  $http request to ENDPOINT  --  To Node API
                //    //  post(1,2)   1.  /api/post/ endpoint Node API, 2.  OBJECT to post
                //    //  CREATE OBJECT:
                //
                //    username:  'Mookers',
                //    body: $scope.postBody
                //})

                .success(function(post) {                    //  $http RETURNS A PROMISE OBJECT !!!!

                    $scope.posts.unshift(post);     //  if creating new OBJECT is success -> Add object to [posts] ARRAY
                                                    //  array.unshift() --  add new items to the beginning of an array
                                                    //  Angular is managing the ARRAY !!!  as part of $scope

                    $scope.postBody = null;          //  set postBody value to NULL
                });

            $scope.postBody = null;
        }
    };


    // $http.get('http://localhost:3000/api/posts')        //  Get [posts] ARRAY  (this code replaces the [post] ARRAY below

    PostsSvc.fetch()


        .success(function (posts) {                     //  $http returns a PROMISE OBJECT
            $scope.posts = posts
        });

});
