// Context Object
// Koa context encapsulate request & response objects
const Koa = require('koa');
const app = new Koa();
const PORT = 4000;

app.use(async ctx => {
    // we can get request and response methods from context object.
    // request object methods
    console.log(ctx.querystring);
    console.log(ctx.ip);
    ctx.body = "Hello World";
    // response object methods
    ctx.status = 400;
    // goto browser network console tab and check status
})

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});
