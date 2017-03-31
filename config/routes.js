const Router = require('koa-router')

const router = new Router()

const routes = (app) => {
  router.get('/', (ctx) => {
    ctx.render('index')
  })

  app.use(router.routes())
    .use(router.allowedMethods())
}

module.exports = routes;
