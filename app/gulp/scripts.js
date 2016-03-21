/**
 * Created by danielniclas on 1/4/16.
 */


var gulp = require('gulp');     //  Create Gulp OBJECT

//  Gulp FEATURES:
var concat = require('gulp-concat');            //  Gulp CONCAT
var sourcemaps = require('gulp-sourcemaps');    //  Gulp SOURCEMAPS
var uglify = require('gulp-uglify');            //  Gulp UGLIFY
var ngAnnotate = require('gulp-ng-annotate');   //  Gulp ngANNOTATE


gulp.task('js', function(){                     //  js is the NAME of the task:  > gulp js

    gulp.src(['ng/module.js', 'ng/**/*.js'])    //  Load /ng/module.js FIRST!
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))                 //  concat(1):  1.  File to create and concat to this file name
        .pipe(ngAnnotate())                     //  ngAnnotate()
        .pipe(uglify())                         //  uglify()
        .pipe(sourcemaps.write())               //  Write the sourcemaps!
        .pipe(gulp.dest('assets'));             //  DESTINATION directory

});

//  Gulp Task to rerun any Gulp Task whenever files are edited:

gulp.task('watch:js', ['js'], function() {      //  task(1,2,3)  1.  name  2.  ['js'] listed as a dependency -> builds the JS before a file changes

    gulp.watch('ng/**/*.js', ['js']);            //  watch(1,2)  1.  file path to watch  2.  [tasks to run] whenever files are edited

});