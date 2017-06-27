var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream'); // Converts Browserify stream to a format that can be consumed by other Gulp plugins
var browserify = require('browserify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include');
var notify = require("gulp-notify");
var browserSync = require('browser-sync').create();

var env = process.env.NODE_ENV || 'dev';
var config = require('./gulp/' + env);

gulp.task('fileinclude', function() {
  return gulp.src('./assets/templates/src/**/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './assets/renderings/components'
    }))
    .pipe(gulp.dest('../../www'))
    .pipe(notify({ message: "fileInclude tasks done."}) );
});

gulp.task('images', function() {
   return gulp.src(['./assets/tempotrip/images/**/*']).pipe(gulp.dest('../../www/images'));
});

gulp.task('fonts', function() {
   return gulp.src(['./assets/tempotrip/fonts/**/*']).pipe(gulp.dest('../../www/fonts'));
});

gulp.task('sass', function () {
  return gulp.src('./assets/tempotrip/css/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(plumber())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(concat('tempotrip.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('../../www/css'))
    .pipe(notify({ message: "Sass compiled, Sourcemaps created."}) );
});

//Node Module JS creation//
gulp.task('js1', function () {
  browserify('./assets/tempotrip/js/main.js')
    .bundle() 
    .on('error', function (e) { 
      gutil.log(e); 
    })
    .pipe(source('tempotrip.bundle.js')) 
    .pipe(gulp.dest('../../www/js'))
    .pipe(notify({ message: "JS bundled."}) ); 
});

//global Page JS Creation//
gulp.task('js2', function () {
  browserify('./assets/tempotrip/js/globals.js')
    .bundle() 
    .on('error', function (e) { 
      gutil.log(e); 
    })
    .pipe(source('tempotrip.globals.bundle.js')) 
    .pipe(gulp.dest('../../www/js'))
    .pipe(notify({ message: "Global JS bundled."}) ); 
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "../../www"
        }
    });
});

gulp.task('watch', function() {
  // Watch .html files
  gulp.watch('./assets/**/*.html').on('change', browserSync.reload);
  gulp.watch('./assets/**/*.html', ['fileinclude', browserSync.reload]);
  
  // Watch .sass files
  gulp.watch('./assets/tempotrip/css/**/*.scss', ['sass', browserSync.reload]);
  
  // Watch .js files
  gulp.watch('./assets/tempotrip/js/src/*.js', ['js1']);
  gulp.watch('./assets/tempotrip/js/src/*.js', ['js2']);
  gulp.watch(config.js.dest + '/tempotrip.bundle.js').on('change', browserSync.reload);
});

gulp.task('serve', function() {
    gulp.start('images', 'fonts', 'sass', 'js1', 'js2','fileinclude', 'browser-sync', 'watch');
});

