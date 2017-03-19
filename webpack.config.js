const webpack = require('webpack');
const path = require('path');

const isDev = process.env.NODE_ENV == 'development';

const config = {
  devtool: isDev ? 'source-map' : '',
  entry: [
    './app/components/App.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: 'dist',
    publicPath: '/public',
    filenmae: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = config
