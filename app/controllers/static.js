/**
 * Created by danielniclas on 1/3/16.
 */


//  EXPRESS -- Routes to Static Content:

var express = require('express');
var router = express.Router();                      //  Use Express Router OBJECT - Router Object acts like an App object




router.use(express.static(__dirname + '/../assets'));   //  Express built-in middleware to SERVE STATIC ASSETS (stored in 'assets' directory)
                                                        //  __directory is a Node variable that points to the current file's directory (controllers)
                                                        //  Static Assets:  app.js and app.css  (and also _ap.js)

router.use(express.static(__dirname + '/../templates'));



router.get('/', function (req, res) {                //  1.  GET Endpoint:  '/'  (This is the Landing Page - Shell Page)

    //res.sendfile('layouts/_posts2.html');
    res.sendFile('/Users/danielniclas/Documents/AAA_Education/MEAN_dev_and_design/app/layouts/shell.html');   //  <<  This DOES WORK -- Absolute Path


    // res.sendFile(__dirname + '/../layouts/_posts2.html');   //  <<  This totally does not work - don't know why
    // res.render('_posts2.html')

});



module.exports = router;                            //  EXPORTED as router OBJECT >>  to server-auth.js


