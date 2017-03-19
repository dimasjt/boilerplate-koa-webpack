const Koa = require('koa');
const logger = require('koa-logger');
const Pug = require('koa-pug');
const path = require('path');
const serve = require('koa-static');
const compress = require('koa-compress');

const app = new Koa();
const routes = require('./config/routes.js');

const pug = new Pug({
  viewPath: './app/views',
  debug: true,
  pretty: true,
  compileDebug: false,
  app: app
});

app.use(logger());

routes(app);

app.use(serve(path.join(__dirname, 'public')));
app.use(compress());

app.listen(3000)
