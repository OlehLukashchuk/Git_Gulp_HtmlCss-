const gulp = require('gulp');
const {series , parallel} = gulp;
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autopref = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');


const html = () => {
  return gulp
    .src("src/pug/*.pug")
    .pipe(pug())
    .pipe(gulp.dest('build'))
}

const styles = () => {
  return gulp
    .src('src/styles/*.scss')
    .pipe(sass().on('err',sass.logError))
    .pipe(autopref())
    .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('build/css'))
}

