const webpack = require('webpack');
const path = require('path');

const isDev = process.env.NODE_ENV == 'development';

const webpackConfig = {
  devtool: isDev ? 'source-map' : '',
  entry: [
    './app/components/App.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loaders: ['react-hot-loader', 'babel-loader']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

const devMiddlewareConfig = {
  noInfo: false,
  quiet: false,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: "/assets/",
  stats: {
    colors: true
  }
}

const hotMiddlewareConfig = {}

module.exports = {
  webpackConfig: webpackConfig,
  devMiddlewareConfig: devMiddlewareConfig,
  hotMiddlewareConfig: hotMiddlewareConfig
}