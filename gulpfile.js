const gulp = require('gulp');
const imageMin=require('gulp-imagemin');
const uglify=require('gulp-uglify-es').default;
const concat=require('gulp-concat');
const sass=require('gulp-sass');
const browserSync=require('browser-sync').create();
// Log message
gulp.task('message', async () => {
    console.log("Gulp is running....");
});

// Copy html file
gulp.task('copyHtml', async () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

// image optimization 
gulp.task('imageMin', async () => {
    gulp.src('src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('dist/assets'))
});


// Minify JS
gulp.task('minifyJS',async ()=>{
    gulp.src('src/js/asyncSeries.js')
        .pipe(uglify().on('error', console.error))
        .pipe(gulp.dest('dist/js'))
})

//Concat JS files

gulp.task('concat',async ()=>{
    gulp.src(['src/js/add.js','src/js/subtraction.js'])
        .pipe(concat('arithmaticOperations.js').on('error',console.error))
        .pipe(uglify().on('error', console.error))
        .pipe(gulp.dest('dist/js/'))
})

// Sass 
function style(){
 return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());

}


function watch (){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    })

    gulp.watch('src/scss/*.scss',style);
    gulp.watch('src/components/*.html').on('change',browserSync.reload);
}
exports.style=style;
exports.watch=watch;  
