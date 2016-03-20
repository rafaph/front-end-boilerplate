require('babel-register')({
  ignore: /node_modules/,
  extensions: ['.js']
});

require('require-dir')('./tasks', {
  recurse: true
});
