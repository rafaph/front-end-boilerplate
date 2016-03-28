const OUTPUT = './static';
const INPUT = './assets';

export default {
  debug: true,
  watch: false,
  js: {
    entry: `${INPUT}/js/index.js`,
    output: {
      path: `${OUTPUT}/js`,
      filename: 'app.js'
    },
    eslint: [
      `${INPUT}/js/**/*.js`,
      '!node_modules/**'
    ]
  },
  sass: {
    output: `${OUTPUT}/css`,
    files: `${INPUT}/sass/**/*.scss`
  },
  fonts: {
    output: `${OUTPUT}/fonts`,
    files: [
      `${INPUT}/fonts/**/*`
    ]
  }
};
