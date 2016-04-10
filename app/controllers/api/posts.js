/**
 * Created by danielniclas on 1/3/16.
 */

var Post = require('../../models/post');            //  Require the DATA MODEL from ./models/post(.js)
var router = require('express').Router();           //  Use Express Router OBJECT - Router Object acts like an App object


//  EXPRESS  --  API CONTROLLER:
//  GET API Endpoint:  /api/posts

router.get('/', function (req, res, next) {       //  Parameter 1:  URL path that will respond with res.json  <<  This is the [router} OBJECT that is EXPORTED with module.exports (below)
    //  stubbed json at:  http://localhost:3000/api/posts
    //  Parameter 2:  callBack function

    Post.find()                         //  Post is the DATA MODEL.  Call find() on POST MODEL

        .sort('-date')                  //  sort by date
        .exec(function(err, posts) {    //  now execute the function


            if (err) {return next (err)}
            res.json(posts);                //  RESPONSE:  returning the posts OBJECTS from MONGO as JSON ARRAY
                                            //  RETURN (response) posts as JSON [ARRAY]

        });
});

//  POST API Endpoint:  /api/posts      --  THIS WILL ADD NEW OBJECT TO MONGO DB !!!

router.post('/', function(req, res, next){        //  Parameter 1:  URL path that will respond with post.save

    var post = new Post({                               //  CREATE POST OBJECT - Constructor Function (MONGOOSE Post Object)

        username: req.body.username,                    //  req.body (body of req OBJECT) .username and .body
        body: req.body.body


    });

    post.save(function (err, post) {                    //  SAVE MONGOOSE Post Model  -- Save OBJECT to MONGO
        if (err) {
            console.log("Posting Error to Mongo");
            return next(err)
        }

        res.status(201).json(post);
        console.log("Posted New OBJECT to MONGO!!");
    })
});

module.exports = router;        //  EXPORTED as router OBJECT >>  to server.js