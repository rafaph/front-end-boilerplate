import webpack from 'webpack';
import config from './config';

const webpackConfig = {
  watch: config.watch,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader'
    }, {
      test: /\.html$/,
      loader: 'raw'
    }, {
      test: /\.css$/,
      loader: ['css', 'style']
    }, {
        test: /\.scss$/,
        loaders: ['sass', 'css', 'style']
    }]
  }
};

if (config.debug) {
  webpackConfig.devtool = 'source-map';
  config.debug = true;
} else {
  webpackConfig.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ];
}

export default Object.assign(webpackConfig, config.js);
