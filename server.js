const Koa = require('koa');
const logger = require('koa-logger');
const Pug = require('koa-pug');
const path = require('path');
const serve = require('koa-static');
const compress = require('koa-compress');
const webpack = require('webpack');
const koaWebpack = require('koa-webpack');

const app = new Koa();
const routes = require('./config/routes.js');
const webpackConfig = require('./webpack.config.js').webpackConfig;
const devMiddlewareConfig = require('./webpack.config.js').devMiddlewareConfig;
const hotMiddlewareConfig = require('./webpack.config.js').hotMiddlewareConfig;

const pug = new Pug({
  viewPath: './app/views',
  debug: true,
  pretty: true,
  compileDebug: false,
  app: app
});

const middleware = koaWebpack({
  compiler: webpack(webpackConfig),
  dev: devMiddlewareConfig,
  hot: hotMiddlewareConfig
})

app.use(logger());

routes(app);

app.use(compress());

app.listen(3000)
