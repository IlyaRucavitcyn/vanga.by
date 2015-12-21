var gulp = require('gulp');
var csslint = require('gulp-csslint');
var concatCss = require('gulp-concat-css');

gulp.task('css', function() {
  gulp.src('out/css/*.css')
    .pipe(csslint({
      'adjoining-classes':false
    }))
    .pipe(csslint.reporter());
});

gulp.task('concatcss', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('css/'));
});
