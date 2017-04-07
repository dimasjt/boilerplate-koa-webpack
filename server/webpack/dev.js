import WebpackNotifierPlugin from 'webpack-notifier'

import defaultConfig from './base'

module.exports = Object.assign(defaultConfig, {
  devtool: 'eval-source-map',
  plugins: [
    ...defaultConfig.plugins,
    new WebpackNotifierPlugin(),
  ],
})
