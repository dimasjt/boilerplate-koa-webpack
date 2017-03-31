import webpack from 'webpack'
import path from 'path'
// import ExtractTextPlugin from 'extract-text-webpack-plugin'

const publicPath = '/public'
// const isDev = process.env.NODE_ENV == 'development';

const webpackConfig = {
  entry: {
    application: [
      'webpack-hot-middleware/client',
      './app/components/App.jsx',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'],
      },
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({
      //     use: 'css-loader',
      //     publicPath,
      //   }),
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name]_bundle.js',
    publicPath,
    sourceMapFilename: '[name].map',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new ExtractTextPlugin({
    //   filename: 'application.css',
    // }),
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
  publicPath,
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
