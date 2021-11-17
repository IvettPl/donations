//modules
const gulp = require('gulp');

//tasks
const serv = require('./tasks/server') //watch, start and reload server
const html = require('./tasks/html')  //compilation html files
const sass = require('./tasks/scss') //compilation scss to css
const script = require('./tasks/script') //compilation js files
const imgcompress = require('./tasks/imgcompress') //Minify and copy to build PNG, JPEG, GIF and SVG images
const fontscopy = require('./tasks/fontcopy') //copy fonts to build folder
const jscopy = require('./tasks/jscopy') //copy js from libs to build folder
const csscopy = require('./tasks/csscopy') //copy css from libs to build folder
const imgcopy = require('./tasks/imgcopy') //copy img to build folder
const clean = require('./tasks/clean') //delete builder files before start progect


const dev = gulp.parallel(html, sass, script, fontscopy, imgcopy, jscopy, csscopy);
const build = gulp.parallel(html, sass, script, fontscopy, jscopy, csscopy, imgcompress, imgcopy);

module.exports.start = gulp.series(clean, dev, serv);
module.exports.build = gulp.series(clean, build);