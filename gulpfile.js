var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var autoprefixer = require('autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var postcss = require('gulp-postcss')
var browserSync = require('browser-sync').create();
var log = require('fancy-log');
const c = require('ansi-colors');

// Minify CSS
gulp.task('css:minify', function () {
  return gulp.src(['./css/*.css', '!./css/*.min.css'])
    .pipe(cleanCSS({
        debug: true,
        compatibility: 'ie8'
      })
      .on('error', function (err) {
        log.error(c.red('[Error]'), err.toString());
      })
    )
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// CSS
gulp.task('css', gulp.series('css:minify'));

// Minify JavaScript
gulp.task('js:minify', function () {
  return gulp.src(['./content/js/*.js', '!./content/js/*.min.js', '!./content/js/google*'])
    .pipe(uglify()
      .on('error', function (err) {
        log.error(c.red('[Error]'), err.toString());
      })
    )
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./content/js'))
    .pipe(browserSync.stream());
});

// JS
gulp.task('js', gulp.series('js:minify'));

// Default task
gulp.task('default', gulp.series('css', 'js'));

// Configure the browserSync task
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task('dev', gulp.series('css', 'js', 'browserSync', function () {
  gulp.watch('./css/*.css', gulp.series('css'));
  gulp.watch('./content/js/*.js', gulp.series('js'));
  gulp.watch('./*.html', browserSync.reload);
}));
