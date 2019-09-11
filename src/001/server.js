const Koa = require('koa');
const app = new Koa();
const PORT = 4000;

// Add Middleware
app.use(async ctx => {
    ctx.body = "Hello World";
})
app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});
