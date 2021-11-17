//modules
const { src, dest } = require('gulp');


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        fontcopy: prod_folder + '/fonts/'
    },
    git: {
        fontcopy: './fonts/'
    },
    src: {
        fontcopy: source_folder + '/fonts/*.*'
    }
}


//fonts copy task
module.exports = function fontcopy(cb) {
    return src(path.src.fontcopy)
        .pipe(dest(path.build.fontcopy))
        .pipe(dest(path.git.fontcopy))
    cb();
}