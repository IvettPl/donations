//modules
const del = require('del'); //delete files before start progect


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    clean: './' + prod_folder + '/',
    cleanCss: './css',
    cleanHtml: './*.html',
    cleanJs: './js',
    cleanImg: './img',
    cleanFonts: './fonts'
}


//clean task
module.exports = function clean() {
    return del(
        [
            path.clean,
            path.cleanCss,
            path.cleanHtml,
            path.cleanJs,
            path.cleanImg,
            path.cleanFonts
        ]
    );
}