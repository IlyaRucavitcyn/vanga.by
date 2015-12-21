var gulp = require('gulp');
var csslint = require('gulp-csslint');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');


gulp.task('css', function() {
  gulp.src('css/*.css')
    .pipe(csslint({
      'adjoining-classes':false
    }))
    .pipe(csslint.reporter());
});

gulp.task('concatcss', function () {
  return gulp.src('src/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('css/'));
});


gulp.task('concatjs', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('js/'));
});
