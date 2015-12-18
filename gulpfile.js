var gulp = require('gulp');
var csslint = require('gulp-csslint');

gulp.task('css', function() {
  gulp.src('css/main.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});
