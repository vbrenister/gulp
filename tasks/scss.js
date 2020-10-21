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



const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const csscomb = require('gulp-csscomb');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const sortCSSmq = require('sort-css-media-queries');


const PLUGINS = [
  autoprefixer({
    overrideBrowserslist: ['last 5 versions', '> 1%'],
    cascade: true,
  }),
  mqpacker({ sort: sortCSSmq }),
];

exports.scssDC = function() {
    return src(PATH.scssFile)
      .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
      .pipe(postcss(PLUGINS))
      .pipe(csscomb('../../gulp/.csscomb.json'))
      .pipe(dest(PATH.cssFolder))
      .pipe(
        notify({ message: ' ------------------ SCSS compiled!', sound: false })
      )
      .pipe(browserSync.reload({ stream: true }));
  }