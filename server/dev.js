import Koa from 'koa'
import logger from 'koa-logger'
import Pug from 'koa-pug'
import path from 'path'
// import serve from 'koa-static'
import compress from 'koa-compress'
import webpack from 'webpack'
import koaWebpack from 'koa-webpack'

import routes from './../config/routes'
import {
  webpackConfig,
  devMiddlewareConfig,
  hotMiddlewareConfig,
} from './webpack/webpack.config'

const app = new Koa()

const pug = new Pug({
  viewPath: './app/views',
  debug: true,
  pretty: true,
  compileDebug: false,
  app,
});

const middleware = koaWebpack({
  compiler: webpack(webpackConfig),
  dev: devMiddlewareConfig,
  hot: hotMiddlewareConfig,
})

app.use(middleware);

app.use(logger());

routes(app);

app.use(compress());

app.listen(3000)
