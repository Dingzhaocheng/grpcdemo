let https = require('../connect');
const router = require('koa-router')()

router.get("/", async (ctx, next) => {
    await ctx.render('index');
})

router.get('/show', async (ctx, next) => {
    let params = { name: "john" };
    let json = await https.SayHello(params);
    ctx.body = json;
});

module.exports = router;