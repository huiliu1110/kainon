var gulp = require('gulp'),
    less = require('gulp-less'),
    jade = require('gulp-jade');

gulp.task('css', function() {
  return gulp.src('../src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('../target/css'));
});

gulp.task('templates', function() {
  return gulp.src('../src/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('../target/'));
});

gulp.task('default', ['css','templates']);
