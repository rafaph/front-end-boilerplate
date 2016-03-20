import gulp from 'gulp';
import del from 'del';
import config from './../config';

gulp.task('clean:fonts', cb => {
  del([
    config.fonts.output + '/*'
  ]).then(() => cb());
});

gulp.task('build:fonts', ['clean:fonts'], () => {
  return gulp
    .src(config.fonts.files)
    .pipe(gulp.dest(config.fonts.output));
});

gulp.task('watch:fonts', ['build:fonts'], () => {
  gulp.watch(config.fonts.files, ['build:fonts']);
});
