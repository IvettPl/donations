//modules
const { src, dest } = require('gulp');

const plumber = require('gulp-plumber'); //compilation errors plugin
const notify = require('gulp-notify'); //compilation errors plugin

const fileinclude = require('gulp-file-include'); //plugin for file includes
const prettify = require('gulp-html-prettify'); // html formater plugin
const htmlmin = require('gulp-htmlmin'); //plugin to minify HTML


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        html: prod_folder + '/'
    },
    git: {
        html: './'
    },
    src: {
        html: source_folder + '/pages/**/*.html'
    }
}



//html task
module.exports = function html(cb) {
    return src(path.src.html)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'HTML',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(fileinclude())
        .pipe(prettify({
            indent_size: 4
        }))
        // .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest(path.build.html))
        .pipe(dest(path.git.html))
    cb();
}