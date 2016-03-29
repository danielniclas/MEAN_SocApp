/**
 * Created by Daniel on 2/17/2016.
 */

//  BUILDING A NODE.JS API  >>
//  This is a full API to READ and WRITE from to support the ANGULAR APP
//  TO AUNCH THIS APP:  nodemon expressServer1.js

var express = require('express');
var bodyParser = require('body-parser');     //  body-parser used for express to read in JSON on POST requests automatically

var app = express();
app.use(bodyParser.json());                  //  app is using this bodyParser.json()

var Post = require('./models/posts');        //  require the Post MODEL -- that is connected to DB with Mongoose

//  GET FROM DB     GET FROM DB     GET FROM DB     GET FROM DB

//  DATA API:  ENDPOINT  >>  GET DATA (QUERY)
//  This is called an ENDPOINT:  Express Server will get the DATA available from this FILE
//  When the following PATH is entered into the browser:  http://localhost:3000/api/posts  >>  triggers CB functin
//  The /api/posts FILE contains the MODEL for the MONGO DB

//  a GET Request at this path INVOKES this function:
app.get('/api/posts',function(req,res, next){         //  app.get(1,2) 1. URL Path  2.  CB res.json(1)  1.  array with one object

    Post.find()                         //  Post.find()  FIND or GET the POSTS -- Call find() on the Posts MONGOOSE MODEL
        .sort('-date')                  //  sort posts by Date -- Before CB   (Mongoose:  chaining the query)
        .exec(function(err,posts){      //  re-add CB       (Mongoose:  chaining the query)
        if (err) {return next(err)}
        res.json(posts);                 //  When the request returns, render the posts as JSON
    })
});



//  ENDPOINT  for:  /  (Home):  http://localhost:3000/
//  a GET Request at this path (HOME PAGE) INVOKES this function:
app.get('/', function(req,res){
    res.sendfile('layouts/MEAN2.html');      //  This CB function will respond with the Angular SHELLPAGE:  MEAN2.html
});



// POST TO DB    POST TO DB     POST TO DB     POST TO DB    POST TO DB   POST TO DB
//  DATA API:  ENDPOINT  >>  POST DATA
//  a POST Request at this path INVOKES this function:
app.post('/api/posts', function (req, res, next) {  //  POST TO DB!!!
    // app.post(1,2)  1.  path  2.  CB
    //  when a request comes in, you build up a new instance of the Post MODEL

    var post = new Post({                   //  This OBJECT is what goes to the DB >> new MONGOOSE MODEL
        username: req.body.username,
        body: req.body.body
    });

    //var post = new Post({                   //  This OBJECT is what goes to the DB
    //    username: 'Kooster',
    //    body: 'Grind Bones'
    //});

    post.save(function(err,post){           //  post.save()  SAVE that Post MODEL and return a JSON representation of the model
        // to the user with status code 201
        if (err) {return next(err)}
        res.json(201,post);                  //  Once the post is SAVED a reponse is returned with the JSON POST
    })
});


app.listen(3000, function(){
    console.log("Express Web Server on Port 3000");
});


//  access in browser:  http://localhost:3000/api/posts