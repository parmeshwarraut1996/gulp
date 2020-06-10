const gulp = require('gulp');
const imageMin=require('gulp-imagemin');

// Log message
gulp.task('message', async () => {
    console.log("Gulp is running....");
});

// Copy html file
gulp.task('copyHtml', async () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

// image optimiazation 
gulp.task('imageMin', async () => {
    gulp.src('src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/assets'))
});