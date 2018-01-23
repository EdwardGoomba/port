"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
     del = require('del');

gulp.task("concatScripts", function() {
    return gulp.src([
        'js/jquery-2.1.4.min.js',
        'js/jquery.magnific-popup.min.js',
        'js/main.js',
        'js/smoothscroll.js',
        'js/typed.js',
        'js/wow.min.js'
        ])
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

gulp.task("minifyScripts", ["concatScripts"], function() {
  return gulp.src("js/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});


gulp.task("build", ['minifyScripts'], function() {
  return gulp.src(["css/**", "js/app.min.js", 'index.html',
                   "img/**", "icon-fonts/**"], { base: './'})
            .pipe(gulp.dest('dist'));
});

gulp.task("default", function() {
  gulp.start('build');
});
