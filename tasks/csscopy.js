//modules
const { src, dest } = require('gulp');


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        csscopy: prod_folder + '/css/'
    },
    git: {
        csscopy: './css/'
    },
    src: {
        csscopy: source_folder + '/libs/css/*.css'
    }
}


//csscopy task
module.exports = function csscopy(cb) {
    return src(path.src.csscopy)
        .pipe(dest(path.build.csscopy))
        .pipe(dest(path.git.csscopy))
    cb();
}