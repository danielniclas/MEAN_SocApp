/**
 * Created by danielniclas on 1/4/16.
 */


//  Gulp sequence:
//  npm install
//  require()
//  Add to pipe() sequence



var gulp = require('gulp');     //  Create Gulp OBJECT

//  Read in all of the files under /gulp:
//  Any files added to /gulp will be automatically included  --  pg 81


//  TRACK THE FOLLOWING FILES WITH GULP:            >  gulp watch

var fs = require('fs');
fs.readdirSync(__dirname + '/gulp')             //  Read the files in the gulp DIRECTORY

    .forEach(function (task) {
        require('./gulp/scripts.js');           //  require the MODULE:  ./gulp/scripts.js
        require('./gulp/css.js');               //  require the MODULE:  ./gulp/css.js
        require('./gulp/server.js');
    });

//  Gulp METATASK:

gulp.task('dev', ['watch:js', 'watch:css', 'dev:server']);


//  >gulp dev -- will run all the processes you need to build the application




