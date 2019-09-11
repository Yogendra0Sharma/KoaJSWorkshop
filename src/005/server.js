const Koa = require('koa');
// import koa-router
const Router = require('koa-router');
// import koa-parser
const bodyParser = require('koa-parser');
// import lodash
const _ = require('lodash');
const app = new Koa();
const router = new Router();

// register bodyParser to application for POST request
app.use(bodyParser());
const PORT = 4000;

// Create a root ('/') router with GET request & send 'Welcome to Koa' message to client.
router.get('/',ctx => {
    ctx.body = "Welcome to Koa";
})

// register routes middleware to app
app.use(router.routes());

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});
