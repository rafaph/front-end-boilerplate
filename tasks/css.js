import gulp from 'gulp';
import del from 'del';
import sass from 'gulp-sass';
import minify from 'gulp-cssnano';
import config from './../config';

gulp.task('clean:css', cb => {
  del([
    config.sass.output + '/*'
  ]).then(() => cb())
});

gulp.task('build:css', ['clean:css'], () => {
  let b = gulp
    .src(config.sass.files)
    .pipe(sass().on('error', sass.logError));

  if (!config.debug) {
    b.pipe(minify({
      discardComments: {
        removeAll: true
      }
    }));
  }

  return b.pipe(gulp.dest(config.sass.output));
});

gulp.task('watch:css', ['build:css'], () => {
  gulp.watch(config.sass.files, ['build:css']);
});
