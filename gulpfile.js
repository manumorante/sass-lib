var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');

gulp.task('scss-lint', function() {
  gulp.src('_styles.scss')
    .pipe(scsslint({'config': '.scss-lint.yml'}));
});

gulp.task('default', ['scss-lint']);
