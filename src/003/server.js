// Context Object
const Koa = require('koa');
const app = new Koa();
const PORT = 4000;

app.use(async ctx => {
    // we can get request and response methods from context object.
    console.log(ctx.querystring);
    console.log(ctx.ip);
    ctx.body = "Hello World";
})

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});
