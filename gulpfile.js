var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS    = require('gulp-clean-css'),
    browserSync  = require('browser-sync').create(),
    concat       = require('gulp-concat'),
    gcmq =		   require('gulp-group-css-media-queries');
    uglify       = require('gulp-uglify');

gulp.task('browser-sync', ['styles'], function() {
    browserSync.init({
        proxy: 'pet-disign/',
        notify: false
    });
});
gulp.task('styles', function () {
    return gulp.src('dev/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gcmq())
        .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});
gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('sass/**/*.scss').on("change", browserSync.reload);
    gulp.watch('dist/js/*.js').on("change", browserSync.reload);
    gulp.watch('dist/*.html').on('change', browserSync.reload);
    gulp.watch('./**/*.php').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);