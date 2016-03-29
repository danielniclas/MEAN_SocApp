/**
 * Created by danielniclas on 1/4/16.
 */


//  GULP run nodemon on server-auth.js    > gulp dev:server to boot your app
//  It will automatically restart if there are any changes to files ending in .js


var gulp = require('gulp');

var nodemon = require('gulp-nodemon');

gulp.task('dev:server', function() {      //  task(1,2)  1.  name of task  2.  function to pass Object to nodemon

    nodemon({

        script:  'server.js',       //  <<  gulp dev:server BOOTS up app by running THIS SCRIPT
        ext: 'js',
        ignore: ['ng*', 'gulp*', 'assets*']   //  IGNORE:  ng files, gulp files and assets files

    })
});