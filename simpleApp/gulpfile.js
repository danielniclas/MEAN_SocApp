/**
 * Created by Daniel on 2/18/2016.
 */


var gulp = require('gulp');

gulp.task('hello', ['bark'], function() {
    console.log("Hello World from Gulp!")
});

gulp.task('bark', function() {
    console.log("Bark Bark from Gulp!")
});