/**
 * Created by danielniclas on 1/4/16.
 */



//  GULP processing of the ANGULAR SCRIPTS in ng DIRECTORY --  process + re-rerun processing every time an ng file is changed

var gulp = require('gulp');     //  Create Gulp OBJECT

//  Gulp FEATURES:
var concat = require('gulp-concat');            //  Gulp CONCAT         <<  CONCAT FILES
var sourcemaps = require('gulp-sourcemaps');    //  Gulp SOURCEMAPS     <<  help with de-bugging when dealing with minified code  pg 78 << friendly call Stack
var uglify = require('gulp-uglify');            //  Gulp UGLIFY         <<  MINIFY FILE  (Careful - Angular is incompatible with JS minifiers)
var ngAnnotate = require('gulp-ng-annotate');   //  Gulp ngANNOTATE     <<  FIXES ANGULAR MINIFICATION!!!  re-writes Angular code >>  minification friendly syntax


gulp.task('js', function(){                     //  js is the NAME of the task:  > gulp js

    gulp.src(['ng/module.js', 'ng/**/*.js'])//  Load /ng/module.js FIRST!!!  gulp.src() into stream and pipe through the Plugins: .pipe() .pipe()
        .pipe(sourcemaps.init())                //  sourcemaps.init()
        .pipe(concat('app.js'))                 //  concat(1):  1.  File to create and concat to this file name
        .pipe(ngAnnotate())                     //  ngAnnotate()
        .pipe(uglify())                         //  uglify()
        .pipe(sourcemaps.write())               //  sourcemaps.write() >> Write the sourcemaps!
        .pipe(gulp.dest('assets'));             //  DESTINATION directory  >>  OUTPUT  gulp.dest()

});

//  Gulp Task to rerun any Gulp Task whenever files are edited:  <<  RE-RUN Gulp Task js EVERY TIME an ANGULAR file is changed >>  watch .js files in the ng DIRECTORY

gulp.task('watch:js', ['js'], function() {      //  task(1,2,3)  1.  name  2.  ['js'] listed as a dependency -> builds the JS before a file changes

    gulp.watch('ng/**/*.js', ['js']);            //  watch(1,2)  1.  file path to watch  2.  [tasks to run] whenever files are edited

});


//  PROCESSES -- INSTRUCTIONS:


//  RUN:  gulp js         <<  Process the Angular scripts with the tasks included above

//  RUN:  gulp watch:js   <<  rebuild the JS whenever a JS file in /ng changes