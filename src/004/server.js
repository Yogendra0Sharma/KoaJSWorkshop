const Koa = require('koa');
// import koa-router
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const PORT = 4000;

// Create a root ('/') router & send 'Welcome to Koa' message to client.
router.get('/',ctx => {
    ctx.body = "Welcome to Koa";
})
// register routes middleware to app
app.use(router.routes());

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});
