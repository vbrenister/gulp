const browserSync = require('browser-sync');

exports.sync = async function() {
    browserSync.reload();
}

exports.syncInit = function() {
    browserSync({
      server: {
        baseDir: './',
      },
      notify: false,
    });
}