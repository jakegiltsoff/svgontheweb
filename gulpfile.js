var gulp = require('gulp');
var sass = require('gulp-sass');
var globbing = require('gulp-css-globbing');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var webserver = require('gulp-webserver');

gulp.task('sass', function() {
  gulp.src('./assets/sass/style.scss')
    .pipe(globbing({
      extensions: ['.scss']
    }))
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(minifyCss())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({
      port: 1234,
      livereload: true
    }));
});

gulp.task('default', ['sass', 'serve'], function() {
  gulp.watch(['./assets/sass/*.scss', './assets/sass/**/*.scss'], ['sass']);
});
