const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-minify');

function jsMinify() {
  return src('src/js/*.js')
    .pipe(minify())
    . pipe(dest('dest/js'))
}

function compileCss () {
	return src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dest/css'));
}

function autoprefixing () {
	return src('dest/css/*.css')
	.pipe(autoprefixer())
	.pipe(dest('dest/css'));
}
exports.watch = function() {
	watch('src/scss/*.scss', compileCss);
	watch('src/js/*.js', jsMinify);
}
exports.build = series(compileCss, autoprefixing, jsMinify);