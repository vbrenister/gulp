module.exports = {
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