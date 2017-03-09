var gulp = require('gulp');
var del = require('del');
var scsslint = require('gulp-scss-lint');

gulp.task('scss-lint', function() {
  gulp.src('src/_styles.scss')
    .pipe(scsslint({'config': '.scss-lint.yml'}));
});

gulp.task('sass', function () {
  gulp.src('src/_styles.scss')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  del.sync('dist');
});

gulp.task('default', ['clean'], function () {
  gulp.start('scss-lint');
  gulp.start('sass');
});
