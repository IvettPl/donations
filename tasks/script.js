//modules
const { src, dest } = require('gulp');

const plumber = require('gulp-plumber'); //compilation errors plugin
const notify = require('gulp-notify'); //compilation errors plugin

const fileinclude = require('gulp-file-include'); //plugin for file includes
const babel = require('gulp-babel'); // new syntax
const uglify = require('gulp-uglify'); //plugin to minify js
const rename = require('gulp-rename'); //rename files


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        js: prod_folder + '/js/'
    },
    git: {
        js: './js/'
    },
    src: {
        js: source_folder + '/js/main.js'
    }
}


// script task
module.exports = function script(cb) {
    return src(path.src.js)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'JS',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(fileinclude())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest(path.build.js))
        .pipe(dest(path.git.js))
    cb();
}