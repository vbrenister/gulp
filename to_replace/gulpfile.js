'use strict';

const { task, series, watch } = require('gulp');

const PATH = require('../../gulp/gulp-init.js');

const comb = require('../../gulp/tasks/comb.js'),
    scssDC     = require('../../gulp/tasks/scss.js').scssDC,
    uglifyes = require('../../gulp/tasks/uglify.js').uglifyes,
    { sync, syncInit } = require('../../gulp/tasks/sync.js');

function watchFiles () {
    syncInit();
    watch(PATH.scssFiles, series(scssDC));
    watch(PATH.jsFiles, series(uglifyes, sync));
    watch(PATH.htmlFiles, sync);
}

task('combScss', comb);
task('uglifyEs6', series(uglifyes, sync));
task('sass', series(scssDC));
task('watch', watchFiles);
