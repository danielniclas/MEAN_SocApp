/**
 * Created by danielniclas on 12/27/15.
 */

var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');                        //  Require the DATA MODEL from ./models/post(.js)

var app = express();
app.use(bodyParser.json());


//  API for the Angular App:    The URL is the ACCESS PT`


app.get('/', function (req, res) {                //  1.  GET Endpoint:  '/'  (This is the Landing Page - Shell Page)

    res.sendfile('layouts/_posts.html')

});

//  GET API Endpoint:  /api/posts

app.get('/api/posts', function (req, res, next) {       //  Parameter 1:  URL path that will respond with res.json
                                                            //  stubbed json at:  http://localhost:3000/api/posts
                                                            //  Parameter 2:  callBack function

    Post.find()                         //  Post is the DATA MODEL.  Call find() on POST MODEL

        .sort('-date')                  //  sort by date
        .exec(function(err, posts) {    //  now execute the function


        if (err) {return next (err)}
        res.json(posts);                //  RESPONSE:  returning the posts OBJECTS from MONGO as JSON ARRAY
                                        //  RETURN (response) posts as JSON [ARRAY]


        });


    //res.json([
    //    {
    //        username: 'Koostor',
    //        body: "I am a picky eater"
    //    },
    //    {
    //        username: "MooKORS",
    //        body: "My shmuzzle is bristly"
    //    }
    //])
});

//  POST API Endpoint:  /api/posts      --  THIS WILL ADD NEW OBJECT TO MONGO DB !!!

app.post('/api/posts', function(req, res, next){        //  Parameter 1:  URL path that will respond with post.save

    var post = new Post({                               //  CREATE POST OBJECT - Constructor Function (MONGOOSE Post Object)

        username: req.body.username,                    //  req.body (body of req OBJECT) .username and .body
        body: req.body.body

        //username: "SuperMook",
        //body: "Munch Bones and Jib"

        });

    post.save(function (err, post) {                    //  SAVE MONGOOSE Post Model  -- Save OBJECT to MONGO
        if (err) {
            console.log("Posting Error to Mongo");
            return next(err)
        }

        res.status(201).json(post)
        console.log("Posted New OBJECT to MONGO!!");
    })
});


//app.post('/api/posts', function(req, res){
//    console.log('Post received!');
//    console.log('req.body.username ' + req.body.username);
//    console.log('req.body.body ' + req.body.body);
//    res.sendStatus(201);
//
//});




app.listen(3000, function() {
    console.log('The Node server is listening on 3000 - _server.js Node App')
});

