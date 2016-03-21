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

//  REQUIRE:  ENDPOINTS  --  These files EXPORT the Router OBJECT

app.use('/api/posts', require('./controllers/api/posts'));  //  .use(1,2)  1.  namespace the routes (ENDPOINT) 2.  Required file
app.use('/', require('./controllers/static'));              //  Shell Page:  _posts.html


app.listen(3000, function() {
    console.log('The Node server is listening on 3000 -> server.js Node App')
});
