module.exports = function(app) {
  app.use(ctx => {
    ctx.render('index');
  })
}
