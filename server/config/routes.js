import send from 'koa-send'
import Router from 'koa-router'

const router = new Router()

router.get('*', async (ctx) => {
  await send(ctx, 'assets/index.html')
})

module.exports = router
