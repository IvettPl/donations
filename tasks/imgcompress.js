//modules
const { src, dest } = require('gulp');

const imagemin = require('gulp-imagemin'); //Minify PNG, JPEG, GIF and SVG images
const pngquant = require('imagemin-pngquant'); //Minify PNG images


//variables
const prod_folder = 'dist';
const source_folder = 'src';

let path = {
    build: {
        img: prod_folder + '/img/'
    },
    git: {
        img: './img/'
    },
    src: {
        img: source_folder + '/img/'
    }
}


//imgcompress task
module.exports = function imgcompress(cb) {
    return src(path.src.img + '**/*.{png,jpg,svg}')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            }),
            imagemin.optipng({ optimizationLevel: 3 }),
            pngquant({ quality: [0.7, 0.8], speed: 5 })
        ]))
        .pipe(dest(path.build.img))
        .pipe(dest(path.git.img))
    cb();
}