const OUTPUT = './static/';

export default {
  debug: true,
  watch: false,
  js: {
    entry: './assets/js/index.js',
    output: {
      path: `${OUTPUT}js`,
      filename: 'app.js'
    },
    eslint: ['./assets/js/**/*.js', '!node_modules/**']
  },
  sass: {
    output: `${OUTPUT}css`,
    files: './assets/sass/**/*.scss'
  },
  fonts: {
    output: `${OUTPUT}fonts`,
    files: [
      './assets/fonts/**/*'
    ]
  }
};
