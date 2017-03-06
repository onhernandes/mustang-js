var gulp = require('gulp'),
	scss = require('gulp-sass'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	browser = require('browser-sync');

var basePath = './',
	dev = basePath + 'dev',
	scss_files = [dev + '/scss/*', dev + '/scss/**/*'],
	js_files = [dev + '/js/*', dev + '/js/**/*'],
	html_files = basePath + 'index.html',
	dist = basePath + 'dist/',
	assets = basePath + 'assets/';

gulp.task('build', function() {
    return browser.init({
    	server: {
    		baseDir: basePath
    	},
    	open: false
    });
});

gulp.task('js', function() {
    gulp.src(js_files)
      .pipe(plumber())
      .pipe(concat('mustang.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(dist))
      .pipe(browser.reload({stream: true}));

    gulp.src(js_files)
      .pipe(plumber())
      .pipe(rename('mustang.js'))
      .pipe(gulp.dest(dist));
});

gulp.task('reload', function() {
    return browser.reload();
});

gulp.task('styles', function() {
    return gulp.src(scss_files)
      .pipe(plumber())
      .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
      .pipe(gulp.dest(assets))
      .pipe(browser.reload({stream: true}));
});

function runner() {
  gulp.watch(js_files, ['js']);
	gulp.watch(scss_files, ['styles']);
	gulp.watch(html_files, ['reload']);
}


gulp.task('default', ['js', 'styles', 'build'], runner);