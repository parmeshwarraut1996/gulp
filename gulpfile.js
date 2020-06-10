const gulp = require('gulp');


// Log message
gulp.task('message', async () => {
    console.log("Gulp is running....");
});

// Copy html file
gulp.task('copyHtml', async () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});