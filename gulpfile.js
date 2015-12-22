var gulp = require('gulp');
var csslint = require('gulp-csslint');
var jslint = require('gulp-jslint');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');


gulp.task('csslint', function() {
  gulp.src('src/**/*.css')
    .pipe(csslint({
      'adjoining-classes':false
    }))
    .pipe(csslint.reporter());
});

gulp.task('jslint', function () {
  return gulp.src(['src/js_files/*.js'])
    .pipe(jslint({
        node: true,
        evil: true,
        nomen: true,
        global: [],
        predef: [],
        reporter: 'default',
        edition: '2014-07-08',
        errorsOnly: false
    }))
    .on('error', function (error) {
            console.error(String(error));
    });
});

gulp.task('concatcss', function () {
  return gulp.src('src/css_files/*.css')
    .pipe(concatCss('bundle.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('concatjs', function() {
  return gulp.src('src/js_files/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('js/'));
});

gulp.task('cssmin', function () {
	gulp.src('css/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('css'));
});
