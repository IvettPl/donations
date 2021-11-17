//modules
const gulp = require('gulp');
const browsersync = require('browser-sync').create();

//tasks
const html = require('./html')
const sass = require('./scss')
const script = require('./script')
const imgcompress = require('./imgcompress')
const fontscopy = require('./fontcopy')
const jscopy = require('./jscopy')
const csscopy = require('./csscopy')
const imgcopy = require('./imgcopy')


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + '/**/*.scss',
        js: source_folder + '/**/*.js',
        img: source_folder + '/img/**/*.{jpg, png, gif, ico}',
        fonts: source_folder + '/fonts/*.*',
        jscopy: source_folder + '/libs/js/*.js',
        csscopy: source_folder + '/libs/css/*.css',
        imgcopy: source_folder + '/img/**/*.*'
    }
}


//reload server
function readyReload(cb) {
    browsersync.reload()
    cb()
}


//server cofig
module.exports = function serve(cb) {
    browsersync.init({
        server: {
            baseDir: './' + prod_folder + '/'
        },
        port: 3000,
        notify: false
    })

    cb();


    //watches over
    gulp.watch([path.watch.html], gulp.series(html, readyReload));
    gulp.watch([path.watch.css], gulp.series(sass, readyReload));
    gulp.watch([path.watch.js], gulp.series(script, readyReload));
    gulp.watch([path.watch.img], gulp.series(imgcompress, readyReload));
    gulp.watch([path.watch.fonts], gulp.series(fontscopy, readyReload));
    gulp.watch([path.watch.jscopy], gulp.series(jscopy, readyReload));
    gulp.watch([path.watch.csscopy], gulp.series(csscopy, readyReload));
    gulp.watch([path.watch.imgcopy], gulp.series(imgcopy, readyReload));
}