/**
 * Created by Daniel on 2/17/2016.
 */

//  BUILDING A NODE.JS API  >>  To the DB
//  TO LAUNCH THIS APP:  nodemon expressServer1.js

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());                     //  app is using this bodyParser.json()

//  This is the basic NODE REQUEST:


//  GET FROM DB     GET FROM DB     GET FROM DB     GET FROM DB  <<  REST API  REST API  REST API

//  a GET Request at this path INVOKES this function:
app.get('/api/posts',function(req,res, next){         //  app.get(1,2) 1.  Path  2.  CB res.json(1)  1.  array with one object
    res.json([
        {
            username: 'Mookers',                //  This is what you get back when you visit the path:  /api/posts
            body:  'expressServer1.js bones are yummy'
        }
    ])
});


// TO DB    TO DB     TO DB     TO DB    TO DB   TO DB

//  a POST Request at this path INVOKES this function:
var Post = require('./models/posts');        //  require the Post MODEL
app.post('/api/posts', function (req, res, next) {  //  POST TO DB!!!
                                                    // app.post(1,2)  1.  path  2.  CB
                                                    //  when a request comes in, you build up a new instance of the Post MODEL

    //var post = new Post({
    //    username: req.body.username,
    //    body: req.body.body
    //});

                                    //  When the POST request comes in, build a new instance of the Post model with new Post()
    var post = new Post({           //  This is what goes to the DB
        username: 'Kooster',
        body: 'expressServer1.js Chew Bones'
    });

    post.save(function(err,post){     //  Save that Post MODEL

        if (err) {return next(err)}    //  ERROR:  next() callback with argument, triggers 500 in Express << probably DB having problems
        res.json(201,post);            //  RETURN a JSON representation of the MODEL, with status code 201 << SAVE TO DB
    })
});


app.listen(3000, function(){
    console.log("Express Web Server on Port 3000");
});


//  access in browser:  http://localhost:3000/api/posts