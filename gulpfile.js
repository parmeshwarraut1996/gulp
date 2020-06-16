const gulp = require('gulp');
const imageMin=require('gulp-imagemin');
const uglify=require('gulp-uglify-es').default;
const concat=require('gulp-concat');
const sass=require('gulp-sass');

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

gulp.task('sass',async()=>{
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})

