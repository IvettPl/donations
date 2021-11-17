const { src, dest } = require('gulp');

const plumber = require('gulp-plumber'); //compilation errors plugin
const notify = require('gulp-notify'); //compilation errors plugin

const sass = require('gulp-sass')(require('sass')); //compilation scss to css plugin
const prefixer = require('gulp-autoprefixer'); //add prefix to style
const queries = require('gulp-group-css-media-queries'); //grouping of media queries
const cleanCss = require('gulp-clean-css'); //minify css
const rename = require('gulp-rename'); //rename files

//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        css: prod_folder + '/css/'
    },
    git: {
        css: 'css/'
    },
    src: {
        css: source_folder + '/pages/**/*.scss'
    }
}


//styles task
module.exports = function styles(cb) {
    return src(path.src.css)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'STYLUS',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(sass())
        .pipe(prefixer({
            overrideBrowserslist: ['last 3 versions'],
            cascade: true
        }))
        .pipe(queries())
        // .pipe(cleanCss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest(path.build.css))
        .pipe(dest(path.git.css))
    cb();
}