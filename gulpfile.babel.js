
const gulp = require('gulp');
const requireDir = require('require-dir');
requireDir('./gulp/tasks', {recurse: true});
const config = require('./gulp/config.js');

gulp.task('watch', ()=>{
    gulp.watch(`${config.srcDir}/**/*.js`, ['conpile_js']);
    gulp.watch(`${config.srcDir}/**/*.jsx`, ['conpile_js']);
});

gulp.task('default', ['conpile_js','watch']);
