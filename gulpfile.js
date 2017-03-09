var gulp = require('gulp');
var del = require('del');

gulp.task('sass', function () {
  gulp.src('src/_styles.scss')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  del.sync('dist');
});

gulp.task('default', ['clean'], function () {
  gulp.start('sass');
});
