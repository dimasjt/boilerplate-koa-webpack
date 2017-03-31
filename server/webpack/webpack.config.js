import webpack from 'webpack'
import path from 'path'

// const isDev = process.env.NODE_ENV == 'development';

const webpackConfig = {
  entry: [
    'webpack-hot-middleware/client',
    './app/components/App.jsx',
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      exclude: /node_modules/,
      loaders: ['react-hot-loader', 'babel-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

const devMiddlewareConfig = {
  noInfo: false,
  quiet: false,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true,
  },
  publicPath: '/public',
  stats: {
    colors: true,
  },
}

const hotMiddlewareConfig = {}

module.exports = {
  webpackConfig,
  devMiddlewareConfig,
  hotMiddlewareConfig,
}
