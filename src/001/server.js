const Koa = require('koa');
const app = new Koa();
const PORT = 4000;
app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});
