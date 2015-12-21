var gulp = require('gulp');
var csslint = require('gulp-csslint');

gulp.task('css', function() {
  gulp.src('css/*.css')
    .pipe(csslint({
      'adjoining-classes':false
    }))
    .pipe(csslint.reporter());
});
