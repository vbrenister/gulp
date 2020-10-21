
const { src, dest } = require('gulp');
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


const notify = require('gulp-notify');

module.exports = function() {
    return src(PATH.scssFiles)
      .pipe(csscomb('../../gulp/.csscomb.json'))
      .on(
        'error',
        notify.onError(function (error) {
          return 'File: ' + error.message;
        })
      )
      .pipe(dest(PATH.scssFolder));
}