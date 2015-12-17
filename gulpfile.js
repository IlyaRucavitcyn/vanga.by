var csslint = require('gulp-csslint');

gulp.task('css', function() {
  gulp.src('css/*.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});
