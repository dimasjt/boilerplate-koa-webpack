import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: {
    application: [
      'webpack-hot-middleware/client',
      './app/components/App.jsx',
    ],
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, '../../assets'),
    filename: '[name]_bundle.js',
    sourceMapFilename: '[name].map',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin(),
  ],
}
