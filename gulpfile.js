const gulp = require('gulp');
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const sourcePath={
    htmlPath:'./*.html',
    imagePath:'src/images/*',
    minifyJSPath:'src/js/asyncSeries.js',
    concatJSPath:'src/js/',
    scssPath:'src/scss/*.scss'
}
const destPath={
    dist:'dist',
    assets:'dist/assets',
    js:'dist/js',
    css:'dist/css'
}
// Log message
gulp.task('message', async () => {
    console.log("Gulp is running....");
});

// Copy html file
function copyHtml() {
    return gulp.src(sourcePath.htmlPath)
        .pipe(gulp.dest(destPath.dist))
}

// image optimization 
function imageMinify() {
    return gulp.src(sourcePath.imagePath)
        .pipe(imageMin().on('error',console.error))
        .pipe(gulp.dest(destPath.assets))
}

// Minify JS
function minifyJS() {
    return gulp.src(sourcePath.minifyJSPath)
        .pipe(uglify().on('error', console.error))
        .pipe(gulp.dest(destPath.js))
}

//Concat JS files
function concatJS() {
    return gulp.src([sourcePath.concatJSPath+'add.js', sourcePath.concatJSPath+'subtraction.js'])
        .pipe(concat('arithmaticOperations.js').on('error', console.error))
        .pipe(uglify().on('error', console.error))
        .pipe(gulp.dest(destPath.js))
}

// Sass 
function style() {
    return gulp.src(sourcePath.scssPath)
        .pipe(sass().on('error',console.error))
        .pipe(gulp.dest(destPath.css))
        .pipe(browserSync.stream());

}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch(sourcePath.scssPath, style);
    gulp.watch('src/components/*.html').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;
exports.copyHtml = copyHtml;
exports.imageMinify = imageMinify;
exports.minifyJS = minifyJS;
exports.concatJS = concatJS;