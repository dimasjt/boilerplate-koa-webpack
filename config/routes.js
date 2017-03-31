const Router = require('koa-router');

var router = new Router();

var routes = function(app) {
  router.get('/', (ctx, next) => {
    ctx.render('index');
  })

  app.use(router.routes())
    .use(router.allowedMethods())
}

module.exports = routes;
