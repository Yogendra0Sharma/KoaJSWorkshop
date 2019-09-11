const Koa = require('koa');
// import koa-router
const app = new Koa();
const PORT = 4000;

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});
