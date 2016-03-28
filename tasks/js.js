import gulp from 'gulp';
import del from 'del';
import eslint from 'gulp-eslint';
import {
  log,
  PluginError
} from 'gulp-util';
import webpack from 'webpack';
import colorsSupported from 'supports-color';
import webpackConfig from './../webpack.config';
import config from './../config';

gulp.task('clean:js', cb => {
  del([
    `${config.js.output.path}/*`
  ]).then(() => cb());
});

gulp.task('build:js', ['clean:js'], () => {
  webpack(webpackConfig, (err, stats) => {
    if (err) {
      throw new PluginError('webpack', err);
    }

    log('[webpack]', stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));
  });
});

gulp.task('eslint', () => (
  gulp
  .src(config.js.eslint)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failOnError())
));
