var gulp = require('gulp');
var concatCss = require('gulp-concat-css');

gulp.task('prod:css', function () {
  return gulp.src('public/css/**/*.css')
    .pipe(concatCss("app.css"))
    .pipe(gulp.dest('.'));
});

gulp.task('dev:css', function () {
  return gulp.src('public/css/**/*.css')
    .pipe(concatCss("app.css"))
    .pipe(gulp.dest('.'));
});