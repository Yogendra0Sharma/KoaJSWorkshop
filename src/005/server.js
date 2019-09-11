const Koa = require('koa');
// import koa-router
const Router = require('koa-router');
// import koa-parser
const bodyParser = require('koa-parser');
// import lodash
const _ = require('lodash');
const app = new Koa();

const router = require('./routers');
// register bodyParser to application for POST request
app.use(bodyParser());
const PORT = 4000;
// sync models
const db = require('./models');
db.sequelize.sync()
    .then(()=>{
        console.log("DB sync");
    })

// register routes middleware to app
app.use(router.routes());

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});
