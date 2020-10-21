
const PATH = {
    scssFile: './assets/scss/style.scss',
    scssFiles: './assets/scss/**/*.scss',
    scssFolder: './assets/scss',
    cssFolder: './assets/css',
    htmlFiles: './*.html',
    jsFiles: [
      './assets/js/**/*.js',
      '!./assets/js/**/*.min.js',
      '!./assets/js/**/all.js',
    ],
    jsFolder: './assets/js',
    jsDestFolder: './dest/js',
    jsBundleName: 'all.js',
  };

const {  src, dest} = require('gulp');
const rename = require('gulp-rename');
const terser = require('gulp-terser');

exports.uglifyes = function() {
    return src(PATH.jsFiles)
      .pipe(terser({
        toplevel: true,
        output: { quote_style: 3 }
      }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(dest(PATH.jsFolder));
  }