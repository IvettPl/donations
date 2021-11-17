//modules
const { src, dest } = require('gulp');


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        imgcopy: prod_folder + '/img/'
    },
    git: {
        imgcopy: './img/'
    },
    src: {
        imgcopy: source_folder + '/img/**/*.*'
    }
}


//svgwebpcopy task
module.exports = function imgcopy(cb) {
    return src(path.src.imgcopy)
        .pipe(dest(path.build.imgcopy))
        .pipe(dest(path.git.imgcopy))
    cb();
}