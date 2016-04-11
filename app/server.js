/**
 * Created by danielniclas on 1/3/16.
 */

//  EXPRESS App Entry Point
//  Most Express Apps have a single entry point like this to start an instance of a server

var express = require('express');
var bodyParser = require('body-parser');

var app = express();




app.use(bodyParser.json());


//  This file using the Express Router OBJECT  --  Get/Post Endpoints
//  ALL THE require() ENDPOINTS are made available with:  module.exports = router;

//  router.get()
//  router.post()

//  pg 61 --  MIDDLEWARE  app.use()
//  require(1. name for router, 2. routers):  ENDPOINTS  >>  These files EXPORT the Router OBJECT

//  MOUNT CONTROLLERS (Middleware):      <<  EndPoints called by the Angular Services
//  Made available here with:  module.exports = router;


app.use(require('./auth'));          //  Use JWT to get username information  >> used in: /controllers/api/posts.js

                                                            //  Parameter 1:  API PATHS!  Entered in as URLs and USED by ANGULAR << in controller leave out that part of the path >> router.get('/', function (req, res, next)
app.use('/api/posts', require('./controllers/api/posts'));  //  CONTROLLERS:  GET & POSTS >> .use(1,2)  1.  NAMESPACE the routes (ENDPOINT:: /api/posts) 2.  Required file
app.use('/', require('./controllers/static'));              //  CONTROLLERS >>  STATIC CONTENT:  Shell Page: layouts/_posts2.html, app.css, app.js


app.use('/api/sessions', require('./controllers/api/sessions'));
app.use('/api/users', require('./controllers/api/users'));


//app.use(require('./controllers'));




app.listen(3000, function() {
    console.log('The Node server is listening on 3000 -> server.js Node App  >> SERVER.JS')
});



//  server.js   posts.js  static.js  <<  THESE ARE THE API FILES

//  server.js  <<  MIDDLEWARE  app.use()  for GET/POST and STATIC CONTENT  <<  STARTING POINT FOR APP!!!!!!
//  posts.js   <<  router.get() and router.post()  <<  INTERFACE WITH DB
//  static.js  <<  router.get() for layouts/_posts2.html and router.use() for STATIC CONTENT