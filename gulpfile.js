// npm install gulp --save-dev
// npm install gulp-sass --save-dev
// npm install browser-sync --save-dev

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss',  gulp.series('sass'));
  // Other watchers
})


// gulp.task('sass', function() {
//   return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
//     .pipe(sass())
//     .pipe(gulp.dest('app/css'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });

// syntax for gulp watch
// gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
//
// example of gulp watch
// gulp.watch('scss/**/*.scss', ['sass']);

// example of gulp watch while watching multiple things
// this runs browsersync and sass before updating

// gulp.task('browserSync', function() {
//   browserSync.init({
//     server: {
//       baseDir: 'app'
//     },
//   })
// })
