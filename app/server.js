/**
 * Created by danielniclas on 1/3/16.
 */

//  EXPRESS App Entry Point
//  Most Express Apps have a single entry point like this to start an instance of a server

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


// app.use(require('./controllers/api/posts'));             //  This file using the Express Router OBJECT  --  Get/Post Endpoints

//  pg 61 --  MIDDLEWARE  app.use()
//  REQUIRE:  ENDPOINTS  --  These files EXPORT the Router OBJECT

//  Parameter 1:  API PATHS!!!!  Entered in as URLs and USED by ANGULAR

app.use('/api/posts', require('./controllers/api/posts'));  //  CONTROLLERS:  POSTS >> .use(1,2)  1.  NAMESPACE the routes (ENDPOINT) 2.  Required file
app.use('/', require('./controllers/static'));              //  CONTROLLERS:  STATIC CONTENT:  Shell Page:  posts.html, app.css, app.js



app.listen(3000, function() {
    console.log('The Node server is listening on 3000 -> server.js Node App  >> SERVER.JS')
});
