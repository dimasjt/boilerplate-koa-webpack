import Koa from 'koa'
import logger from 'koa-logger'
import compress from 'koa-compress'
import webpack from 'webpack'
import koaWebpack from 'koa-webpack'
import serve from 'koa-static'
// import Pug from 'koa-pug'

import routes from './config/routes'
import webpackConfig from './webpack/dev'

const app = new Koa()
const compiler = webpack(webpackConfig)
const middleware = koaWebpack({
  compiler,
  dev: {
    lazy: false,
    publicPath: '/assets',
    stats: {
      colors: true,
    },
  },
})

app.use(middleware)
app.use(logger())
app.use(compress())
app.use(serve('./../assets'))

app.use(routes.routes())
app.listen(3000)
