import gulp from 'gulp';
import config from './../config';

let tasks = ['build:js'];

if(config.watch) {
  tasks = [...tasks, 'watch:css', 'watch:fonts'];
} else {
  tasks = [...tasks, 'build:css', 'build:fonts'];
}

gulp.task('default', tasks);
