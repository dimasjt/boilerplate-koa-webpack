function buildConfig(env) {
  return require(`./config/webpack/${env}`).webpackConfig
}

module.exports = buildConfig;
