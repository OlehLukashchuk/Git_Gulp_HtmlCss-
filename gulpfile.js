const gulp = require('gulp');
const {series , parallel} = gulp;
const pug = require('gulp-pug');

const html = () => {
  return gulp
    .src("src/pug/*.pug")
    .pipe(pug())
    .pipe(gulp.dest('build'))
}