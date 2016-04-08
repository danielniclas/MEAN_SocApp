/**
 * Created by danielniclas on 1/4/16.
 */


var gulp = require('gulp');

var stylus = require('gulp-stylus');            //  Stylus CSS pre-processor


gulp.task('css', function() {

    return gulp.src('css/app.styl')
        .pipe(stylus())
        .pipe(gulp.dest('assets'))

});

gulp.task('watch:css', ['css'], function () {    //  task(1,2,3)  1.  name  2.  ['css'] listed as a dependency -> builds the css.JS before a file changes

    gulp.watch('css/**/*.styl', ['css'])

});


//  PROCESSES -- INSTRUCTIONS:

//  Run:  gulp css

//  Run:  gulp watch:css